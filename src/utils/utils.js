import { toastFn } from "../utils/toast";
export const getFirstCreated = (res) => {
	const item = res.reduce((oldest, current) => {
		return current.createdAt < oldest.createdAt ? current : oldest;
	});
	const date = new Date(item.createdAt);
	const formattedDate = date.toLocaleDateString();
	const formattedTime = date.toLocaleTimeString();
	return `${formattedDate}, ${formattedTime}`;
};
export const getLastCreated = (res) => {
	const item = res.reduce((oldest, current) => {
		return current.createdAt > oldest.createdAt ? current : oldest;
	});
	const date = new Date(item.createdAt);
	const formattedDate = date.toLocaleDateString();
	const formattedTime = date.toLocaleTimeString();
	return `${formattedDate}, ${formattedTime}`;
};

export const formatDate = (date) => {
	const dateToMod = new Date(date);
	const formattedDate = dateToMod.toLocaleDateString();
	const formattedTime = dateToMod.toLocaleTimeString();
	return `${formattedDate}, ${formattedTime}`;
};

export const checkEmailRegistered = (email, data) => {
	const emailRegistered = data.filter((item) => item.email === email);
	return emailRegistered.length > 0 ? true : false;
};

export const convertToLocalTime = (isoString) => {
	const date = new Date(isoString);
	const localDateString = date.toLocaleDateString();
	const localTimeString = date.toLocaleTimeString();
	return `${localDateString} ${localTimeString}`;
};

export const sortData = (data, sortBy, order) => {
	const sortedData = data.sort((a, b) => {
		if (order === "asc") {
			return a[sortBy] > b[sortBy] ? 1 : -1;
		}
		if (order === "desc") {
			return a[sortBy] < b[sortBy] ? 1 : -1;
		}
	});
	return sortedData;
};

export const handleEmailRegistration = (email, users) => {
	const isEmailRegistered = checkEmailRegistered(email, users);
	if(isEmailRegistered){
	toastFn({emailRegistered:true})
	}
	return isEmailRegistered;
}

export const ageValidation=(birthDay)=> {
	const fechaActual = new Date();
	const fechaNac = new Date(birthDay);
	let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
	const mes = fechaActual.getMonth() - fechaNac.getMonth();
	if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
	edad--;
	}
	if (edad >= 18 && edad <= 70 && fechaNac <= fechaActual) {
	return true;
	} else {
	toastFn({betweenDates:true});
	return false;
	}
}