import {toast} from "react-toastify";

export const toastFn = ({errorUser,errorFields,errorMaxTry,success, emailRegistered, userCreatedSuccesfully,userDeletedSuccesfully, userUpdatedSuccesfully,invalidDate,betweenDates}) => {
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
	if (emailRegistered){
		toast.error(`Este email ya se encuentra registrado`, {
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
	if (userCreatedSuccesfully){
		toast.success(`Usuario creado exitosamente`, {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}
	if (userDeletedSuccesfully){
		toast.success(`Usuario borrado exitosamente`, {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}
	if (userUpdatedSuccesfully){
		toast.success(`Usuario actualizado exitosamente`, {
			position: "top-right",
			autoClose: 1000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: false,
			progress: undefined,
			theme: "colored",
		});
	}
	if (invalidDate){
		toast.error(`La fecha de nacimiento no puede ser superior a la fecha actual`, {
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
	if (betweenDates){
		toast.error(`La edad debe ser como mínimo de 18 años y como máximo de 70 años`, {
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