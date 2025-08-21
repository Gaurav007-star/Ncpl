import React from "react";
import { motion } from "framer-motion";

// Services Data (all with images now)
const services = [
  {
    title: "Industrial Civil Construction",
    description:
      "Designing and building infrastructure such as roads, bridges, buildings, and water systems with durability and precision.",
    image:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Turnkey Project Execution",
    description:
      "End-to-end solutions, from design to delivery, ensuring seamless, timely, and high-quality results.",
    image:
      "https://images.pexels.com/photos/1325725/pexels-photo-1325725.jpeg?_gl=1*m2hnqo*_ga*MjM4MzU3MjQyLjE3NTQ1NjU2Mzk.*_ga_8JE65Q40S6*czE3NTU3NzYxNTckbzYkZzEkdDE3NTU3NzYxOTQkajIzJGwwJGgw"
  },
  {
    title: "Road Infrastructure",
    description:
      "Delivering robust road infrastructure from planning to construction for safe, sustainable, and efficient networks.",
    image:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Site Development & Infrastructure",
    description:
      "Preparing land with utilities, drainage, and access to ensure efficient and safe construction readiness.",
    image:
      "https://images.pexels.com/photos/6474312/pexels-photo-6474312.jpeg?_gl=1*nbpdo0*_ga*MjM4MzU3MjQyLjE3NTQ1NjU2Mzk.*_ga_8JE65Q40S6*czE3NTU3NzYxNTckbzYkZzEkdDE3NTU3NzYzNTEkajM4JGwwJGgw"
  },
  {
    title: "Pre-Engineered Buildings (PEB)",
    description:
      "Fast, durable, and cost-effective steel structures ideal for warehouses, factories, and more.",
    image:
      "https://images.unsplash.com/photo-1603239564387-c5b5ea6f635e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "External Development & Finishing",
    description:
      "Crafting landscapes, facades, and green spaces that enhance both functionality and aesthetics.",
    image:
      "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?w=600&auto=format&fit=crop&q=60"
  },
  {
    title: "Renovation & Expansion Projects",
    description:
      "Transforming existing structures with smart renovations and strategic expansions for better utility and longevity.",
    image:
      "https://images.unsplash.com/photo-1603239564387-c5b5ea6f635e?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Project Management & Consulting",
    description:
      "Managing projects from planning to onsite coordination with cost control and seamless execution.",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=800&auto=format&fit=crop"
  }
];

// Variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Service() {
  return (
    <section className="px-[10vw] py-20 bg-white ">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="uppercase text-sm font-semibold tracking-wider text-primary font-clash">
          Our Services
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-snug text-primary font-clash">
          What We Offer
        </h2>
        <p className="text-gray-600 text-lg font-plein">
          From large-scale infrastructure to precision construction, we deliver
          excellence across every aspect of civil and industrial projects.
        </p>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-3 gap-8 mt-16"
      >
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="overflow-hidden rounded-2xl shadow-md ring-1 ring-gray-200 bg-white flex flex-col w-[400px] h-[500px] cursor-pointer"
          >
            <div className="relative w-full h-full overflow-hidden">
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />

              {/* Overlay always visible */}
              <div className="absolute inset-0 bg-black/40 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-[22px] font-bold mb-1 font-clash">
                    {service.title}
                  </h3>
                  <p className="text-[18px] text-gray-200 font-plein">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
