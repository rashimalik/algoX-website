import { Hero } from "./components/Hero";
import { TeamMember } from "./components/TeamMember";
// import { HackathonCarousel } from "./components/HackathonCarousel";
import { Background } from "./components/Background";
import { MouseTrail } from "./components/MouseTrail";
import { teamMembers } from "./data/team";

function App() {
	return (
		<div className="relative min-h-screen">
			<Background />
			<MouseTrail />
			<div className="container mx-auto px-4 py-16 relative z-10 pointer-events-auto">
				<Hero />
				{/* <HackathonCarousel /> */}

				<p className="text-4xl md:text-4xl text-center font-bold bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent mb-3 animate-gradient  h-20">
					Members of the Community
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{teamMembers.map((member) => (
						<TeamMember
							key={member.name}
							{...member}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
