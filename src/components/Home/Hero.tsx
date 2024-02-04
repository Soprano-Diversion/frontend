import { Icon } from '@iconify/react';

export default function Hero() {
	return (
		<div
			className="h-screen flex flex-col justify-between bg-gradient-to-br from-[#E0E1DD] via-[#E0E1DD] to-[#778DA9]">
			<div className="flex justify-between w-[90%] lg:w-[75%] mx-auto pt-2">
				<img width="150" height="auto" src="https://res.cloudinary.com/dme9vltjf/image/upload/v1707018528/soprano_log_fuhk3y.png" alt="" />
				<ul className="flex gap-8 text-2xl font-medium">
					<a href="" className="text-[#313638] hover:text-blue-700 grid place-items-center">
						<li>Home</li>
					</a>
					<a href="" className="text-[#313638] hover:text-blue-700 grid place-items-center">
						<li>About</li>
					</a>
					<a href="" className="text-[#313638] hover:text-blue-700 grid place-items-center">
						<li>Generate UI</li>
					</a>
					<a href="" className="text-[#313638] hover:text-blue-700 grid place-items-center">
						<li>Get Started</li>
					</a>
				</ul>
				<a href="" className="grid place-items-center">
					<Icon icon="radix-icons:github-logo" width="36" height="36" />
				</a>
			</div>
			<div className="text-center items-center w-[100%] flex flex-col justify-center gap-8 p-10 px-20">
				<div>
					<h1 className="text-[#313638] text-7xl font-bold">Welcome to</h1>
					<h1
						className="text-gradient-animation text-8xl font-bold bg-gradient-to-r from-[#25CC0F] to-[#9E3212] text-transparent bg-clip-text">SketchCraft</h1>
				</div>
				<div>
					<p className="text-2xl">
						Sketch effortlessly, code seamlessly.
					</p>
					<p className="text-2xl">
						Elevate
						your development process with our AI-powered
						Sketch2UI Tool.
					</p>
				</div>
				<button
					className="bg-transparent border-2 border-[#1B263B] flex flex-row justify-around w-[200px] p-4 rounded-xl transition-transform duration-300 hover:shadow-hover focus:shadow-hover focus:outline-none transform-hover">
					<p className="text-[#313638] text-xl font-bold">Get Started</p>
					<Icon icon="flowbite:arrow-right-outline" width="30" height="30" />
				</button>
			</div>
			<div className="text-center

			flex gap-[400px] w-fit mx-auto font-bold pb-6">
				<a href="mailto:team@soprano.co.in"><p className="text-[#313638] text-lg">Have any queries? Reach out to
					us!</p></a>
				<p className="text-[#313638] text-lg">Designed and Developed with 💖 by Team Soprano</p>
			</div>
		</div>
	);
}