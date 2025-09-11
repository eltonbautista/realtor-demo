"use client";

export default function HomeInformation() {
  return (
    <section className="w-full bg-[#020817] py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-12">
        {/* Left: Text */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              Elton
            </span>
          </h2>
          <p className="text-white text-xl mb-6">
            I&apos;m a website developer based in Edmonton. After years in web development, I saw realtors struggling with outdated sites that don&apos;t generate leads.
          </p>
          <p className="text-gray-300 text-lg mb-8">
            RealtorSitesPro was built to fix that. I combine modern web technology with AI automation to create websites that actually work for real estate professionals—not just look pretty.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              <span className="text-blue-100 text-base sm:text-lg">5+ years in web development</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              <span className="text-blue-100 text-base sm:text-lg">Specializing in AI integrations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-2 w-2 h-2 rounded-full bg-blue-400 inline-block" />
              <span className="text-blue-100 text-base sm:text-lg">Based in Edmonton, serving Canada</span>
            </li>
          </ul>
        </div>
        {/* Right: Card */}
        <div className="flex-1 w-full flex justify-center">
          <div className="bg-[#181d29] rounded-2xl shadow-xl px-12 py-16 w-full max-w-sm flex flex-col items-center text-center border border-[#232736]">
            <span className="text-5xl mb-6">👨‍💻</span>
            <div className="text-2xl font-semibold text-gray-100 mb-2">Elton</div>
            <div className="text-blue-200 text-lg">Website Developer</div>
          </div>
        </div>
      </div>
    </section>
  );
}