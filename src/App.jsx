import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";


const App = () => {
	const isAdmin = sessionStorage.getItem("isAdmin");
	
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						isAdmin  ? (
							<Dashboard />
						) : (
							<Navigate to="/" />
						)
					}
				/>
			</Routes>
			<ToastContainer />
		</BrowserRouter>
	);
};

export default App;
