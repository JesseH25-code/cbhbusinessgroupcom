import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";
import RecommendedNext from "./RecommendedNext";
import ExitIntentPopup from "./ExitIntentPopup";
import StickyCTABar from "./StickyCTABar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2">
      Skip to main content
    </a>
    <Navbar />
    <main id="main-content" className="flex-1 pt-[86px]">{children}</main>
    <RecommendedNext />
    <Footer />
    <ChatWidget />
    <ExitIntentPopup />
    <StickyCTABar />
  </div>
);

export default Layout;
