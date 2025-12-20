import { useEffect, useCallback } from "react";
import { useCookieConsent, CookieConsent } from "@/contexts/CookieConsentContext";

// Script configurations for different consent categories
interface TrackerScript {
  id: string;
  category: keyof Omit<CookieConsent, "necessary">;
  src?: string;
  innerHTML?: string;
  async?: boolean;
  defer?: boolean;
}

// Define your tracking scripts here
// These will only be loaded when user gives consent for the respective category
const TRACKER_SCRIPTS: TrackerScript[] = [
  // Example: Google Analytics
  // {
  //   id: "ga-script",
  //   category: "analytics",
  //   innerHTML: `
  //     window.dataLayer = window.dataLayer || [];
  //     function gtag(){dataLayer.push(arguments);}
  //     gtag('js', new Date());
  //     gtag('config', 'GA_MEASUREMENT_ID');
  //   `,
  // },
  // {
  //   id: "ga-tag",
  //   category: "analytics",
  //   src: "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID",
  //   async: true,
  // },
  
  // Example: Meta Pixel
  // {
  //   id: "meta-pixel",
  //   category: "marketing",
  //   innerHTML: `
  //     !function(f,b,e,v,n,t,s)
  //     {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  //     n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  //     if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  //     n.queue=[];t=b.createElement(e);t.async=!0;
  //     t.src=v;s=b.getElementsByTagName(e)[0];
  //     s.parentNode.insertBefore(t,s)}(window, document,'script',
  //     'https://connect.facebook.net/en_US/fbevents.js');
  //     fbq('init', 'YOUR_PIXEL_ID');
  //     fbq('track', 'PageView');
  //   `,
  // },
];

// Hook to manage cookie-dependent scripts
export const useCookieScripts = () => {
  const { consent, hasConsented } = useCookieConsent();

  // Inject a script into the document
  const injectScript = useCallback((script: TrackerScript) => {
    // Check if script already exists
    if (document.getElementById(script.id)) {
      return;
    }

    const scriptElement = document.createElement("script");
    scriptElement.id = script.id;

    if (script.src) {
      scriptElement.src = script.src;
    }

    if (script.innerHTML) {
      scriptElement.innerHTML = script.innerHTML;
    }

    if (script.async) {
      scriptElement.async = true;
    }

    if (script.defer) {
      scriptElement.defer = true;
    }

    document.head.appendChild(scriptElement);
  }, []);

  // Remove a script from the document
  const removeScript = useCallback((scriptId: string) => {
    const existingScript = document.getElementById(scriptId);
    if (existingScript) {
      existingScript.remove();
    }
  }, []);

  // Manage scripts based on consent
  useEffect(() => {
    if (!hasConsented || !consent) {
      // No consent given yet, ensure no optional scripts are loaded
      TRACKER_SCRIPTS.forEach((script) => {
        removeScript(script.id);
      });
      return;
    }

    // Load or remove scripts based on consent
    TRACKER_SCRIPTS.forEach((script) => {
      const categoryConsent = consent[script.category];
      
      if (categoryConsent) {
        // User consented to this category, inject script
        injectScript(script);
      } else {
        // User did not consent, remove script if it exists
        removeScript(script.id);
      }
    });
  }, [consent, hasConsented, injectScript, removeScript]);

  // Helper to check if a specific category has consent
  const hasConsentFor = useCallback(
    (category: keyof Omit<CookieConsent, "necessary">): boolean => {
      return consent?.[category] ?? false;
    },
    [consent]
  );

  return {
    hasConsentFor,
    hasConsented,
  };
};

// Component that manages script loading
export const CookieScriptManager = () => {
  useCookieScripts();
  return null;
};

export default CookieScriptManager;
