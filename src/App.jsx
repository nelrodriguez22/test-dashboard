import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Cookies from 'js-cookie';
import { useSelector } from "react-redux";

const App = () => {
	const isAdminStore = useSelector((state) => state.user);
	const userDataCookies =  Cookies.get('isAdmin');
	
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route
					path="/dashboard"
					element={
						(userDataCookies || isAdminStore.isAdmin)  ? (
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
