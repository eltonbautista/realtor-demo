import HomeHero from '@/app/home/HomeHero'
import HomeFlex from '@/app/home/HomeFlex'
import HomeProblemSolving from '@/app/home/HomeProblemSolving'
import HomeFeatures from '@/app/home/HomeFeatures'
import HomeDemo from '@/app/home/HomeDemo'
import HomeTestimonials from '@/app/home/HomeTestimonials'
import HomeInformation from '@/app/home/HomeInformation'
import HomeCTA from '@/app/home/HomeCTA'

export default function Home() {
  return (
    <main className="relative">
      <HomeHero />
      {/* <HomeFlex /> */}
      <HomeTestimonials />
      <HomeDemo />
      {/* Sticky scroll effect for features/problem solving */}
      <div className="relative bg-[#020817]">
        <div className="sticky top-50 z-10">
          <HomeFeatures />
        </div>
        <div className="sticky top-0 z-20">
          <HomeProblemSolving />
        </div>
      </div>
      <HomeInformation />
      <HomeCTA />
    </main>
  );
}
