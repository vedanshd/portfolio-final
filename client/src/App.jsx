import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import "./index.css";
function Router() {
    return (<Switch>
      <Route path="/" component={Home}/>
      <Route component={NotFound}/>
    </Switch>);
}
function App() {
    var _a = useState(true), isLoading = _a[0], setIsLoading = _a[1];
    useEffect(function () {
        // Simulate loading time for smooth animations
        var timer = setTimeout(function () {
            setIsLoading(false);
        }, 500);
        return function () { return clearTimeout(timer); };
    }, []);
    if (isLoading) {
        return (<div className="min-h-screen w-full flex items-center justify-center bg-secondary">
        <div className="w-12 h-12 rounded-full border-4 border-primary border-t-accent animate-spin"></div>
      </div>);
    }
    return (<QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>);
}
export default App;
