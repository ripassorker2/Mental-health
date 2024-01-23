import {MdFacebook} from "react-icons/md";
import {FaInstagram, FaLinkedin, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="relative  pt-8 pb-6 bg-[#0d1117]">
            <div className="container">
                <div className="flex flex-wrap text-left md:text-left">
                    <div className="w-full md:w-6/12 px-4">
                        <h4 className="text-3xl ">
                            <span>Mentel Health</span>
                        </h4>
                        <h5 className="text-lg mt-0 mb-2 text-gray-300">
                            Connect with us on these platforms, and expect a
                            response within 1-2 days.
                        </h5>
                        <div className="mt-4 md:mb-0 mb-6">
                            <button
                                className="bg-primary inline-flex text-blue-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <MdFacebook size={24} />
                            </button>

                            <button
                                className="bg-primary inline-flex text-blue-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <FaTwitter size={24} />
                            </button>
                            <button
                                className="bg-primary inline-flex text-rose-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <FaInstagram size={24} />
                            </button>
                            <button
                                className="bg-primary inline-flex text-blue-600  h-8 w-8 items-center justify-center align-center rounded-full  mr-2"
                                type="button">
                                <FaLinkedin size={24} />
                            </button>
                        </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full md:w-4/12 md:px-4 ml-auto">
                                <p className="text-white  font-semibold mb-2">
                                    Useful Links
                                </p>
                                <ul className="list-unstyled text-gray-300">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            About us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            Breathing exercise
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            Journaling
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            Contact us
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full md:w-4/12 md:px-4 md:mt-0 mt-4">
                                <p className="text-white  font-semibold mb-2">
                                    Other Resources
                                </p>
                                <ul className="list-unstyled text-gray-300">
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            Terms &amp; Conditions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to={"/"}
                                            className=" hover:text-rose-500 duration-300 f pb-2 ">
                                            Journaling
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-t mb-3 border-gray-700 md:mx-4"></div>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                    <div className="w-full md:w-4/12 mx-auto text-center">
                        <div className="text-sm  font-medium">
                            <span>
                                Copyright © 2024 by Mentel Health and Wellbeing.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
