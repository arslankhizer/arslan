import { motion } from "framer-motion";
import { Film, Clapperboard, Tv } from "lucide-react";
import avatar from "@/assets/avatar.png";

const highlights = [
  { icon: Film, label: "YouTube Videos", desc: "Long-form & shorts" },
  { icon: Clapperboard, label: "Short Films", desc: "Narrative storytelling" },
  { icon: Tv, label: "Social Content", desc: "Reels, TikToks & ads" },
];

const AboutSection = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="section-container">
      <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
         <div className="aspect-square max-w-sm mx-auto rounded-2xl overflow-hidden border border-border accent-glow">
  <img
    src="/Arsl.jpg"
    alt="Arslan - Video Editor"
    className="w-full h-full object-cover"
  />
</div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">About Me</p>
          <h2 className="section-heading">Passionate About Visual Storytelling</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            With over 4+ years of experience in professional video editing, I specialize in turning raw footage into polished, engaging content. From cinematic color grading to seamless transitions, I bring a keen eye for detail and storytelling to every project.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Whether it's a high-energy YouTube video, an emotional short film, or scroll-stopping social media content — I craft each edit to captivate audiences and elevate your brand.
          </p>

          <div className="grid grid-cols-3 gap-4">
            {highlights.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="glass-card p-4 text-center hover-lift">
                <Icon className="mx-auto mb-2 text-primary" size={24} />
                <p className="text-sm font-medium text-foreground">{label}</p>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
