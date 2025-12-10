import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ScrollContextType {
  pendingTarget: string | null;
  setPendingTarget: (target: string | null) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const [pendingTarget, setPendingTarget] = useState<string | null>(null);

  return (
    <ScrollContext.Provider value={{ pendingTarget, setPendingTarget }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScrollContext must be used within a ScrollProvider");
  }
  return context;
}

export function useScrollToTarget() {
  const { pendingTarget, setPendingTarget } = useScrollContext();

  useEffect(() => {
    if (!pendingTarget) return;

    let attempts = 0;
    const maxAttempts = 50;
    const delay = 50;

    const tryScroll = () => {
      const element = document.getElementById(pendingTarget);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setPendingTarget(null);
        return;
      }
      
      attempts++;
      if (attempts < maxAttempts) {
        setTimeout(tryScroll, delay);
      } else {
        setPendingTarget(null);
      }
    };

    setTimeout(tryScroll, delay);
  }, [pendingTarget, setPendingTarget]);
}
