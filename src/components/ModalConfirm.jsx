import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import useACCA from "../hooks/useACCA";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

export default function ModalConfirm({ open, setOpen, values, error }) {
    const [showLottie, setShowLottie] = useState(false);
    const [buttonsDisabled, setButtonsDisabled] = useState(false);
    const { submitUser } = useACCA();

    const cancelButtonRef = useRef(null);

    const handleConfirm = () => {
        setButtonsDisabled(true);
        setShowLottie(true);
        submitUser(values);
        setTimeout(() => {
            setShowLottie(false);
            setOpen(false);
            setButtonsDisabled(false);
        }, 1000);

    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="relative z-10"
                initialFocus={cancelButtonRef}
                onClose={setOpen}
            >
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        {showLottie ? (
                                            <Player
                                                autoplay
                                                loop
                                                speed={1.6}
                                                src="https://lottie.host/b9b0105b-798f-4337-8c5d-fea6b5111c4d/WTJjErSt1w.json"
                                                className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                                            >
                                                <Controls
                                                    visible={false}
                                                    buttons={[
                                                        "play",
                                                        "repeat",
                                                        "frame",
                                                        "debug",
                                                    ]}
                                                />
                                            </Player>
                                        ) : (
                                            <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                                                <ExclamationTriangleIcon
                                                    className="h-6 w-6 text-green-600"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                        )}
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <Dialog.Title
                                                as="h3"
                                                className="text-base font-semibold leading-6 text-gray-900"
                                            >
                                                Guardar usuario
                                            </Dialog.Title>
                                            <div className="mt-2">
                                                {error ? (
                                                    <p className="text-sm text-red-500">
                                                        {error.message}
                                                    </p>
                                                ) : (
                                                    <p className="text-sm text-gray-500">
                                                        ¿Estás seguro de que
                                                        quieres guardar los datos de este
                                                        usuario?
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                    <button
                                        type="button"
                                        className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
                                        onClick={handleConfirm}
                                        disabled={buttonsDisabled}
                                    >
                                        Guardar
                                    </button>
                                    <button
                                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                        onClick={() => setOpen(false)}
                                        ref={cancelButtonRef}
                                        disabled={buttonsDisabled}
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
}
