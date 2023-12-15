import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import ACCAIcon from "../assets/svg/logo/ACCAlogo.svg";
import { Link } from "react-router-dom";
import useACCA from "../hooks/useACCA";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Header = () => {
    const { getUserData, user } = useACCA();
    const { auth, cerrarSesionAuth } = useAuth();

    useEffect(() => {
        getUserData(auth.userId);
    }, [auth]);

    const handleLogout = () => {
        cerrarSesionAuth();
        localStorage.removeItem("token");
    };

    return (
        <Disclosure
            as="nav"
            className="bg-white md:h-24 flex justify-center items-center absolute inset-x-0 top-0 w-full"
        >
            {({ open }) => (
                <>
                    <div className="px-2 w-full">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex items-center justify-center">
                                <div className="flex items-center">
                                    <img
                                        className="h-20 md:h-28 w-auto md:ml-20 mt-3"
                                        src={ACCAIcon}
                                        alt="ACCA"
                                    />
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 md:mr-20">
                                <Menu as="div" className="relative ">
                                    <div>
                                        <Menu.Button className="flex rounded-full bg-none text-sm focus:outline-none focus:ring-2  focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100">
                                            <svg
                                                className="h-10 md:h-12 md:w-12 rounded-full"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 24 24"
                                                fill="black"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-6 w-48 origin-top-right rounded-md bg-[#D9D9D9] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div className="px-4 py-3 text-sm font-semibold text-gray-600">
                                                        <div>{user.name}</div>
                                                        <div className="font-semibold truncate">
                                                            {user.email}
                                                        </div>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                            {(auth.typeId === 1 ||
                                                auth.typeId === 2) && (
                                                <Menu.Item>
                                                    {({ active }) => (
                                                        <Link
                                                            replace={true}
                                                            to="/welcome/users"
                                                            className={classNames(
                                                                active
                                                                    ? "bg-[#B4B4B4]"
                                                                    : "",
                                                                "block px-4 py-2 text-sm font-semibold text-gray-600"
                                                            )}
                                                        >
                                                            Usuarios
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            )}

                                            {/* <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-[#B4B4B4]' : '', 'block px-4 py-2 text-sm font-semibold text-gray-600')}
                          >
                            Registro de solicitante
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-[#B4B4B4]' : '', 'block px-4 py-2 text-sm font-semibold text-gray-600')}
                          >
                            Donaciones
                          </a>
                        )}
                      </Menu.Item> */}
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(
                                                            active
                                                                ? "bg-[#B4B4B4]"
                                                                : "",
                                                            "block px-4 py-2 text-sm font-semibold text-gray-600"
                                                        )}
                                                        onClick={handleLogout}
                                                    >
                                                        Cerrar sesión
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default Header;
