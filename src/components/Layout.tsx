import { ReactNode } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./Header";
import Footer from "./Footer";
import CookieConsentUI from "./cookies/CookieConsentUI";
import { CookieConsentProvider } from "@/contexts/CookieConsentContext";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <HelmetProvider>
      <CookieConsentProvider>
        <div className="min-h-screen flex flex-col relative">
          {/* Header */}
          <Header />
          
          {/* Main content - unified background */}
          <main className="flex-1 relative z-10">{children}</main>
          
          {/* Footer */}
          <Footer />
          
          {/* Cookie consent */}
          <CookieConsentUI />
        </div>
      </CookieConsentProvider>
    </HelmetProvider>
  );
};

export default Layout;
