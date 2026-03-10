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
    <Navbar />
    <main className="flex-1 pt-[86px]">{children}</main>
    <RecommendedNext />
    <Footer />
    <ChatWidget />
    <ExitIntentPopup />
    <StickyCTABar />
  </div>
);

export default Layout;
