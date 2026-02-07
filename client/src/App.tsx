import { useState, useEffect } from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AccessKeyAuth } from "./components/AccessKeyAuth";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedKey = localStorage.getItem('pemm_access_key');
    if (savedKey) {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-editorial-sand flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-executive-forest border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-carbon-ink font-semibold">Cargando...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <AccessKeyAuth onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
