import React from "react";

export const Footer = () => {
    return (
        <footer className="bg-gray-200 font-sans dark:bg-gray-900">
            <div className="container px-6 py-12 mx-auto">
                <hr className="my-6 border-gray-400 md:my-8 h-2" />
                <p className="font-sans text-gray-600 p-8 text-start md:text-center md:text-lg md:p-4">
                    © { new Date().getFullYear() } ACCA. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
