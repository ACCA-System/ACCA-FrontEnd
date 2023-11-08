import React from "react";
import { Button } from "@material-tailwind/react";
import EmailIcon from "../assets/svg/login/email.svg";
import LockIcon from "../assets/svg/login/lock.svg";
import Logo from "../assets/svg/logo/ACCAlogo.svg";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { BACKEND_URL } from "../env/env";

const SignIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await fetch(`${BACKEND_URL}Login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });
        } catch (error) {
            console.log(error);
        }
    }

    if (auth.isAuth) {
        return <Navigate to="/welcome" />;
    }

    return (
        <section className="bg-gray-10 flex items-center justify-center h-screen">
            <div className="flex items-center bg-gradient-to-b from-pink-500 to-yellow-200 bg-opacity-60 shadow-md md:flex-row md:max-w-5xl">
                <div className="object-cover w-full hidden lg:block">
                    <div className="mb-18 text-center text-white text-4xl font-semibold font-Inter pt-12">
                        BIENVENIDO A:
                    </div>
                    {Logo && (
                        <img
                            src={Logo}
                            alt="Logo"
                            className="object-cover w-full h-full px-20 max-h-72"
                        />
                    )}
                </div>
                <div className="flex flex-col leading-normal">
                    <div className="relative bg-gray-200 max-w-[500px] bg-white px-10 py-16 text-center dark:bg-dark-2 sm:px-12 md:px-[60px]">
                        <div className="mb-10 text-center md:mb-16 text-gray-600 text-xl font-semibold font-Inter">
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
                        { error && <div className="text-red-500 text-sm font-semibold font-Inter">{error}</div> }
                        <Button onClick={ handleSubmit } className="w-[163px] h-[50px] bg-pink-600 rounded-[56px] text-center text-white text-[15px] font-normal font-">
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
        <div className="relative mb-14">
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                style={iconStyles}
                className="rounded-3xl border-none bg-gray-300 w-72 pl-14 py-3 pr-3 text-[15px] font-normal text-gray-600"
            />
        </div>
    );
};
