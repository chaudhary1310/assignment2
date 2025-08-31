"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "@/components/ui/lamp";
import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Home() {
  return (
    <LampContainer>
      {/* 🔥 Button fixed to top-left */}
      <div className="absolute  bottom-[30rem] right-200 ">
        <Link href="/addSchool">
          <Button 
             
            borderRadius="1.75rem"
            className="cursor-pointer dark:bg-slate-900 font-bold text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Add School
          </Button>
        </Link>
      </div>

      {/* 🔥 Button top-right (optional) */}
      <div className="absolute top-[20rem] left-200">
        <Link href="/showSchools">
          <Button
            borderRadius="1.75rem"
            className="font-bold dark:bg-slate-900 cursor-pointer text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            Show Schools
          </Button>
        </Link>
      </div>

      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-20 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        School <br /> Management
      </motion.h1>
    </LampContainer>
  );
}
