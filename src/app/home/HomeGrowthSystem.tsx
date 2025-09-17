import Image from "next/image";

export default function IntelligentGrowthSystem() {
	const steps = [
		{
			title: "Launch Your Smart Site",
			description: "We design a modern, mobile-friendly Realtor website customized to your brand, optimized for SEO, and connected to MLS listings.",
			highlight: "👉 Instantly showcase your properties with a sleek, professional first impression.",
			graphic: (
				<Image src="/images/home-ss.png" alt="Smart Site" width={320} height={200} className="rounded-xl shadow-lg object-cover w-full h-auto" />
			),
		},
		{
			title: "Capture Every Lead",
			description: "Built-in lead capture forms, AI chat widgets, and call-to-action popups ensure no visitor slips through the cracks.",
			highlight: "👉 Turn online browsers into real, trackable contacts.",
			graphic: (
				<Image src="/images/demoinfo.jpg" alt="Lead Capture" width={320} height={200} className="rounded-xl shadow-lg object-cover w-full h-auto" />
			),
		},
		{
			title: "Automate Follow-Up",
			description: "AI-powered email sequences, instant text responses, and smart nurturing keep prospects engaged 24/7 — even while you’re busy closing deals.",
			highlight: "👉 Your digital assistant warms up leads automatically.",
			graphic: (
				<Image src="/images/hero-img.jpg" alt="Automate Follow-Up" width={320} height={200} className="rounded-xl shadow-lg object-cover w-full h-auto" />
			),
		},
		{
			title: "Convert & Grow",
			description: "Track analytics, measure ROI, and get actionable insights on which listings and campaigns drive the most engagement.",
			highlight: "👉 Close more deals with less effort and scale your business faster.",
			graphic: (
				<Image src="/images/oliver.jpg" alt="Convert & Grow" width={320} height={200} className="rounded-xl shadow-lg object-cover w-full h-auto" />
			),
		},
	];

	return (
		<section className="py-20 px-6 bg-[#020817]">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-white uppercase tracking-tight heading-font">
					Intelligent <span className="bg-gradient-to-r from-blue-800 to-white bg-clip-text text-transparent">Growth SYSTEM</span>
				</h2>
				<div className="flex flex-col gap-12">
					{steps.map((step, idx) => (
						<div
							key={step.title}
							className={`flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-16 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
						>
							{/* Content */}
							<div className="flex-1 flex flex-col justify-center text-left">
								<h3 className="text-2xl md:text-3xl font-bold text-white mb-4 heading-font">
									<span className="text-blue-400">Step {idx + 1} – </span>{step.title}
								</h3>
								<p className="text-lg md:text-xl text-[#b0b8c9] mb-4 font-light">
									{step.description}
								</p>
								<p className="text-base md:text-lg text-white font-semibold">
									{step.highlight}
								</p>
							</div>
							{/* Graphic */}
							<div className="flex-1 flex items-center justify-center">
								{step.graphic}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
