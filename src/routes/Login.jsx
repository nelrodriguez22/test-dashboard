import {useState} from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Span from "../components/Span";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";
import {useNavigate} from "react-router-dom";
import { toastFn } from "../utils/Toast";
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
			dispatch(login({ isAdmin: true }));
			toastFn({success:true})
			navigate('/dashboard');
		}
	};

	const handleClear = () => {
		setName("");
		setPassword("");
	};

	return (
				<div className="flex items-center justify-center h-screen text-slate-700 ">
					<div className="flex flex-col gap-2 justify-center content-center border rounded-md w-2/5 h-2/5 border-sky-500">
						<h1 className="place-self-center mb-10 font-bold text-xl text-sky-600">
							Login
						</h1>
						<Span label={"Nombre:"} />
						{invalid ? (
							<Input text invalid value={name} />
						) : (
							<Input
								text
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						)}
						<Span label={"Contraseña:"} />
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
				</div>
	);
};

export default Login;