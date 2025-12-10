import { Switch, Route, useLocation } from "wouter";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollProvider } from "@/lib/scroll-context";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import ServiceDetail from "@/pages/service-detail";
import ProgramDetail from "@/pages/program-detail";
import PlanVisit from "@/pages/plan-visit";
import FullGallery from "@/pages/full-gallery";

function ScrollToTop() {
  const [location] = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services/:slug" component={ServiceDetail} />
        <Route path="/programs/:slug" component={ProgramDetail} />
        <Route path="/plan-your-visit" component={PlanVisit} />
        <Route path="/gallery" component={FullGallery} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollProvider>
          <Toaster />
          <Router />
        </ScrollProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
