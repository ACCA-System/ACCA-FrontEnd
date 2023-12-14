import React from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import useACCA from "../hooks/useACCA";
import ModalDelete from "./ModalDelete";
import { useNavigate } from "react-router-dom";

const UsersTable = () => {
    const { users, getUser } = useACCA();
    const { cleanUserToEdit } = useACCA({});
    const navigate = useNavigate();

    const usersPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
    const [deleteBtn, setDeleteBtn] = useState(false);
    const [editBtn, setEditBtn] = useState(false);
    const [open, setOpen] = useState(false);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const onClose = () => setOpen(false);


    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;

    const roleDictionary = {
        1: "Director",
        2: "Administrador",
        3: "Secretaria(o)",
        4: "Donaciones",
    };

    let filteredUsers = users;
    if (searchTerm) {
        filteredUsers = users.filter(
            (user) =>
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                roleDictionary[user.typeId]
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
        );
    }

    const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    const nextPage = () => {
        setCurrentPage((prevPage) =>
            prevPage === totalPages ? prevPage : prevPage + 1
        );
    };

    const prevPage = () => {
        setCurrentPage((prevPage) =>
            prevPage === 1 ? prevPage : prevPage - 1
        );
    };

    const handleShowModal = (userId) => {
        setSelectedUserId(userId);
        setOpen(true);
    };

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1);
    };

    const handleDelete = () => {
        setDeleteBtn(!deleteBtn);
        setEditBtn(false);
    };

    const handleEdit = () => {
        setEditBtn(!editBtn);
        setDeleteBtn(false);
    };

    const handleEditUsers = (value) => {
        getUser(value);
    };

    const handleNewUser = () => {
        cleanUserToEdit();
        navigate("/welcome/usersForm");
    };

    const maxPagesToShow = 5;
    const delta = Math.floor(maxPagesToShow / 2);
    const leftBound = Math.max(1, currentPage - delta);
    const rightBound = Math.min(totalPages, leftBound + maxPagesToShow - 1);

    const pageNumbers = [];
    for (let i = leftBound; i <= rightBound; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex items-center justify-center  md:w-[97%] md:m-[1.5%] bg-gray-200 bg-opacity-80 shadow-md md:rounded-lg">
            <ModalDelete
                open={open}
                setOpen={onClose}
                userId={selectedUserId}
            />
            {users.length === 0 ? (
                <div className="items-center text-2xl h-screen">
                    {" "}
                    No se encontraron usuarios{" "}
                </div>
            ) : (
                <div className="bg-opacity-80 bg-white p-8 rounded-md w-full h-full">
                    <div className=" flex flex-col md:flex-row items-center justify-between pb-6">
                        <div>
                            <h2 className="text-gray-600 font-semibold">
                                Personal
                            </h2>
                        </div>
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="flex items-center p-2 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 text-gray-400"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <input
                                    className="outline-none ml-1 block border-none bg-gray-200 rounded-3xl text-gray-500 "
                                    type="text"
                                    value={searchTerm}
                                    onChange={handleSearch}
                                    placeholder="Buscar..."
                                />
                            </div>
                            <div className="flex lg:ml-40 md:ml-10 space-x-8">
                                <button
                                    onClick={handleEdit}
                                    className="group relative overflow-hidden hover:bg-[#ffd966] bg-[#9EBF43] p-2 rounded-md text-white font-semibold tracking-wide cursor-pointer transition-all duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 inline-block z-10 relative"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <PencilIcon />
                                    </svg>
                                    <span className="absolute z-0 w-6 h-6 bg-[#ffd966] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 origin-center transition-all duration-300 group-hover:scale-100"></span>
                                </button>

                                <button
                                    onClick={handleDelete}
                                    className="group relative overflow-hidden hover:bg-[#f44336] bg-[#9EBF43] p-2 rounded-md text-white font-semibold tracking-wide cursor-pointer transition-all duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 inline-block z-10 relative"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <TrashIcon />
                                    </svg>
                                    <span className="absolute z-0 w-6 h-6 bg-[#f44336] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 origin-center transition-all duration-300 group-hover:scale-100"></span>
                                </button>

                                <button
                                    onClick={handleNewUser}
                                    className="group relative overflow-hidden hover:bg-[#84cc16] bg-[#9EBF43] p-2 rounded-md text-white font-semibold tracking-wide cursor-pointer transition-all duration-300"
                                >
                                    <svg
                                        className="w-6 h-6 inline-block z-10 relative"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <PlusIcon />
                                    </svg>
                                    <span className="absolute z-0 w-6 h-6 bg-[#84cc16] rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-0 origin-center transition-all duration-300 group-hover:scale-100"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Nombre
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Puesto
                                            </th>
                                            {deleteBtn ? (
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Eliminar
                                                </th>
                                            ) : null}
                                            {editBtn ? (
                                                <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                    Editar
                                                </th>
                                            ) : null}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentUsers.map((users, index) => (
                                            <tr key={index}>
                                                <td className="px-5 py-5 bg-white text-sm">
                                                    <div className="flex items-center">
                                                        <div className="ml-3">
                                                            <p className="text-gray-900 whitespace-no-wrap">
                                                                {users.name}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-5 py-5 bg-white text-sm">
                                                    <p className="text-gray-900 whitespace-no-wrap">
                                                        {users.email}
                                                    </p>
                                                </td>
                                                <td className="px-5 py-5 bg-white text-sm">
                                                    {users.typeId === 1 ? (
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-blue-900 leading-tight">
                                                            <span
                                                                aria-hidden
                                                                className="absolute inset-0 bg-blue-200 opacity-50 rounded-full"
                                                            ></span>
                                                            <span className="relative">
                                                                Director
                                                            </span>
                                                        </span>
                                                    ) : users.typeId === 4 ? (
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                                            <span
                                                                aria-hidden
                                                                className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                                            ></span>
                                                            <span className="relative">
                                                                Donaciones
                                                            </span>
                                                        </span>
                                                    ) : users.typeId === 2 ? (
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                                                            <span
                                                                aria-hidden
                                                                className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                                                            ></span>
                                                            <span className="relative">
                                                                Administrador
                                                            </span>
                                                        </span>
                                                    ) : users.typeId === 3 ? (
                                                        <span className="relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight">
                                                            <span
                                                                aria-hidden
                                                                className="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                                                            ></span>
                                                            <span className="relative">
                                                                Secretaria(o){" "}
                                                            </span>
                                                        </span>
                                                    ) : null}
                                                    {}
                                                </td>
                                                {deleteBtn ? (
                                                    <td className="px-5 py-5 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <button
                                                                value={
                                                                    users.userId
                                                                }
                                                                onClick={() =>
                                                                    handleShowModal(
                                                                        users.userId
                                                                    )
                                                                }
                                                                className="group relative cursor-pointer rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 py-1 px-3 text-base"
                                                            >
                                                                <svg
                                                                    className="w-6 h-6 inline-block z-10 relative text-red-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <TrashIcon />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                ) : null}
                                                {editBtn ? (
                                                    <td className="px-5 py-5 bg-white text-sm">
                                                        <div className="flex items-center">
                                                            <button
                                                                value={
                                                                    users.userId
                                                                }
                                                                onClick={() =>
                                                                    handleEditUsers(
                                                                        users.userId
                                                                    )
                                                                }
                                                                className="group relative cursor-pointer rounded-lg transition duration-300 ease-in-out hover:bg-gray-200 py-1 px-3 text-base"
                                                            >
                                                                <svg
                                                                    className="w-6 h-6 inline-block z-10 relative text-yellow-500"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <PencilIcon />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                ) : null}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {users.length > 9 && (
                                    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                        <div className="py-4 bg-white flex items-center justify-center space-x-2">
                                            {currentPage > delta + 1 && (
                                                <button
                                                    className="bg-white text-gray-700 font-semibold py-2 px-4 border rounded-full transition duration-300 hover:bg-gray-200"
                                                    onClick={() =>
                                                        setCurrentPage(1)
                                                    }
                                                >
                                                    1
                                                </button>
                                            )}
                                            {currentPage > delta + 2 && (
                                                <span className="text-gray-600">
                                                    ...
                                                </span>
                                            )}
                                            {pageNumbers.map((number) => (
                                                <button
                                                    key={number}
                                                    className={`text-gray-700 font-semibold py-2 px-4 border rounded-full transition duration-300  ${
                                                        currentPage === number
                                                            ? "text-white bg-[#9EBF45] "
                                                            : "hover:bg-gray-200"
                                                    }`}
                                                    onClick={() =>
                                                        setCurrentPage(number)
                                                    }
                                                >
                                                    {number}
                                                </button>
                                            ))}
                                            {currentPage <
                                                totalPages - delta && (
                                                <span className="text-green-600">
                                                    ...
                                                </span>
                                            )}

                                            {currentPage <
                                                totalPages - delta && (
                                                <button
                                                    className="bg-white text-gray-700 font-semibold py-2 px-4 border rounded-full transition duration-300 hover:bg-gray-200"
                                                    onClick={() =>
                                                        setCurrentPage(
                                                            totalPages
                                                        )
                                                    }
                                                >
                                                    {totalPages}
                                                </button>
                                            )}
                                        </div>
                                        <span className="text-xs xs:text-sm text-gray-900">
                                            {`Mostrando ${
                                                indexOfFirstUser + 1
                                            } a ${indexOfLastUser} de ${
                                                users.length
                                            } Empleados`}
                                        </span>
                                        <div className=" inline-flex mt-2 xs:mt-0">
                                            <button
                                                onClick={prevPage}
                                                disabled={currentPage === 1}
                                                className="text-sm text-indigo-50 transition duration-150 hover:bg-[#84cc16] bg-[#9EBF43] font-semibold py-2 px-4 rounded-l "
                                            >
                                                <svg
                                                    className="w-6 h-6 inline-block"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <ArrowLeftIcon />
                                                </svg>
                                            </button>
                                            &nbsp; &nbsp;
                                            <button
                                                onClick={nextPage}
                                                disabled={
                                                    currentPage === totalPages
                                                }
                                                className="text-sm text-indigo-50 transition duration-150 hover:bg-[#84cc16] bg-[#9EBF43] font-semibold py-2 px-4 rounded-r cursor-pointer"
                                            >
                                                <svg
                                                    className="w-6 h-6 inline-block"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <ArrowRightIcon />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsersTable;
