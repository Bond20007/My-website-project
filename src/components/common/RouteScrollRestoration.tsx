import { useEffect } from "react";
import { useLocation } from "wouter";

export function RouteScrollRestoration() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [location]);

  return null;
}
