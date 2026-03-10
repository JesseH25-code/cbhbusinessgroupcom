import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-[86px]">{children}</main>
    <Footer />
    <ChatWidget />
  </div>
);

export default Layout;
