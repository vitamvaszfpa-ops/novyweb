import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";

// Cookie consent categories
export interface CookieConsent {
  necessary: boolean; // Always true, required
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

// Consent metadata
export interface ConsentMetadata {
  timestamp: string;
  version: string;
  categories: CookieConsent;
}

// Current consent version - increment when policy changes
export const CONSENT_VERSION = "1.0.0";

// Storage key
const CONSENT_STORAGE_KEY = "zfp_cookie_consent";

interface CookieConsentContextType {
  consent: CookieConsent | null;
  hasConsented: boolean;
  showBanner: boolean;
  showSettings: boolean;
  setShowBanner: (show: boolean) => void;
  setShowSettings: (show: boolean) => void;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: Omit<CookieConsent, "necessary">) => void;
  resetConsent: () => void;
  isConsentGiven: (category: keyof CookieConsent) => boolean;
}

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export const useCookieConsent = () => {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error("useCookieConsent must be used within CookieConsentProvider");
  }
  return context;
};

// Default consent state - all optional categories disabled
const getDefaultConsent = (): CookieConsent => ({
  necessary: true,
  analytics: false,
  marketing: false,
  functional: false,
});

// Load consent from storage
const loadConsent = (): ConsentMetadata | null => {
  try {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;
    
    const parsed: ConsentMetadata = JSON.parse(stored);
    
    // Check if consent version matches current version
    if (parsed.version !== CONSENT_VERSION) {
      // Consent version changed, reset consent
      localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }
    
    return parsed;
  } catch {
    return null;
  }
};

// Save consent to storage
const saveConsent = (consent: CookieConsent): void => {
  const metadata: ConsentMetadata = {
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
    categories: consent,
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(metadata));
};

// Remove consent from storage
const removeConsent = (): void => {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
};

interface CookieConsentProviderProps {
  children: ReactNode;
}

export const CookieConsentProvider = ({ children }: CookieConsentProviderProps) => {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [hasConsented, setHasConsented] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Initialize consent state on mount
  useEffect(() => {
    const stored = loadConsent();
    if (stored) {
      setConsent(stored.categories);
      setHasConsented(true);
      setShowBanner(false);
    } else {
      setConsent(getDefaultConsent());
      setHasConsented(false);
      setShowBanner(true);
    }
  }, []);

  // Accept all cookies
  const acceptAll = useCallback(() => {
    const allAccepted: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setConsent(allAccepted);
    saveConsent(allAccepted);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  // Reject all optional cookies
  const rejectAll = useCallback(() => {
    const onlyNecessary: CookieConsent = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    };
    setConsent(onlyNecessary);
    saveConsent(onlyNecessary);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  // Save custom preferences
  const savePreferences = useCallback((preferences: Omit<CookieConsent, "necessary">) => {
    const newConsent: CookieConsent = {
      necessary: true,
      ...preferences,
    };
    setConsent(newConsent);
    saveConsent(newConsent);
    setHasConsented(true);
    setShowBanner(false);
    setShowSettings(false);
  }, []);

  // Reset consent (for testing or policy changes)
  const resetConsent = useCallback(() => {
    removeConsent();
    setConsent(getDefaultConsent());
    setHasConsented(false);
    setShowBanner(true);
  }, []);

  // Check if consent is given for a specific category
  const isConsentGiven = useCallback(
    (category: keyof CookieConsent): boolean => {
      if (!consent) return category === "necessary";
      return consent[category];
    },
    [consent]
  );

  return (
    <CookieConsentContext.Provider
      value={{
        consent,
        hasConsented,
        showBanner,
        showSettings,
        setShowBanner,
        setShowSettings,
        acceptAll,
        rejectAll,
        savePreferences,
        resetConsent,
        isConsentGiven,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
};

export default CookieConsentProvider;
