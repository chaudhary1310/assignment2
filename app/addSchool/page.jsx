"use client";

import React, { useState } from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconHome, IconSchool, IconBook } from "@tabler/icons-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

export default function AddSchool() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    contact: "",
    email_id: "",
    image: null,
  });
  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // Submit data to API
  const handleClick = async () => {
    try {
      const data = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) data.append(key, value);
      });

      const res = await fetch("/api/addSchool", {
        method: "POST",
        body: data,
      });

      const result = await res.json();
      console.log(result);
      setMessage(result.message || "✅ School added successfully!");
    } catch (error) {
      console.error("Error submitting:", error);
      setMessage("❌ Failed to add school.");
    }
  };

  const links = [
    { title: "Home", icon: <IconHome className="h-full w-full" />, href: "./" },
    { title: "Add School", icon: <IconSchool className="h-full w-full" />, href: "./addSchool" },
    { title: "Show Schools", icon: <IconBook className="h-full w-full" />, href: "./showSchools" },
  ];

  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-neutral-900 overflow-hidden">
      {/* Floating Dock */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <FloatingDock mobileClassName="translate-y-0" items={links} />
      </div>

      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl text-center mb-6 font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 via-white to-white z-10">
        Add School
      </h1>

      {/* Success/Error Message */}
      {message && <p className="mb-4 text-green-500 font-semibold z-10">{message}</p>}

      {/* Input Fields */}
      <div className="space-y-4 w-full max-w-md z-10">
        <input name="name" onChange={handleChange} placeholder="School Name" className="w-full text-white bg-transparent border p-2 rounded" />
        <input name="address" onChange={handleChange} placeholder="Address" className="w-full text-white bg-transparent border p-2 rounded" />
        <input name="city" onChange={handleChange} placeholder="City" className="w-full text-white bg-transparent border p-2 rounded" />
        <input name="state" onChange={handleChange} placeholder="State" className="w-full text-white bg-transparent border p-2 rounded" />
        <input name="contact" onChange={handleChange} placeholder="Contact Number" className="w-full text-white bg-transparent border p-2 rounded" />
        <input type="email" name="email_id" onChange={handleChange} placeholder="Email" className="w-full text-white bg-transparent border p-2 rounded" />
        <input type="file" name="image" onChange={handleChange} className="w-full text-white bg-transparent border p-2 rounded" />

        {/* Submit Button */}
        <button
          onClick={handleClick}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </div>

      {/* Background Effects */}
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
