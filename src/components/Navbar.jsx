import {FaUserCircle} from "react-icons/fa";
import Span from "./ui/Span";
import {useState} from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';


const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const time = Cookies.get("LoginTime");

	const handleSession = () => {
		dispatch(login({ isAdmin: false, time: ''}));
		Cookies.set("isAdmin", false);
		navigate('/');
	}

	return (
		<nav className="flex justify-end text-slate-700 lg:m-2">
			<div className="flex gap-2">
				<Span label={`Hora de ingreso: ${time}`} />
				<div className="flex flex-col md:justify-end relative">
					<div className="flex gap-1 h-[3rem]" onMouseEnter={() => setIsOpen(true)}>
						<Span label={"Administrador"} bold/>
						<FaUserCircle size={"28px"} />
					</div>
					{isOpen && (
						<button
							className="z-10 absolute border bg-slate-200 rounded-md flex justify-center w-[8.5rem]"
							onMouseLeave={() => setIsOpen(false)} onClick={handleSession}
						>
							<Span label={"Cerrar sesion"} />
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
