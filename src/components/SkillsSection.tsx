import { motion } from "framer-motion";

const skills = [
  { name: "Adobe Premiere Pro", level: 95 },
  { name: "After Effects", level: 88 },
  { name: "DaVinci Resolve", level: 82 },
  { name: "Final Cut Pro", level: 75 },
  { name: "Color Grading", level: 90 },
  { name: "Motion Graphics", level: 85 },
  { name: "Sound Design", level: 78 },
  { name: "Storytelling & Pacing", level: 92 },
];

const SkillsSection = () => (
  <section id="skills" className="py-24 md:py-32 bg-secondary/30">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Expertise</p>
        <h2 className="section-heading">Skills & Tools</h2>
        <p className="section-subheading max-w-xl mx-auto">
          Proficient across industry-standard software and creative techniques.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass-card p-5"
          >
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-foreground">{skill.name}</span>
              <span className="text-sm text-primary font-semibold">{skill.level}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 + i * 0.07, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SkillsSection;
