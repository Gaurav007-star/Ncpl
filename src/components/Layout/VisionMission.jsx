import { motion } from "framer-motion";
import mission from "../../assets/construct05.jpg";

export default function VisionMission() {
  return (
    <section className="w-full py-15 px-[10vw]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Image with Animation */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src={mission}
            alt="Vision and Mission"
            className="rounded-2xl shadow-lg object-cover max-h-[400px] grayscale hover:grayscale-0 duration-500 cursor-pointer"
          />
        </motion.div>

        {/* Text Content with Animation */}
        <motion.div
          className="w-full h-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[50px] font-bold text-primary font-clash mb-4">
            Our Vision & Mission
          </h2>

          {/* Vision */}
          <div className="mb-6">
            <h3 className="text-[25px] font-semibold text-primary font-clash mb-2">
              Vision
            </h3>
            <p className="text-plein text-lg leading-relaxed text-secondary">
              To be a part of India's journey in becoming a global manufacturing
              hub.
            </p>
          </div>

          {/* Mission */}
          <div>
            <h3 className="text-[25px] font-semibold text-primary font-clash mb-2">
              Mission
            </h3>
            <p className="text-plein text-lg leading-relaxed text-secondary">
              To be the industry benchmark for quality, safety, and timely
              delivery of large-scale projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
