import { useState } from "react";
const FormInput = ({placeholder, onChange, name, type, required, pattern, value}) => {
	const [focused, setFocused] = useState(false);
	const label={
		"name":'Nombre:',
		"lastName":'Apellido:',
		"email":'Email:',
		"phone":'Telefono:',
		"dni":'Dni:',
		"birthDay":'Fecha de nacimiento:',
		"password":'Contraseña:',
	}
	const spanInfo={
		"name":'Este campo solo puede contener letras.',
		"lastName":'Este campo solo puede contener letras.',
		"email":'El formato del email es incorrecto.',
		"phone":'Este campo solo puede contener numeros.',
		"dni":'Este campo solo puede contener numeros.',
		"birthDay":'Debe ingresar una fecha valida.',
		"password":'Este campo requiere al menos 10 caracteres, que contengan al menos 1 en mayuscula, uno en minuscula y un numero.',
	}
	
	return (
		<>
		<div className="flex w-full items-center">
			<label className="w-1/4 text-right text-slate-700">{label[name]}</label>
			<div className="flex flex-col flex-grow relative">
			<input
				className="border rounded-md p-2 ml-2 mr-2  focus:outline-none text-slate-700 flex flex-grow"
				placeholder={placeholder}
				onChange={onChange}
				name={name}
				type={type}
				required={required}
				pattern={pattern}
				onBlur={() => setFocused(true)}
				focused={focused.toString()}
				value={value}
			/>
		<span id='error' className="text-[#bf1531] text-xs ml-3">{spanInfo[name]}</span>
		</div>
		<span className="text-[#bf1531] text-xs">*</span>
		</div>
</>
	);
};

export default FormInput;
