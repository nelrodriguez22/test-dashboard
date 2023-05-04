import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
	const userData = useSelector((state) => state.user);
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						userData.isAdmin === true ? (
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
