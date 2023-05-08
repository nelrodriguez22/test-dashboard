import {useEffect, useState} from "react";
import {
	AiFillCloseCircle
} from "react-icons/ai";
import FormInput from "./FormInput";
import {handleEmailRegistration, ageValidation} from "../../utils/utils";
import { toastFn } from "../../utils/toast";
import { deleteUserData, postUserData,putUserData } from "../../services/fetchs";
import Span from "./Span";


function Modal({isOpen, handleCloseModal, title, users, deleteModal, userToDelete, idToEdit, editModal}) {
	const [isValid, setIsValid] = useState({
		lastName: false,
		name: false,
		email: false,
		phone: false,
		dni: false,
		birthDay: false,
		password: false,
	});
	const [values, setValues] = useState({
		lastName: "",
		name: "",
		email: "",
		phone: "",
		dni: "",
		birthDay: "",
		password: "",
	});
	useEffect(() => {
		if(idToEdit){
			const userToEdit = users.find((user) => user.id === idToEdit);
			setValues({
				lastName: userToEdit.apellido,
				name: userToEdit.nombres,
				email: userToEdit.email,
				phone: userToEdit.celular,
				dni: userToEdit.dni,
				birthDay: userToEdit.fechanac,
				password: userToEdit.clave,
			});
		}else{
			setValues({
				lastName: "",
				name: "",
				email: "",
				phone: "",
				dni: "",
				birthDay: "",
				password: "",
			});
		}
	}, [idToEdit, users]);


	const handleSubmit = (e) => {
		e.preventDefault();
		const {lastName, name, email, phone, dni, birthDay, password} = values;
		const isValidInfo = Object.values(values).every((value) => value.length > 0);
		if(isValidInfo && !handleEmailRegistration(email, users) && ageValidation(birthDay)){
			postUserData({apellido:lastName, nombres:name, email, celular:phone, dni, fechanac:birthDay, clave:password});
				toastFn({userCreatedSuccesfully:true});
			handleCloseModal();
			setInterval(() => {
				window.location.reload();
			}, 1000);
		}
	};

	const handleDelete = () => {
		deleteUserData(userToDelete.id);
		toastFn({userDeletedSuccesfully:true});
		handleCloseModal();
		setInterval(() => {
			window.location.reload();
		}, 1000);
	}

	const handleChange = ({target}) => {
		setValues({
			...values,
			[target.name]: target.value,
		});
	};
	const handleEdit = (e) => {
		e.preventDefault();
		const {lastName, name, email, phone, dni, birthDay, password} = values;
		const isValidInfo = Object.values(values).every((value) => value.length > 0);
		if(isValidInfo && ageValidation(birthDay)){
			putUserData(idToEdit,{apellido:lastName, nombres:name, email, celular:phone, dni, fechanac:birthDay, clave:password});
			toastFn({userUpdatedSuccesfully:true});
			handleCloseModal();
			setInterval(() => {
				window.location.reload();
			}, 1000);
		}
	}

	return (
		<>
			{isOpen && !deleteModal && (
				<section className="flex flex-col justify-center items-center h-full w-full z-100 absolute bg-gray-700/50 text-slate-700">
					<div className="bg-white w-3/5 rounded-xl">
						<div className="flex flex-col">
							<div className="flex justify-end m-4">
								<button onClick={handleCloseModal}>
									<AiFillCloseCircle
										size={"28px"}
										color={"0EA5E9"}
									/>
								</button>
							</div>
							<div className="flex flex-col justify-center items-center">
								<h1 className="font-semibold mb-5 text-lg">
									{title}
								</h1>
								<form
									className="flex flex-col justify-around items-center gap-2 w-4/5"
									onSubmit={editModal ? handleEdit : handleSubmit}
								>
									<div className="flex w-full items-center">
										<FormInput
											placeholder="Ingrese su apellido"
											value={values.lastName}
											onChange={handleChange}
											name="lastName"
											required
											pattern={`^[a-zA-Z]+$`}
										/>
									</div>
									<div className="flex w-full  items-center">
										<FormInput
											placeholder="Ingrese su nombre"
											value={values.name}
											onChange={handleChange}
											required
											name="name"
											pattern={`^[a-zA-Z]+$`}											
										/>
									</div>
									<div className="flex w-full  items-center">
										<FormInput
											placeholder="Ingrese su email"
											value={values.email}
											onChange={handleChange}
											name="email"
											required
											pattern={`^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$`}
										/>
									</div>
									<div className="flex w-full  items-center">
										<FormInput
											placeholder="Ingrese su telefono"
											value={values.phone}
											onChange={handleChange}
											name="phone"
											required
											pattern={`^[0-9]+$`}
										/>								
									</div>
									<div className="flex w-full  items-center">
										<FormInput
											placeholder="Ingrese su DNI"
											value={values.dni}
											onChange={handleChange}
											name="dni"
											required
											pattern={`^[0-9]+$`}
										/>									
									</div>
									<div className="flex w-full  items-center">
										<FormInput
											placeholder="Ingrese su fecha de nacimiento"
											value={values.birthDay}
											onChange={handleChange}
											name="birthDay"
											type='date'
											required
										/>								
									</div>
									<div className="flex w-full  items-center">
										<FormInput
											placeholder="Ingrese su contraseña"
											value={values.password}
											onChange={handleChange}
											name="password"
											required
											pattern={`^(?=.{10,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$`}
										/>
									</div>
									<div className="flex justify-center items-center mb-5 gap-2">
										<button
											onClick={handleCloseModal}
											className={`flex gap-1 justify-center items-center bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white`}
										>
											{" "}
											Cancelar{" "}
										</button>
										<button
											className={`flex gap-1 justify-center items-center bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white `}
										>
											{" "}
											Confirmar{" "}
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
			)}
			{isOpen && deleteModal && !editModal && 
				<section className="flex flex-col justify-center items-center h-full w-full z-100 absolute bg-gray-700/50 text-slate-700">
					<div className="bg-white w-2/5 rounded-xl">
						<div className="flex flex-col">
							<div className="flex justify-end m-4">
								<button onClick={handleCloseModal}>
									<AiFillCloseCircle
										size={"28px"}
										color={"0EA5E9"}
									/>
								</button>
							</div>
							<div className="flex justify-center p-2 m-2">
								<Span label={`Confirma Eliminación del usuario ${userToDelete.apellido}, ${userToDelete.nombre}?`} />
							</div>
							<div className="flex justify-center items-center mb-5 gap-2">
								<button
									onClick={handleCloseModal}
									className={`flex gap-1 justify-center items-center bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white`}
								>
									{" "}
									No{" "}
								</button>
								<button
								onClick={handleDelete}
									className={`flex gap-1 justify-center items-center bg-sky-600 hover:bg-sky-500 rounded-md p-2 text-white `}
								>
									{" "}
									Si{" "}
								</button>
								</div>
						</div>
					</div>
					</section>	
			}
		
		</>
	);
}

export default Modal;
