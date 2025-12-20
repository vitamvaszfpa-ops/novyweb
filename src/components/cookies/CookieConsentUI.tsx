import CookieBanner from "./CookieBanner";
import CookieSettings from "./CookieSettings";
import { CookieScriptManager } from "@/hooks/useCookieScripts";

export const CookieConsentUI = () => {
  return (
    <>
      <CookieBanner />
      <CookieSettings />
      <CookieScriptManager />
    </>
  );
};

export default CookieConsentUI;
