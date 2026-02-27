import { useState } from "react";
import { motion } from "framer-motion";

// ================= FILTERS =================

const filters = [
  { label: "All", value: "all" },
  { label: "Short Form", value: "shortform" },
  { label: "Long Form", value: "longform" },
  { label: "Before / After", value: "beforeafter" },
  { label: "Podcast", value: "podcast" },
  { label: "Real Estate", value: "realestate" },
];

// ================= PROJECTS (ONLY YOUTUBE LINKS) =================

const projects = [
  {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/k9dGudaWFhw",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/OSA5Wa1m9xs",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/gGgZndnWtBY",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/aDjSSxXklFc?",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/oWBdmTD3Ui0",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/pcYJQ4I39pQ",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/FmzXfGl6_pw",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/HO4RO9JWfro",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/iDb2WU95EAY",
  },
    {
    category: "shortform",
    embedUrl: "https://www.youtube.com/embed/tAmXSGUlD84",
  },
    {
    category: "longform",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_5",
  },
  {
    category: "podcast",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    category: "realestate",
    embedUrl: "https://www.youtube.com/embed/C_D845-4L00",
  },
  {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/2CcD-Hehpd8",
  }, 
   {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/GzyHyiVmEoU",
  },
    {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/kNqWKmP7RIU",
  },
    {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/ZvNUFj1icjk",
  },
    {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/k5IgoQVEss4",
  },
    {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/WfBWNCSRYkE",
  },
    {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/igTA8rWOHXE",
  },
    {
    category: "beforeafter",
    embedUrl: "https://www.youtube.com/embed/Bzh-7k253QM",
  },
  
];

// ================= COMPONENT =================

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 md:py-32">
      <div className="section-container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">
            Work
          </p>
          <h2 className="section-heading">Video Portfolio</h2>
          <p className="section-subheading max-w-xl mx-auto">
            Real YouTube videos. No fake thumbnails. No extra text.
          </p>
        </motion.div>

        {/* FILTER BUTTONS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition
                ${
                  activeFilter === filter.value
                    ? "bg-primary text-white"
                    : "bg-muted text-muted-foreground hover:bg-primary/20"
                }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* VIDEO GRID */}
        <div className="grid sm:grid-cols-2 gap-6">
          {filteredProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass-card overflow-hidden hover-lift"
            >
              <div className="relative aspect-video">
                <iframe
                  src={project.embedUrl}
                  title="YouTube video player"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;