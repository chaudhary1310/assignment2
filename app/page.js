"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Home() {
  return (
    <LampContainer className="relative min-h-screen flex flex-col justify-center items-center">
      {/* 🔥 Centered Title */}
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="text-center text-4xl sm:text-6xl md:text-7xl font-medium 
                   bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-transparent mb-10"
      >
        School <br /> Management
      </motion.h1>

      {/* 🔥 Buttons together below the text */}
      <div className="flex gap-6">
        <Link href="/addSchool">
          <Button
            borderRadius="1.75rem"
            className="cursor-pointer dark:bg-slate-900 font-bold 
                       text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Add School
          </Button>
        </Link>

        <Link href="/showSchools">
          <Button
            borderRadius="1.75rem"
            className="cursor-pointer dark:bg-slate-900 font-bold 
                       text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Show Schools
          </Button>
        </Link>
      </div>
    </LampContainer>
  );
}
