const Footer = () => {
    return (<>
        <footer className="bg-white lg:grid lg:grid-cols-4">
            <div className="relative block h-32 lg:col-span-2 lg:h-full">
                <img
                    src="/images/logo.png"
                    alt=""
                    className="absolute inset-0 h-full w-full object-contain"
                />
            </div>

            <div className="px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div>
                        <p>
                            <span className="text-xs uppercase tracking-wide text-gray-500 mb-2"> Nous contacter </span>

                            <a href="tel:0652867160" className="block text-xl font-medium text-gray-900 hover:opacity-75 sm:text-xl">
                                06 52 86 71 60
                            </a>
                            <a href="mailto:babnana38@gmail.com" className="block text-xl font-medium text-gray-900 hover:opacity-75 sm:text-xl">
                                babnana38@gmail.com
                            </a>
                        </p>

                        <ul className="mt-8 space-y-1 text-sm text-gray-700">
                            <li className="text-xs uppercase tracking-wide text-gray-500 mb-2">Horaires</li>
                            <li>Du Mardi au Samedi: 9h30 - 18h30</li>
                            <li>Fermé le Dimanche et Lundi</li>
                        </ul>

                        <ul className="mt-4 flex gap-6">
                            <li>
                                <a
                                    href="https://www.facebook.com/PathOCalme"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-gray-700 transition hover:opacity-75"
                                >
                                    <span className="sr-only">Facebook</span>

                                    <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                            <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">Venir nous voir</p>

                            <p className="mt-6 space-y-4 text-sm">
                                <span className="block text-sm">La mini ferme des PATH&apos;O CALME</span>
                                <span className="block text-sm">185 Rte de Bourgoin</span>
                                <span className="block text-sm">38460 Trept</span>
                                <a href="https://maps.app.goo.gl/56bzLyiwiwL3FCNK9" className="block text-sm text-gray-700 transition hover:opacity-75" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                                        <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                                    </svg>

                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 border-t border-gray-100 pt-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <p className="mt-2 text-xs text-gray-500 sm:mt-0">
                            &copy; 2024. Path&apos;O calme.
                        </p>
                    </div>
                </div>
            </div>
        </footer></>);
}

export default Footer;