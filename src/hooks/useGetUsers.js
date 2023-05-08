import { useState,useEffect } from "react";
import { getFirstCreated, getLastCreated} from "../utils/utils";
import axios from "axios";


const useGetUsers = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [users, setUsers] = useState([]);
	const [firstCreated, setFirstCreated]= useState(0);
	const [lastCreated, setLastCreated]= useState(0);

	const fetchingData = async () => {
		const res = await axios.get("https://6452813bbce0b0a0f748ca0e.mockapi.io/api/v1/users",{
			headers: {
				'Content-Type': 'application/json'
			}			
		}).then(res => {
			setIsLoading(false);
			setUsers(res.data); 
			setFirstCreated(getFirstCreated(res.data).toLocaleString('en-US'))
			setLastCreated(getLastCreated(res.data).toLocaleString('en-US'))
			})
			.catch(err => console.log(err));
	};
	useEffect(() => {
		fetchingData();
	}, []);

	return {isLoading, users, firstCreated, lastCreated};
}

export default useGetUsers;