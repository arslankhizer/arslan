import { Youtube, Instagram, Facebook, Mail } from "lucide-react";

const socials = [
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "https://www.facebook.com/arslan.edits", label: "Facebook" },
];

const FooterSection = () => (
  <footer id="contact" className="py-16 border-t border-border">
    <div className="section-container text-center">
      <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Let's Work Together</h2>
      <p className="text-muted-foreground mb-6">Have a project in mind? I'd love to hear about it.</p>

      <a
        href="mailto:arslan.khizar45@gmail.com"
        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity accent-glow mb-10"
      >
        <Mail size={18} /> arslan.khizar45@gmail.com
      </a>

      <div className="flex items-center justify-center gap-5 mb-8">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
          >
            <Icon size={20} />
          </a>
        ))}
      </div>

      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} Arslan Editz. All rights reserved.
      </p>
    </div>
  </footer>
);

export default FooterSection;
