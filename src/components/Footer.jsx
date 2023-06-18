import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-[#34A0A4] max-w-[full] mx-auto py-16 px-4 lg:grid grid-cols-3  text-white'>
            <div className='mt-[40px]'>
                <h1 className='w-full text-5xl font-bold text-[#EEFAC7] ml-[80px]'>GAMIX</h1>
                <p className='py-4 ml-[80px]'>Are you looking for a Prebuilt Gaming PC instead?</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <a href=""><FaFacebookSquare className='ml-[80px] hover:text-[#DDE9B5] cursor-pointer' size={30} /></a>
                    <a href=""><FaInstagram className='ml-[80px] hover:text-[#DDE9B5] cursor-pointer' size={30} /></a>
                    <a href=""><FaTwitterSquare className='ml-[80px] hover:text-[#DDE9B5] cursor-pointer' size={30} /></a>
                    <a href=""><FaGithubSquare className='ml-[80px] hover:text-[#DDE9B5] cursor-pointer' size={30} /></a>
                </div>
            </div>
            <div className='lg:col-span-2 flex ml-[70px] mt-6'>
                <div>
                    <h6 className='text-2xl text-[#DDE9B5] mr-[200px]'>Build</h6> <br />
                    <ul >
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Build PC</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Prebuild PC</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Recommended PC</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Pc Help</li></a> <li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Pc Help</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-2xl text-[#DDE9B5] mr-[200px]'>Alternatives</h6> <br />
                    <ul>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Graphic Card</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Power supply</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Storage</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Ram</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Case</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Motherboard</li></a>
                    </ul>
                </div>
                <div>
                    <h6 className='text-2xl text-[#DDE9B5] mr-[200px]'>Games Fps</h6> <br />
                    <ul>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>RDR 2</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Valorent</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Fortnite</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>Cyberpunk</li></a>
                        <a href=""><li className='py-2 text-lg hover:text-[#DDE9B5] cursor-pointer'>God of war</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;