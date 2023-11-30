import React from "react";
import { Button } from "@material-tailwind/react";
import EmailIcon from "../assets/svg/login/email.svg";
import LockIcon from "../assets/svg/login/lock.svg";
import Logo from "../assets/svg/logo/ACCAlogo.svg";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../services/AuthProvider";
import { BACKEND_URL } from "../env/env";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();
    return (
        <section className="bg-gray-10  flex items-center justify-center h-[80%] md:h-screen">
            <div className="flex items-center lg:h-[75%] lg:w-[85%] bg-gradient-to-b from-pink-500 to-yellow-200 bg-opacity-60 shadow-md md:flex-row">
                <div className="object-cover md:w-full hidden lg:block">
                    <div className="mb-18 text-center text-white text-4xl font-semibold font-Inter pt-12">
                        BIENVENIDO A:
                    </div>
                    {Logo && (
                        <img
                            src={Logo}
                            alt="Logo"
                            className="object-cover w-full h-full px-[20%]"
                        />
                    )}
                </div>
                <div className="flex flex-col md:flex-row lg:h-full leading-normal md:w-4/5">
                    <div className="relative bg-gray-200 lg:w-full bg-white px-8 py-[25%] text-center dark:bg-dark-2 md:px-28 lg:px-[60px]">
                        <div className="mb-10 text-center md:mb-16 text-gray-600 text-2xl md:text-3xl font-semibold font-Inter">
                            INICIAR SESIÓN
                        </div>
                        <form>
                            <InputBox
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputBox
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </form>
                        <Button
                            className="w-[163px] h-[50px] bg-pink-600 rounded-[56px] text-center text-white text-[15px] font-normal font-"
                        >
                            Ingresar
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignIn;

const InputBox = ({ type, placeholder, name }) => {
    const icons = {
        email: EmailIcon,
        password: LockIcon,
    };
    const Icon = icons[type];
    const iconStyles = {
        backgroundImage: `url(${Icon})`,
        backgroundSize: "1.5rem",
        backgroundPosition: "1.2rem center",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div className="relative mb-16">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                style={iconStyles}
                className="rounded-3xl border-none bg-gray-300 lg:w-80 xl:w-96 pl-14 py-3 pr-3 text-4 font-normal text-gray-600"
            />
        </div>
    );
};
