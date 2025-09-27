"use client";

export default function HomeInformation() {
  return (
    <section className="w-full bg-[#F2F0EF] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-12">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl mx-auto heading-font">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800 mb-8 text-center">
            Who We&nbsp;
            <span className="bg-gradient-to-r from-blue-800 to-[#020817] bg-clip-text text-transparent">
              Are
            </span>
          </h2>
          <p className="text-[#020817] text-xl mb-6 text-center">
            At RealtorSitesPro, we help Canadian real estate professionals grow with high-performing websites. Too many realtor sites look nice but fail to generate leads — we fix that.
          </p>
          <p className="text-[#020817] text-lg mb-8 text-center">
            With proven expertise in modern web technology and AI automation, our mission is simple: build realtor websites that don&apos;t just look good,
            but <span className="italic">actively</span> bring in clients.
          </p>
          <ul className="space-y-3 text-center inline-block">
            <li className="flex items-start gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-800 inline-block" />
              <span className="text-blue-800 text-base sm:text-lg heading-font">5+ years in real estate web development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-800 inline-block" />
              <span className="text-blue-800 text-base sm:text-lg heading-font">AI-powered lead generation systems</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-800 inline-block" />
              <span className="text-blue-800 text-base sm:text-lg heading-font">Serving Canada&apos;s real estate professionals</span>
            </li>
          </ul>
        </div>
        {/* Right: Card */}
        {/* <div className="flex-1 w-full flex justify-center">
          <div className="bg-[#181d29] rounded-2xl shadow-xl px-12 py-16 w-full max-w-sm flex flex-col items-center text-center border border-[#232736]">
            <span className="text-5xl mb-6">👨‍💻</span>
            <div className="text-2xl font-semibold text-gray-100 mb-2">Elton</div>
            <div className="text-blue-200 text-lg">Website Developer</div>
          </div>
        </div> */}
      </div>
    </section>
  );
}