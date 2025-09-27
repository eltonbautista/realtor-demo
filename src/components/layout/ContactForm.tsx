"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("mrbanapz");

  if (state.succeeded) {
    return <p className="p-6 text-center text-lg text-blue-700 font-semibold">Thanks for joining!</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <form
        className="grid gap-y-6"
        onSubmit={handleSubmit}
        method="POST"
        >
        <h1 className="text-3xl sm:text-4xl md:text-5xl heading-font">
          Book a Demo Now
        </h1>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-base font-semibold text-[#3a4251] mb-1"
            htmlFor="first-name"
          >
            First Name*
          </label>
          <input
            className="h-10 rounded-md border border-[#e6eaf1] px-4 text-base bg-white text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="first-name"
            name="first-name"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-base font-semibold text-[#3a4251] mb-1"
            htmlFor="last-name"
          >
            Last Name*
          </label>
          <input
            className="h-10 rounded-md border border-[#e6eaf1] px-4 text-base bg-white text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="last-name"
            name="last-name"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-base font-semibold text-[#3a4251] mb-1"
            htmlFor="email"
          >
            Email Address*
          </label>
          <input
            className="h-10 rounded-md border border-[#e6eaf1] px-4 text-base bg-white text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-base font-semibold text-[#3a4251] mb-1"
            htmlFor="number"
          >
            Phone Number
          </label>
          <input
            className="h-10 rounded-md border border-[#e6eaf1] px-4 text-base bg-white text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-blue-200"
            id="number"
            name="number"
          />
        </div>
        <div className="flex flex-col gap-y-1.5">
          <label
            className="block text-base font-semibold text-[#3a4251] mb-1"
            htmlFor="message"
          >
            Inquiry Message
          </label>
          <textarea
            className="resize-y rounded-md border border-[#e6eaf1] px-4 py-2 text-base bg-white text-[#3a4251] placeholder-[#b0b8c9] focus:outline-none focus:ring-2 focus:ring-blue-200 min-h-[90px]"
            id="message"
            name="message"
          />
        </div>
        <div className="flex flex-row-reverse gap-x-6">
          <button
            className="cursor-pointer rounded-md bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-colors duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}