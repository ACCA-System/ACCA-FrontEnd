import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import ACCAIcon from '../assets/svg/logo/ACCAlogo.svg';
import { Link } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  return (
    <Disclosure as="nav" className="bg-white md:h-24 flex justify-center items-center">
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
                    <Menu.Button className="flex rounded-full bg-gray-400 text-sm focus:outline-none focus:ring-2  focus:ring-black focus:ring-offset-2 focus:ring-offset-gray-100">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-10 md:h-12 md:w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
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
                        {({active})=>(
                                <div className="px-4 py-3 text-sm font-semibold text-gray-600">
                                <div>Bonnie Green</div>
                                <div className="font-semibold truncate">name@flowbite.com</div>
                              </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        
                        {({ active }) => (
                                                <Link
                            replace={true}
                            to="/welcome/users"
                            className={classNames(active ? 'bg-[#B4B4B4]' : '', 'block px-4 py-2 text-sm font-semibold text-gray-600')}
                          >
                            Usuarios
                          </Link>
                        )}
                      </Menu.Item>
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
                            className={classNames(active ? 'bg-[#B4B4B4]' : '', 'block px-4 py-2 text-sm font-semibold text-gray-600')}
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
}

export default Header;