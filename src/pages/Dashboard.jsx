import MainContent from "../components/MainContent";
import Navbar from "../components/Navbar";

const Dashboard = () => {
	return ( 
		<main className="flex flex-col min-h-screen">
			<Navbar />
			<MainContent />
		</main>
	);
}

export default Dashboard;