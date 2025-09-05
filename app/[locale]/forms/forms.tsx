"use client";

import { motion } from "framer-motion";

export default function Forms() {
  return (
    <section className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Forms Section
        </motion.h2>
      </div>
    </section>
  );
}
