import {AiFillDelete, AiOutlineEdit} from "react-icons/ai";
import {FaSortDown, FaSortUp} from "react-icons/fa";
import {useEffect, useState} from "react";
import Span from "./ui/Span";
import Button from "./ui/Button";
import useGetUsers from "../hooks/useGetUsers";
import Modal from "./ui/Modal";
import {fetchingData} from "../services/fetchs";
import {sortData} from "../utils/utils";


const MainContent = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [title, setTitle] = useState("");
	const [currentPage, setCurrentPage] = useState(0);
	const [search, setSearch] = useState("");
	const {isLoading, users, firstCreated, lastCreated} = useGetUsers();
	const [deleteModal, setDeleteModal] = useState(false);
	const [editModal, setEditModal] = useState(false);
	const [userToDelete, setUserToDelete] = useState(null);
	const [idToEdit, setIdToEdit] = useState(null);
	const [sortDirection, setSortDirection] = useState('asc');
	const [sortColumn, setSortColumn] = useState('name');

	const handleSortClick = (column) => {
		if (sortColumn === column) {
		setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
		} else {
		setSortColumn(column);
		setSortDirection('asc');
		}
		return sortData(users, sortColumn, sortDirection);
	};
	
		

	const filteredUsers = () => {
		if (search.length === 0) {
			return users.slice(currentPage, currentPage + 10);
		} else {
			const filtered = users.filter(
				(user) =>
					user.apellido
						.toLowerCase()
						.includes(search.toLowerCase()) ||
					user.nombres.toLowerCase().includes(search.toLowerCase()) ||
					user.email.toLowerCase().includes(search.toLowerCase()) ||
					user.celular.toLowerCase().includes(search.toLowerCase())
			);
			return filtered.slice(currentPage, currentPage + 10);
		}
	};

	const onSearchChange = ({target}) => {
		setCurrentPage(0);
		setSearch(target.value);
	};
	const nextPage = () => {
		if (currentPage + 10 < users.length) {
			setCurrentPage(currentPage + 10);
		}
	};
	const prevPage = () => {
		if (currentPage > 0) {
			setCurrentPage(currentPage - 10);
		}
	};
	const handleOpenModal = (e) => {
		if (e === "Nuevo") {
			setTitle("Usuario nuevo");
			setEditModal(false);
			setIdToEdit(null);
			setUserToDelete(null);
		} else {
			setTitle("Editando usuario");
		}
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
		setDeleteModal(false);
		setEditModal(false);
		setIdToEdit(null);
		setUserToDelete(null);
	};

	const handleDeleteModal = (id, nombre, apellido) => {
		setIsOpen(true);
		setDeleteModal(true);
		setUserToDelete({id, nombre, apellido});
	};
	const handleEditModal = (id,e) => {
		handleOpenModal(e.target.innerText);
		setIsOpen(true);
		setDeleteModal(false);
		setEditModal(true);
		setIdToEdit(id);
	};

	useEffect(() => {
	fetchingData()
	}, []);
	

	return (
		<>
			<Modal
				isOpen={isOpen}
				handleCloseModal={handleCloseModal}
				title={title}
				users={users}
				deleteModal={deleteModal}
				userToDelete={userToDelete}
				editModal={editModal}
				idToEdit={idToEdit}
			/>
			<section className="flex  flex-col  text-slate-700 flex-grow lg:justify-between">
				<div className="self-start border border-sky-500 rounded-md m-2 p-2 flex flex-col md:w-2/5 lg:w-2/6">
					<Span label={"Informacion"} bold big />
					<Span label={`Cantidad de usuarios: ${users.length}`} />
					<Span
						label={`Fecha de creacion del primer usuario: ${firstCreated}`}
					/>
					<Span
						label={`Fecha de creacion del ultimo usuario: ${lastCreated}`}
					/>
				</div>
				<div className="self-center mt-2 mb-2 flex flex-col lg:flex-grow">
					<div className="flex items-center justify-between mb-1">
						<div className='md:w-2/5'>
							<Button
								label="Nuevo"
								withIcon
								onSubmit={(e) =>
									handleOpenModal(e.target.innerText)
								}
							/>
						</div>
						<div className="flex flex-grow justify-end">
							<input
								className="border rounded-md p-2 focus:border-sky-500 focus:outline-none text-slate-700 w-full md:w-3/5"
								type="text"
								value={search}
								onChange={onSearchChange}
								placeholder="Busqueda"
							/>
						</div>
					</div>
					{isLoading ? (
						<div>Cargando...</div>
					) : (
						<table className="table-auto border-sky-300 border-collapse">
							<thead className="uppercase text-sm">
								<tr className="border border-sky-300 ">
									<th className=" bg-sky-300 cursor-pointer" onClick={() => handleSortClick('apellido')}>Apellido{sortColumn === 'apellido' && (<span>{sortDirection === 'desc' ? <FaSortDown size={'15px'} className="inline"/> : <FaSortUp size={'15px'} className="inline"/>}</span>)}</th>
									<th className=" bg-sky-300 cursor-pointer" onClick={() => handleSortClick('nombres')}>Nombre{sortColumn === 'nombres' && (<span>{sortDirection === 'desc' ? <FaSortDown size={'15px'} className="inline"/> : <FaSortUp size={'15px'} className="inline"/> }</span>)}</th>
									<th className=" bg-sky-300 cursor-pointer" onClick={() => handleSortClick('email')}>Email{sortColumn === 'email' && (<span>{sortDirection === 'desc' ? <FaSortDown size={'15px'} className="inline"/> : <FaSortUp size={'15px'} className="inline"/> }</span>)}</th>
									<th className=" bg-sky-300 cursor-pointer" onClick={() => handleSortClick('celular')}>Celular{sortColumn === 'celular' && (<span>{sortDirection === 'desc' ? <FaSortDown size={'15px'} className="inline"/> : <FaSortUp size={'15px'} className="inline"/> }</span>)}</th>
									<th className=" bg-sky-300">Acciones</th>
								</tr>
							</thead>
							<tbody className="text-center">
								{filteredUsers().map((user) => (
									<tr key={user.id}>
										<td className="border border-sky-500">
											{user.apellido}
										</td>
										<td className="border border-sky-500">
											{user.nombres}
										</td>
										<td className="border border-sky-500">
											{user.email}
										</td>
										<td className="border border-sky-500">
											{user.celular}
										</td>
										<td className="border border-sky-500">
											<button
												className="p-1 m-1"
												onClick={(e)=>handleEditModal(user.id, e)}
											>
												<AiOutlineEdit size={"22px"} />
											</button>
											<button className="p-1 m-1">
												<AiFillDelete
													size={"22px"}
													color={"bf1531"}
													onClick={()=>handleDeleteModal(user.id, user.nombres, user.apellido)}
												/>
											</button>
										</td>
									</tr>
								))
								}
							</tbody>
						</table>
					)}
				</div>
				<div className="self-center flex gap-2 mb-5">
					<Button label="Anterior" onSubmit={prevPage} />
					<Button label="Siguiente" onSubmit={nextPage} />
				</div>
			</section>
		</>
	);
};

export default MainContent;
