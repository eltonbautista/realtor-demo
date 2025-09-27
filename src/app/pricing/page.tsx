import ContactForm from '@/components/layout/ContactForm'
import FormButton from '@/components/layout/FormButton'
import HomeCTA from '@/app/home/HomeCTA'

export default function PricingPage() {
	return (
		<section className="w-full bg-[#020817] pt-20">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-left mb-16 text-white heading-font">
					<span className="bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent">
						Pricing
					</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-start mb-24">
					{/* Starter Website */}
					<div className="bg-[#181d29] px-10 py-12 flex flex-col items-start text-left shadow-xl border border-[#232736] min-h-[600px]">
						<h3
							className="flex items-center gap-3 mb-4 text-3xl font-extrabold text-white heading-font text-left"
							id="starter-heading"
						>
							Growth Starter
						</h3>
						<h4 className="text-lg font-bold text-white mb-4">$1279</h4>
						<div className="text-[#b0b8c9] mb-8 text-md text-left">
							What you need for a professional online presence.
						</div>
						<ul
							className="mb-8 space-y-3 text-md text-left w-full max-w-sm"
							aria-labelledby="starter-heading"
						>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									5 Custom Pages (Home, Listings, About, Contact, Lead Capture)
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									IDX/MLS Integration (single feed)
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									Mobile-friendly, SEO-optimized
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">12 months hosting included</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-red-400 text-xl" aria-label="Not included">
									✖
								</span>
								<span className="text-[#b0b8c9]">No CRM</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-red-400 text-xl" aria-label="Not included">
									✖
								</span>
								<span className="text-[#b0b8c9]">No automations</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-red-400 text-xl" aria-label="Not included">
									✖
								</span>
								<span className="text-[#b0b8c9]">No ongoing support</span>
							</li>
						</ul>
					</div>
					{/* Growth Website */}
					<div className="bg-[#181d29] px-10 py-14 flex flex-col items-start text-left shadow-2xl border-2 border-white min-h-[650px] md:scale-[1.07] z-10 relative">
						<span className="ml-2 px-3 py-1 rounded-full bg-blue-800 text-white text-xs font-bold absolute top-4 right-4">
							Most Popular
						</span>
						<div className="flex flex-col items-start">
							<h3
								className="flex items-center gap-3 mb-4 text-3xl font-extrabold text-white heading-font text-left"
								id="growth-heading"
							>
								Growth Core
							</h3>
							<h4 className="text-lg font-bold text-white mb-4">$779 + $279/mo</h4>
							<div className="text-[#b0b8c9] mb-8 text-md text-left">
								For agents who want more leads & less busywork
							</div>
						</div>
						<ul
							className="mb-8 space-y-3 text-md text-left w-full max-w-sm"
							aria-labelledby="growth-heading"
						>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">Everything in Starter</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">CRM with pipeline tracking</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									Automated email + SMS follow-up
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									AI-powered chat & lead forms
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									Ongoing support & content updates
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-blue-400 text-xl" aria-label="Included">
									✔
								</span>
								<span className="text-white">
									Done-for-you hosting & updates
								</span>
							</li>
						</ul>
						<ul className="mb-4 space-y-3 text-md text-left w-full max-w-sm">
							<li className="flex items-center gap-3">
								<span className="text-green-400 text-xl">✅</span>
								<span className="text-white">
									Be more than just another agent with a website.
								</span>
							</li>
							<li className="flex items-center gap-3">
								<span className="text-green-400 text-xl">✅</span>
								<span className="text-white">
									Get a full growth system that runs while you sell.
								</span>
							</li>
						</ul>
					</div>
					{/* Add-Ons & Premium Features */}
					<div className="bg-[#181d29] px-10 py-12 flex flex-col items-start text-left shadow-xl border border-[#232736] min-h-[600px]">
						<h3
							className="flex items-center gap-3 mb-4 text-3xl font-extrabold text-white heading-font text-left"
							id="addons-heading"
						>
							Growth Extras
						</h3>
						<ul
							className="mb-8 space-y-3 text-md text-left w-full max-w-sm"
							aria-labelledby="addons-heading"
						>
							<li>
								<span className="text-white">Standard Page </span>
								{/* <span className="text-blue-400 font-semibold">$125</span> each */}
							</li>
							<li>
								<span className="text-white">Specialty Page </span>
								{/* <span className="text-blue-400 font-semibold">$175</span> each */}
							</li>
							<li>
								<span className="text-white">Bundle of 5 Pages </span>
								{/* <span className="text-blue-400 font-semibold">$500</span>{" "} */}
								{/* <span className="text-green-400">(save $125)</span> */}
							</li>
						</ul>
						<h4
							className="flex items-center gap-3 mb-4 mt-4 text-xl font-bold text-white heading-font text-left"
							id="premium-heading"
						>
							<span className="ml-2 px-2 py-1 rounded-full bg-blue-800 text-white text-xs font-bold">
								Upgrades
							</span>
						</h4>
						<ul
							className="mb-8 space-y-3 text-md text-left w-full max-w-sm"
							aria-labelledby="premium-heading"
						>
							<li>
								<span className="text-white">Blog Setup + First 3 Posts: </span>
								<span className="text-blue-400 font-semibold">$250</span>
							</li>
							<li>
								<span className="text-white">Landing Page for Ads: </span>
								<span className="text-blue-400 font-semibold">$200</span> each
							</li>
							<li>
								<span className="text-white">Custom Lead Magnet: </span>
								<span className="text-blue-400 font-semibold">$300</span>
							</li>
							<li>
								<span className="text-white">
									Team/Office Agent Roster + Profiles:{" "}
								</span>
								<span className="text-blue-400 font-semibold">$300</span> (up to
								25 agents)
							</li>
						</ul>
						<h4
							className="flex items-center gap-3 mb-4 mt-4 text-xl font-bold text-white heading-font text-left"
							id="support-heading"
						>
							Ongoing Support
							<span className="ml-2 px-2 py-1 rounded-full bg-blue-800 text-white text-xs font-bold">
								Included in $249/mo
							</span>
						</h4>
						<ul
							className="mb-4 space-y-3 text-md text-left w-full max-w-sm"
							aria-labelledby="support-heading"
						>
							<li>
								<span className="text-white">
									Website hosting + IDX feed updates
								</span>
							</li>
							<li>
								<span className="text-white">
									CRM + automated nurture campaigns
								</span>
							</li>
							<li>
								<span className="text-white">
									Tech support + content swaps (up to 1 hour/month)
								</span>
							</li>
							<li>
								<span className="text-white">Additional support hours: </span>
								<span className="text-blue-400 font-semibold">$75/hr</span>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<HomeCTA />
		</section>
	);
}
