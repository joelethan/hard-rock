import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { fromError } from "zod-validation-error";

const contactRateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000;
const RATE_LIMIT_MAX = 3;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = contactRateLimit.get(ip);
  
  if (!record || now > record.resetTime) {
    contactRateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return false;
  }
  
  record.count++;
  return true;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post("/api/contact", async (req, res) => {
    const clientIp = req.ip || req.socket.remoteAddress || "unknown";
    
    if (!checkRateLimit(clientIp)) {
      return res.status(429).json({
        error: "Too many requests. Please wait a minute before sending another message."
      });
    }
    try {
      const result = insertContactMessageSchema.safeParse(req.body);
      
      if (!result.success) {
        const validationError = fromError(result.error);
        return res.status(400).json({ 
          error: validationError.toString() 
        });
      }
      
      const message = await storage.createContactMessage(result.data);
      
      return res.status(201).json({ 
        success: true,
        message: "Thank you for your message! We'll get back to you soon.",
        id: message.id
      });
    } catch (error) {
      console.error("Error saving contact message:", error);
      return res.status(500).json({ 
        error: "Failed to send message. Please try again later." 
      });
    }
  });

  app.get("/api/contact", async (req, res) => {
    try {
      const messages = await storage.getContactMessages();
      return res.json(messages);
    } catch (error) {
      console.error("Error fetching contact messages:", error);
      return res.status(500).json({ error: "Failed to fetch messages" });
    }
  });

  return httpServer;
}
