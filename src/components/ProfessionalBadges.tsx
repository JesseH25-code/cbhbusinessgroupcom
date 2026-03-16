import { motion } from "framer-motion";
import { Award, ShieldCheck, BadgeCheck } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const affiliations = [
  {
    icon: Award,
    name: "IBBA",
    full: "International Business Brokers Association",
    desc: "Member of the premier global association for business brokers and M&A professionals.",
  },
  {
    icon: ShieldCheck,
    name: "M&A Source",
    full: "M&A Source — The Mid-Market Alliance",
    desc: "Active member of the leading network for mid-market M&A intermediaries and deal professionals.",
  },
  {
    icon: BadgeCheck,
    name: "CBI",
    full: "Certified Business Intermediary",
    desc: "Holder of the CBI designation — the gold standard credential for business transaction professionals.",
  },
];

interface ProfessionalBadgesProps {
  compact?: boolean;
}

const ProfessionalBadges = ({ compact = false }: ProfessionalBadgesProps) => {
  if (compact) {
    return (
      <div className="flex flex-wrap items-center justify-center gap-6">
        {affiliations.map((a) => (
          <div key={a.name} className="flex items-center gap-2 text-muted-foreground">
            <a.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
            <span className="text-xs tracking-widest uppercase font-semibold">{a.name}</span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <section className="py-16 border-y border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeUp}
          className="text-center mb-10"
        >
          <p className="text-xs tracking-widest uppercase text-primary mb-3">Credentials & Affiliations</p>
          <h2 className="text-2xl md:text-3xl font-serif text-foreground">
            Trusted Professional Designations
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
        >
          {affiliations.map((a) => (
            <motion.div
              key={a.name}
              variants={fadeUp}
              className="text-center bg-card border border-border p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <a.icon className="w-10 h-10 text-primary mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="font-serif text-lg text-foreground mb-1">{a.name}</h3>
              <p className="text-xs tracking-wide uppercase text-muted-foreground mb-3">{a.full}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProfessionalBadges;
