"use client";

import { useEffect, useState } from "react";
import { CometCard } from "@/components/ui/comet-card";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconBook, IconHome, IconSchool } from "@tabler/icons-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function ShowSchools() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/getSchools");
        const data = await res.json();
        setSchools(data);
      } catch (err) {
        console.error("Failed to fetch schools:", err);
      }
    };
    fetchSchools();
  }, []);

  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./",
    },
    {
      title: "Add School",
      icon: <IconSchool className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./addSchool",
    },
    {
      title: "Show Schools",
      icon: <IconBook className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "./showSchools",
    },
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* ✅ Background */}
      <div className="absolute inset-0 z-0">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* ✅ Floating Dock */}
     <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
  <FloatingDock mobileClassName="translate-y-0" items={links} />
</div>

      {/* ✅ School Cards */}
      <div className="relative  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-20 p-10">
        {schools.map((school) => {
          return (
            <CometCard
              key={school._id}
              className="flex flex-col items-stretch rounded-[16px] border-0 bg-[#313636] p-3"
            >
              <div className="mx-2 flex-1">
                <div className="relative mt-2 h-100 w-full"> {/* 🔥 changed height */}
                  <img
                    loading="lazy"
                    className="absolute inset-0 h-full w-full rounded-[20px] bg-[#000000] object-cover "
                    alt={school.name}
                    src={school.image}
                    style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px" }} />
                </div>
              </div>
              <div className="mt-2 gap-6 flex flex-shrink-0 items-center justify-between p-2 font-mono text-white">
                <div className="text-xs">{school.name}</div>
                <div className="text-xs text-gray-300 opacity-50">
                  {school.address}, {school.city}
                </div>
              </div>
            </CometCard>
          );
        })}
      </div>
    </div>
  );
}
