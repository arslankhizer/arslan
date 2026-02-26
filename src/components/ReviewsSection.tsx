import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const reviews = [
  {
    name: "Sarah Mitchell",
    role: "YouTube Creator · USA",
    text: "Arslan completely transformed my channel. His cinematic editing style boosted my watch time and retention significantly. One of the best editors I’ve worked with.",
    stars: 5,
  },
  {
    name: "James Rodriguez",
    role: "Brand Manager · USA",
    text: "Arslan Edits delivered a polished brand video that exceeded expectations. Fast delivery, great communication, and top-tier quality.",
    stars: 5,
  },
  {
    name: "Oliver Brown",
    role: "Podcast Host · UK",
    text: "Clean cuts, perfect pacing, and excellent sound balance. Arslan understands podcast editing better than most professionals out there.",
    stars: 5,
  },
  {
    name: "Emma Wilson",
    role: "Lifestyle YouTuber · UK",
    text: "Working with Arslan was effortless. He turned raw footage into engaging, high-retention videos that my audience loved.",
    stars: 5,
  },
  {
    name: "Daniel Fischer",
    role: "Real Estate Agent · Germany",
    text: "Arslan’s real estate videos look premium and cinematic. My property listings now stand out across all platforms.",
    stars: 5,
  },
  {
    name: "Lucas Martin",
    role: "Short-Form Content Creator · France",
    text: "Amazing YouTube Shorts edits. Arslan knows exactly how to hook viewers in the first 3 seconds.",
    stars: 5,
  },
  {
    name: "Sophia Bennett",
    role: "Marketing Consultant · UK",
    text: "Professional, creative, and reliable. Arslan Edits helped us scale our video marketing with consistent quality.",
    stars: 5,
  },
  {
    name: "Michael Turner",
    role: "Tech YouTuber · USA",
    text: "Arslan’s editing improved my content flow and storytelling. My average view duration increased noticeably.",
    stars: 5,
  },
  {
    name: "Isabella Rossi",
    role: "Content Creator · Italy",
    text: "Color grading, transitions, and pacing were flawless. Arslan has a true eye for detail.",
    stars: 5,
  },
  {
    name: "Ethan Walker",
    role: "Agency Owner · USA",
    text: "We outsourced multiple projects to Arslan Edits and every single delivery was on time and high quality.",
    stars: 5,
  },
  {
    name: "Noah Anderson",
    role: "Business Coach · USA",
    text: "Arslan edited my long-form YouTube videos perfectly. Clean, professional, and optimized for retention.",
    stars: 5,
  },
  {
    name: "Charlotte Green",
    role: "Social Media Manager · UK",
    text: "Short-form edits by Arslan perform extremely well on Instagram Reels and YouTube Shorts.",
    stars: 5,
  },
  {
    name: "Thomas Müller",
    role: "Startup Founder · Germany",
    text: "Arslan Edits created a brand video that clearly communicated our vision. Highly recommended for startups.",
    stars: 5,
  },
  {
    name: "Ryan Cooper",
    role: "Fitness YouTuber · USA",
    text: "High-energy edits, perfect cuts, and smooth transitions. Arslan knows YouTube algorithms well.",
    stars: 5,
  },
  {
    name: "Amelia Scott",
    role: "Content Strategist · UK",
    text: "Arslan consistently delivers premium edits that align perfectly with our brand guidelines.",
    stars: 5,
  },
  {
    name: "Julien Moreau",
    role: "Video Producer · France",
    text: "Professional editor with strong storytelling skills. Arslan elevated our entire video production.",
    stars: 5,
  },
  {
    name: "Kevin Brooks",
    role: "E-commerce Brand Owner · USA",
    text: "Our product videos now look high-end thanks to Arslan Edits. Conversions improved after launch.",
    stars: 5,
  },
  {
    name: "Hannah Lewis",
    role: "Vlogger · UK",
    text: "Arslan understands emotion and pacing perfectly. My vlogs feel more cinematic and engaging.",
    stars: 5,
  },
  {
    name: "Marco Silva",
    role: "Digital Marketer · Spain",
    text: "Fast turnaround, excellent communication, and great creative input. Arslan is a reliable editor.",
    stars: 5,
  },
  {
    name: "David Thompson",
    role: "YouTube Automation Channel · USA",
    text: "We scaled our channel with Arslan’s editing support. Consistent quality and great storytelling.",
    stars: 5,
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((c) => (c + 1) % reviews.length);
  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 md:py-32 bg-secondary/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-3">Testimonials</p>
          <h2 className="section-heading">Client Reviews</h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-card p-8 md:p-10 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[current].stars }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground text-lg md:text-xl leading-relaxed italic mb-8">
                "{reviews[current].text}"
              </p>
              <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-display font-bold text-lg flex items-center justify-center mx-auto mb-3">
                {reviews[current].name[0]}
              </div>
              <p className="font-display font-semibold text-foreground">{reviews[current].name}</p>
              <p className="text-sm text-muted-foreground">{reviews[current].role}</p>
            </motion.div>
          </AnimatePresence>

        <div className="relative max-w-2xl mx-auto mt-8">
  {/* Dots */}
  <div className="flex justify-center gap-2">
    {reviews.map((_, i) => (
      <button
        key={i}
        onClick={() => setCurrent(i)}
        className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-muted-foreground/30"}`}
      />
    ))}
  </div>

  {/* Arrows */}
  <button
    onClick={prev}
    className="absolute top-1/2 -left-4 transform -translate-y-1/2 p-2 rounded-full border border-border hover:bg-secondary transition-colors md:-left-6"
  >
    <ChevronLeft size={20} className="text-muted-foreground" />
  </button>
  <button
    onClick={next}
    className="absolute top-1/2 -right-4 transform -translate-y-1/2 p-2 rounded-full border border-border hover:bg-secondary transition-colors md:-right-6"
  >
    <ChevronRight size={20} className="text-muted-foreground" />
  </button>
</div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
