import React from "react";
import welcomeAdmin from "../assets/svg/welcome/welcomeAdmin.svg";

export const WelcomeCard = () => {
    return (
        <div className="flex items-center justify-center h-screen md:w-[90%] md:h-4/5 md:m-[5%] bg-gray-200 bg-opacity-80 shadow-md md:rounded-lg">
            <div className="card my-60 bg-base-100 bg-transparent md:bg-white md:shadow-xl p-8 md:p-12">
                <figure>
                    <img
                        src={welcomeAdmin}
                        alt="welcomeAdmin"
                        className="w-full h-64 object-cover"
                    />
                </figure>
                <div className="card-body flex items-center">
                    <h1 className="card-title text-center text-3xl text-pink-600">
                        ¡Bienvenido Administrador!
                    </h1>
                </div>
            </div>
        </div>
    );
};
