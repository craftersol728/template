import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="box-border border-b-4 border-red-900 p-8 bg-gray-200 text-gray-600 text-center rounded-lg xl:w-80 mx-auto">
                            <h3 className="font-bold text-4xl mb-4">TaxPlus</h3>
                            <div className='text-md font-medium text-gray-600'>
                                <h5>1250 Addison Str</h5>
                                <p>Suite 100</p>
                                <p>Berkeley, CA</p>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-red-900 text-xl font-bold mb-4">LINKS</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">About</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Services</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Contact</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto">
                        <h6 className="text-red-900 text-xl font-bold mb-4">OUR SERVICES</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Business Tax advice Consultation</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">IRS Auditing Solution</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Payroll Management</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#" className="text-[#013289] hover:text-gray-900 hover:tracking-wider transition duration-250 ease-in-out">Comprehensive Tax Preparation, Planning</Link>
                        </li>
                        </ul>
                    </div>
                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Comprehensive Account Management Servies
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
