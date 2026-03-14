import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone } from "lucide-react";

interface NavItem {
  label: string;
  path?: string;
  children?: { label: string; path: string }[];
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Advisory",
    children: [
      { label: "Services", path: "/services" },
      { label: "Consulting", path: "/consulting" },
      { label: "Valuation Calculator", path: "/valuation-calculator" },
      { label: "Industries", path: "/industries" },
    ],
  },
  {
    label: "Transactions",
    children: [
      { label: "For Sellers", path: "/sellers" },
      { label: "For Buyers", path: "/buyers" },
      { label: "Opportunities", path: "/opportunities" },
    ],
  },
  { label: "Case Studies", path: "/case-studies" },
  {
    label: "Growth Roadmap",
    children: [
      { label: "Growth Roadmap", path: "/business-growth-roadmap" },
      { label: "Guides & Downloads", path: "/resources" },
    ],
  },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const isActive = (item: NavItem) => {
    if (item.path) return location.pathname === item.path;
    return item.children?.some((c) => location.pathname === c.path);
  };

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 h-1.5 bg-[hsl(220_30%_15%)]" />
      <nav className="fixed top-1.5 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="font-serif text-xl tracking-wider text-foreground">
          CBH<span className="text-primary"> Business Group</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-7">
          <a href="tel:+14079083845" className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors text-xs font-sans font-semibold tracking-widest uppercase">
            <Phone className="w-3.5 h-3.5" />
            (407) 908-3845
          </a>
          <div className="h-4 w-px bg-border" />
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1 text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-300 ${
                    isActive(item) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-200 ${
                      openDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2 min-w-[180px]">
                    <div className="bg-card border border-border shadow-lg py-2 animate-fade-in">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-5 py-2.5 text-xs font-sans font-semibold tracking-widest uppercase transition-colors ${
                            location.pathname === child.path
                              ? "text-primary bg-primary/5"
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`text-xs font-sans font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  isActive(item) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-1">
          <a href="tel:+14079083845" className="flex items-center gap-2 py-3 text-sm font-sans font-semibold tracking-widest uppercase text-primary">
            <Phone className="w-4 h-4" />
            (407) 908-3845
          </a>
          <div className="gold-divider mb-2" />
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                  className={`w-full flex items-center justify-between py-3 text-sm font-sans font-semibold tracking-widest uppercase ${
                    isActive(item) ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      mobileExpanded === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileExpanded === item.label && (
                  <div className="pl-4 pb-2 space-y-1 animate-fade-in">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-2 text-sm font-sans tracking-widest uppercase ${
                          location.pathname === child.path ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                onClick={() => setMobileOpen(false)}
                className={`block py-3 text-sm font-sans font-semibold tracking-widest uppercase ${
                  isActive(item) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
    </>
  );
};

export default Navbar;
