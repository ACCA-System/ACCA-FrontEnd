import React, { useState } from "react";
import useACCA from "../hooks/useACCA";
import ModalConfirm from "./ModalConfirm";

export const UserComponent = () => {
    const [open, setOpen] = useState(false);
    const { userToEdit } = useACCA();

    const [values, setValues] = useState({
        userId: userToEdit.userId,
        name: userToEdit.name,
        email: userToEdit.email,
        password: userToEdit.password,
        typeId: userToEdit.typeId,
        confirmPassword: userToEdit.password,
    });
    const [errors, setErrors] = useState({});

    const auth = useACCA();

    const onClose = () => {
        setOpen(false);
        setErrors({});
    };

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!values.name) {
            newErrors.name = "Campo requerido";
        }

        if (!values.email) {
            newErrors.email = "Campo requerido";
        } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
            newErrors.email = "Formato de correo electrónico inválido";
        }

        if (!values.password) {
            newErrors.password = "Campo requerido";
        }

        if (values.password !== values.confirmPassword) {
            newErrors.confirmPassword = "Las contraseñas no coinciden";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleShowModal = (values) => {
        if (validateForm()) {
            setOpen(true);
            setValues(values);
        }
    };

    return (
        <div className="flex items-center justify-center  md:w-[97%] md:m-[1.5%] bg-gray-200 bg-opacity-80 shadow-md md:rounded-lg">
            <ModalConfirm open={open} setOpen={onClose} values={values} />
            <div className="bg-opacity-80 bg-white p-8 rounded-md w-full h-full">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleShowModal(values);
                    }}
                >
                    <div className="space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                                Gestión de Usuario
                            </h2>
                            <div className="mt-10 grid gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Nombre
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            value={values.name}
                                            onChange={handleChange}
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                                errors.name
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                </div>
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            value={values.email}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="TypeId"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Tipo de Usuario
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="TypeId"
                                            name="TypeId"
                                            onChange={handleChange}
                                            value={values.TypeId}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            {auth.user.typeId == 1 && (
                                                <option value="1">
                                                    Director
                                                </option>
                                            )}
                                            <option value="2">
                                                Administrador
                                            </option>
                                            <option value="3">
                                                Secretario(a)
                                            </option>
                                            <option value="4">
                                                Donaciones
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="col-span-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Contraseña
                                    </label>
                                    <div className="mt-2 flex gap-x-2">
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="password"
                                            value={values.password}
                                            onChange={handleChange}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <label
                                        htmlFor="confirm-password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Verificar Contraseña
                                    </label>
                                    <div className="mt-2 flex gap-x-2">
                                        <input
                                            type="password"
                                            name="confirmPassword"
                                            id="confirm-password"
                                            autoComplete="confirm-password"
                                            value={values.confirmPassword}
                                            onChange={handleChange}
                                            className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
                                                errors.confirmPassword
                                                    ? "border-red-500"
                                                    : ""
                                            }`}
                                        />
                                    </div>
                                    {errors.confirmPassword && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.confirmPassword}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button
                            type="button"
                            className="text-sm font-semibold leading-6 text-gray-900"
                        >
                            Cancelar
                        </button>
                        <button
                            type="submit"
                            className="w-[100px] h-[40px] bg-pink-600 rounded-[56px] text-center text-white text-[15px] font-normal "
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
