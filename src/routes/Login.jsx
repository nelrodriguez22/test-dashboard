import Button from "../components/Button";
import Input from "../components/Input";
const Login = () => {
	return ( 
		<div className="flex items-center justify-center h-screen text-slate-700 ">
			<div className="flex flex-col gap-2 justify-center content-center border rounded-md w-2/5 h-2/5 border-sky-500">
				<h1 className="place-self-center mb-10 font-bold text-xl text-sky-600">Login</h1>
				<span className="ml-3 font-medium">Nombre:</span>
				<Input text/>
				<span className="ml-3 font-medium">Contraseña:</span>
				<Input />
				<div className="flex justify-center gap-2 mt-4"><Button label="Cancelar" /> <Button label="Enviar" /></div>
			</div>
		</div>
	);
}

export default Login;