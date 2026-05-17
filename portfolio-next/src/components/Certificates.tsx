"use client";

import { certificates } from "@/data/portfolio";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "./GlassCard";
import { SectionHeading } from "./SectionHeading";

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Certificates() {
  return (
    <div className="w-full">
      <SectionHeading title="My" highlight="Certificates" compact />
      <motion.div className="grid auto-rows-fr grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title + index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15, margin: "-40px" }}
            className="h-full"
          >
            <GlassCard as="article" className="group flex h-full flex-col overflow-hidden">
              <div className="relative h-[clamp(10rem,28vh,18rem)] overflow-hidden bg-secondary sm:h-[clamp(11rem,30vh,18rem)]">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 45vw, 20vw"
                />
                <div className="absolute inset-0 hidden items-center justify-center bg-black/40 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 md:flex md:opacity-0">
                  <Link
                    href={cert.viewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${cert.title}`}
                    className="inline-flex translate-y-2 scale-95 items-center gap-2 rounded-full border border-accent/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-white opacity-0 shadow-accent backdrop-blur-md transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100"
                  >
                    <svg
                      className="h-4 w-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Visit
                  </Link>
                </div>
              </div>
              <div className="border-t border-border/40 px-3 py-2.5 md:hidden">
                <Link
                  href={cert.viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white"
                >
                  View Certificate
                </Link>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
