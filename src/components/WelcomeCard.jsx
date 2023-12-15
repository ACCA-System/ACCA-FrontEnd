import React from "react";
import welcomeAdmin from "../assets/svg/welcome/welcomeAdmin.svg";
import useACCA from "../hooks/useACCA";

export const WelcomeCard = () => {

    const auth = useACCA();

    const roleDictionary = {
        1: "Director",
        2: "Administrador",
        3: "Secretaria(o)",
        4: "Encargado de Donaciones",
    };

    return (
            <div className="card bg-base-100 bg-transparent md:bg-white md:shadow-xl p-8 md:p-12">
                <figure>
                    <img
                        src={welcomeAdmin}
                        alt="welcomeAdmin"
                        className="w-full h-64 object-cover"
                    />
                </figure>
                <div className="card-body flex items-center">
                    <h1 className="card-title text-center text-3xl text-pink-600">
                        ¡Bienvenido {roleDictionary[auth.user.typeId]}!
                    </h1>
                </div>
            </div>
    );
};
