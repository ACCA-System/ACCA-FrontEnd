import React from "react";
import {
    ArrowLeftIcon,
    ArrowRightIcon,
    PlusIcon,
} from "@heroicons/react/24/outline";

const UsersTable = () => {

    const users = [
        {
          name: 'Elena Márquez',
          email: 'elena@example.com',
          position: 'Desarrollador Frontend',
          image: 'https://randomuser.me/api/portraits/women/1.jpg',
        },
        {
          name: 'Martín Sánchez',
          email: 'martin@example.com',
          position: 'Diseñador UX',
          image: 'https://randomuser.me/api/portraits/men/2.jpg',
        },
        {
          name: 'Lucía Gutiérrez',
          email: 'lucia@example.com',
          position: 'Ingeniero de Software',
          image: 'https://randomuser.me/api/portraits/women/3.jpg',
        },
        {
          name: 'Javier Torres',
          email: 'javier@example.com',
          position: 'Analista de Datos',
          image: 'https://randomuser.me/api/portraits/men/4.jpg',
        },
        {
          name: 'Sofía López',
          email: 'sofia@example.com',
          position: 'Especialista en Marketing Digital',
          image: 'https://randomuser.me/api/portraits/women/5.jpg',
        },
        {
          name: 'Alejandro Rodríguez',
          email: 'alejandro@example.com',
          position: 'Ingeniero de Redes',
          image: 'https://randomuser.me/api/portraits/men/6.jpg',
        },
        {
          name: 'Valentina García',
          email: 'valentina@example.com',
          position: 'Desarrollador Full Stack',
          image: 'https://randomuser.me/api/portraits/women/7.jpg',
        },
      ];
      

    return (
        <div className="flex items-center justify-center h-screen md:w-[90%] md:h-4/5 md:m-[5%] bg-gray-200 bg-opacity-80 shadow-md md:rounded-lg">
            <div className="bg-opacity-80 bg-white p-8 rounded-md w-full h-full">
                <div className=" flex flex-col md:flex-row items-center justify-between pb-6">
                    <div>
                        <h2 className="text-gray-600 font-semibold">
                            Personal
                        </h2>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center p-2 rounded-md">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                            <input
                                className="outline-none ml-1 block border-none bg-gray-200 rounded-3xl text-gray-500 "
                                type="text"
                                name=""
                                id=""
                                placeholder="Buscar..."
                            />
                        </div>
                        <div className="lg:ml-40 ml-10 space-x-8">
                            <button className="hover:bg-[#84cc16] bg-[#9EBF43] p-2 rounded-md text-white font-semibold tracking-wide cursor-pointer">
                                <svg
                                    className="w-6 h-6 inline-block"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <PlusIcon />
                                </svg>
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
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((users) => (
                                                                            <tr>
                                                                            <td className="px-5 py-5 bg-white text-sm">
                                                                                <div className="flex items-center">
                                                                                    <div className="flex-shrink-0 w-10 h-10">
                                                                                        <img
                                                                                            className="w-full h-full rounded-full"
                                                                                            src={users.image}
                                                                                            alt=""
                                                                                        />
                                                                                    </div>
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
                                                                                <span className="relative inline-block px-3 py-1 font-semibold text-yellow-900 leading-tight">
                                                                                    <span
                                                                                        aria-hidden
                                                                                        className="absolute inset-0 bg-yellow-200 opacity-50 rounded-full"
                                                                                    ></span>
                                                                                    <span className="relative">
                                                                                        {users.position}
                                                                                    </span>
                                                                                </span>
                                                                            </td>
                                                                        </tr>
                                    ))}
                                    </tbody>
                            </table>
                            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
                                <span className="text-xs xs:text-sm text-gray-900">
                                    1 a 4 de 50 Empleados
                                </span>
                                <div className="inline-flex mt-2 xs:mt-0">
                                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-[#84cc16] bg-[#9EBF43] font-semibold py-2 px-4 rounded-l">
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
                                    <button className="text-sm text-indigo-50 transition duration-150 hover:bg-[#84cc16] bg-[#9EBF43] font-semibold py-2 px-4 rounded-r">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UsersTable;