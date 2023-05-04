import Dashboard from "./routes/Dashboard";
import Login from "./routes/Login";
import {ToastContainer} from "react-toastify";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

const App = () => {
	const authenticated = false;
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						authenticated === true ? (
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
