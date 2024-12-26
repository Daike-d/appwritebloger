import React from 'react';
import { Link } from 'react-router-dom'; // Ensure correct import for Link
import Logo from '../Logo';

function Footer() {
   return (
      <section className="relative py-10 bg-gray-400 border-t-2 border-t-black ">
         <div className="z-10 mx-1 max-w-screen-2xl px-4 h-fit flex flex-col ">
            <div className="m-6 flex flex-row justify-end ">
               <div className="w-full p-6 md:w-1/2 lg:w-5/12">
                  <div className="flex h-full flex-col justify-end">
                     <div className="mb-4 inline-flex items-center">
                        <Logo width="100px" />
                     </div>
                     <div>
                        <p className="text-sm text-gray-600">
                           &copy; Copyright 2024. All Rights Reserved by Daike.
                        </p>
                     </div>
                  </div>
               </div>
               <div className="w-full p-6 md:w-1/2 lg:w-2/12">
                  <div className="h-full flex flex-col justify-end">
                     <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                        Support
                     </h3>
                     <ul>
                        <li className="mb-4">
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Account
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Help
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Contact Us
                           </Link>
                        </li>
                        <li>
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Customer Support
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="w-full p-6 md:w-1/2 lg:w-3/12">
                  <div className="h-full flex flex-col justify-end">
                     <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
                        Legals
                     </h3>
                     <ul>
                        <li className="mb-4">
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Terms &amp; Conditions
                           </Link>
                        </li>
                        <li className="mb-4">
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Privacy Policy
                           </Link>
                        </li>
                        <li>
                           <Link
                              className="text-base font-medium text-gray-900 hover:text-gray-700"
                              to="/"
                           >
                              Licensing
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default Footer;
