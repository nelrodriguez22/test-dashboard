import axios from "axios";

const url= 'https://6452813bbce0b0a0f748ca0e.mockapi.io/api/v1/users';
const config = {
	headers: {
		'Content-Type': 'application/json'
	}	
};
export const fetchingData = async () => {
	const res = await axios.get(url, config).then(res => {
			return res.data;
		})
		.catch(err => console.log(err));
	return res;
}

export const fetchingDataById = async (id) => {
	const res = await axios.get(`${url}/${id}`,config).then(res => {
			return res.data;
		})
		.catch(err => console.log(err));
	return res;
}


export const postUserData = async (data) => {
	const res = await axios.post(`${url}`, data,config).then(res => {
			return res.data;
		})
		.catch(err => console.log(err));
	return res;
}

export const putUserData = async (id, data) => {
	const res = await axios.put(`${url}/${id}`, data, config).then(res => {
			return res.data;
		})
		.catch(err => console.log(err));
	return res;
}

export const deleteUserData = async (id) => {
	const res = await axios.delete(`${url}/${id}`, config).then(res => {
			return res.data;
		})
		.catch(err => console.log(err));
	return res;
}


//import.meta.env.VITE_API_URL