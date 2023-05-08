import {useState} from "react";
import Cookies from 'js-cookie';
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import Span from "../components/ui/Span";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import {useNavigate} from "react-router-dom";
import { toastFn } from "../utils/toast";

const Login = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	const [intentos, setIntentos] = useState(1);
	const [invalid, setInvalid] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
			

	const handleSubmit = () => {
		if (name === "" || password === "") {
			setError(true);
			toastFn({errorFields:true})
			return;
		}
		if (
			name !== import.meta.env.VITE_CREDENTIALS_USERNAME ||
			password !== import.meta.env.VITE_CREDENTIALS_PASSWORD
		) {
			setError(true);
			setIntentos(intentos + 1);
			if (intentos <= 2) {
			toastFn({errorUser:true})
			} else {
				intentos >= 3;
				setError(true);
				setInvalid(true);
				toastFn({errorMaxTry:true})
			}
		} else {
			setError(false);
			setInvalid(false);
			dispatch(login({ isAdmin: true, time: new Date().toLocaleString()}));
			Cookies.set('isAdmin', true, { expires: 7 });
			Cookies.set('LoginTime',new Date().toLocaleString(), { expires: 7 });
			toastFn({success:true})
			navigate('/dashboard');
		}
	};

	const handleClear = () => {
		setName("");
		setPassword("");
	};

	return (
				<section className="flex items-center justify-center h-screen text-slate-700 bg-gradient-to-t from-cyan-500 to-blue-500">
					<div className="flex flex-col gap-2 justify-center content-center border rounded-md w-full md:w-2/5 h-2/5  bg-white">
						<h1 className="place-self-center mb-10 font-bold text-xl text-sky-600">
							Login
						</h1>
						<div><Span label={"Nombre:"} /></div>
						{invalid ? (
							<Input text invalid value={name} />
						) : (
							<Input
								text
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						)}
						<div><Span label={"Contraseña:"} /></div>
						{invalid ? (
							<Input invalid value={password} />
						) : (
							<Input
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						)}
						<div className="flex justify-center gap-2 mt-4">
							{invalid ? (
								<>
									<Button label="Limpiar" invalid />
									<Button label="Ingresar" invalid />
								</>
							) : (
								<>
									<Button
										label="Limpiar"
										onSubmit={handleClear}
									/>
									<Button
										label="Ingresar"
										onSubmit={handleSubmit}
									/>
								</>
							)}
						</div>
					</div>
				</section>
	);
};

export default Login;