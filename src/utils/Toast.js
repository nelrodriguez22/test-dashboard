import {toast} from "react-toastify";

export const toastFn = ({errorUser,errorFields,errorMaxTry,success}) => {
	if (errorFields){
		toast.error(`Complete todos los campos`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}else if(errorUser){
		toast.error(`Usuario o contraseña incorrecto`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}else if(errorMaxTry){
		toast.error(`Cantidad maxima de intentos de ingreso superada`, {
			position: "top-right",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}else if(success){
		toast.success(`Has ingresado como administrador`, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}
	}