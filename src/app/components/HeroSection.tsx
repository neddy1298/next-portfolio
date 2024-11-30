import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
	return (
		<section className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative">
			<div className="container mx-auto">
				<div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
					{/* Text Content */}
					<div className="lg:w-1/2 space-y-8 text-center lg:text-left">
						<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 dark:from-white dark:to-white/60 py-4">
							Neddy Avgha Prasetio
						</h1>
						<p className="text-xl text-muted-foreground max-w-[600px]">
							Web Developer & IT Support
						</p>
						<div className="flex gap-4 justify-center lg:justify-start">
							<Button size="lg">
								<a href="#contact">Get in Touch</a>
							</Button>
							<Button variant="outline" size="lg">
								<a href="#portfolio">View Work</a>
							</Button>
						</div>
					</div>

					{/* Image */}
					<div className="lg:w-1/2 flex justify-center items-center">
						<div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96">
							<Image
								src="/placeholder.svg"
								alt="Neddy"
								fill
								className="rounded-full object-cover border-4 border-primary dark:border-white/20"
								priority
							/>
							<div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent dark:from-white/10" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
