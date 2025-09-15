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
      <HomeFeatures />
      <HomeProblemSolving />
      <HomeInformation />
      <HomeCTA />
    </main>
  );
}
