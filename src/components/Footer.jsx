import React from 'react';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-slate-50 text-center">
        <div>
            <p>@2022 Copyright</p>
        </div>
        <div>
            <ul className='flex flex-row justify-evenly items-center py-4 cursor-pointer'>
                <li>
                    <BsGithub />
                </li>
                <li>
                    <BsInstagram />
                </li>
                <li>
                    <FaFacebook />
                </li>
            </ul>
        </div>
    </footer>
  )
};

export default Footer;
