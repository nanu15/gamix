import React, { useState } from 'react'
import {  Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
    const [toggle, setToggle] = useState(false);
    return (
        <div className='bg-[#34A0A4] p-4 shadow-3xl'>
            <div className='max-w-[1240px] py-[15px] flex justify-between 
            items-center  mx-auto'>
                <div className='text-5xl font-bold text-[#EEFAC7]'>
                    <a href="/">GAMIX</a>
                </div>
                {
                    toggle ?
                        <AiOutlineClose onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block cursor-pointer' />
                        :
                        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block cursor-pointer' />
                }
                
                <ul className='hidden md:flex text-white  gap-10 text-xl'>
                    <li className='hover:text-[#DDE9B5]'>
                    <Link to='/'>Home</Link>
                    </li>
                    <li className='hover:text-[#DDE9B5]'>
                    <Link to='build'>Build PC</Link>
                    </li>
                    <li className='hover:text-[#DDE9B5]'>
                    <Link to='prebuild'>Prebuild PC</Link>
                    </li>
                    <li className='hover:text-[#DDE9B5]'>
                    <Link to='alternative'>Alternative</Link>
                    </li>
                    <li className='hover:text-[#DDE9B5]'>
                    <Link to='contact'>Contact</Link>
                    </li>
                </ul>
                {/* Responsive Menu */}
                <ul className={`duration-300 md:hidden w-full h-screen text-white gap-10 text-xl fixed bg-[#34A0A4]  top-[102px]  ${toggle ? 'left-[0]' : 'left-[-100%]'} `}>
                    <li className='p-5 hover:text-[#DDE9B5]'>
                    <Link to='/'>Home</Link>
                    </li>
                    <li className='p-5 hover:text-[#DDE9B5]'>
                    <Link to='build'>Build PC</Link>
                    </li>
                    <li className='p-5 hover:text-[#DDE9B5]'>
                    <Link to='prebuild'>Prebuild PC</Link>
                    </li>
                    <li className='p-5 hover:text-[#DDE9B5]'>
                    <Link to='alternative'>Alternative</Link>
                    </li>
                    <li className='p-5 hover:text-[#DDE9B5]'>
                    <Link to='contact'>Contact</Link>
                    </li>
                </ul>
            </div>
            <br />
        </div>
    )
}
