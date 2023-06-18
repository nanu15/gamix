import React from 'react'
import Typed from 'react-typed';
import { useNavigate } from 'react-router-dom';
import banner1 from '../assets/story/banner1.png'
import banner2 from '../assets/story/banner2.png'
import banner3 from '../assets/story/banner3.png'
import pc from '../assets/pc.jpg';

function Home() {
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-[#34A0A4] w-full py-[100px]'>
                <div className='max-w-[1240px] mx-auto text-center'>
                    <h1 className='text-3xl md:text-6xl text-white font-bold mb-5 '>
                        Are you ready to get
                    </h1> <br />
                    <h1 className='text-3xl md:text-6xl text-white font-bold mb-5' >
                        your <span>Perfect</span> pc Build
                    </h1> <br />
                    <div className='text-xl md:text-3xl text-white'>
                        <p><span>Stop</span>
                            <Typed
                                className='pl-3 text-xl md:text-3xl [text-white]'
                                strings={['choosing components that would not deliver the performence that you want!']}
                                typeSpeed={80}
                                backSpeed={30}
                                loop={true} /></p>
                    </div> <br /> <br />

                    <button onClick={() => navigate("/build")} className='bg-[#EEFAC7] hover:bg-[#DDE9B5] text-[#34A0A4] text-lg font-bold p-3  rounded-xl '>Start Here (PC Build)</button> <br /> <br />
                    <button onClick={() => navigate("/prebuild")} className='bg-[#EEFAC7] hover:bg-[#DDE9B5] text-[#34A0A4] text-lg font-bold p-3  rounded-xl'>Start Here (Prebuild PC)</button>
                </div>
            </div>
            <div className='py-[50px] '>
                <div className='max-w-[1700px] mx-auto md:grid grid-cols-3 gap-3'>
                    <div className='text-center w-[400px] md:w-[500px] '>
                        <img src={banner1} alt="" height={"170px"} width={"170px"} className='ml-[110px] md:ml-[160px]' />
                        <h1 className='text-[#34A0A4] text-xl md:text-2xl'>Our Story</h1>
                        <p className='leading-relaxed text-[gray] text-center text-m md:text-lg'>Gamix is a group of  young PC Build <br /> and Prebuilt PCs
                            enthusiasts <br /> who love Gaming and <br /> creating content.</p>
                    </div>
                    <div className='text-center w-[400px] md:w-[500px]'>
                        <img src={banner2} alt="" height={"170px"} width={"170px"} className='ml-[110px] md:ml-[160px]' />
                        <h1 className='text-[#34A0A4] text-xl md:text-2xl'>Our Idea</h1>
                        <p className='leading-relaxed text-[gray] text-center text-m md:text-lg'>We know how difficult might be to <br />
                            choose the right components when <br /> you don't have the knowledge to. <br />
                            That's why we will do that for you. <br /> Giving you the right PC Build/Prebuilt <br />
                            with the expected performance for the price.</p>
                    </div>
                    <div className='text-center w-[400px] md:w-[500px]'>
                        <img src={banner3} alt="" height={"170px"} width={"170px"} className='ml-[110px] md:ml-[160px]' />
                        <h1 className='text-[#34A0A4] text-xl md:text-2xl'>Components</h1>
                        <p className='leading-relaxed text-[gray] text-center text-m md:text-lg'>In order to give you the perfect PC Build,<br />
                            Gamix takes the best components for your <br /> needs that suit your budget (CPU, GPU, PSU, <br />
                            RAM, STORAGE, MOTHERBOARD, CASE, ETC.)</p>
                    </div>
                </div> <br /> <br /><hr />
            </div>
            <div className='max-w-[1240px] mx-auto my-10 md:grid grid-cols-2'>
                <div className=' col-span-1 w-[80%]'>
                    <img src={pc} alt="" width={"400px"} height={"400px"} />
                </div>
                <div className=' col-span-1 flex flex-col items-center'>
                    <h1 className='text-2xl md:text-6xl text-[#8431DD] font-bold mr-[220px]	'>How it works</h1> <br />
                    <h2 className='text-xl md:text-3xl text-[#CC0F0F] font-bold text-center	'>Pick your favorite game/usage</h2> <br />
                    <p className='leading-loose	text-center text-lg	'>Just click on your favorite game/usage <br /> <a href="/"
                        target="_self" className='text-[blue]'>here</a>. And we give you plenty of different <br /> options
                        for both prebuilt systems and PC <br /> Builds with the estimated FPS <br /> (ALL BUDGETS INCLUDED)</p> <br />
                    <button className='bg-[#EEFAC7] hover:bg-[#DDE9B5] text-[#34A0A4] text-lg font-bold p-3  rounded-xl '>Build PC</button> <br />
                    <h1 className='text-xl md:text-3xl text-[#CC0F0F] font-bold 	'>Can't find it in stock?</h1> <br />
                    <p className='leading-loose	text-center text-lg	'>Click <a href="/" target="_self" className='text-[blue]'>here</a> for PC Components <br /> alternatives</p>
                </div>
            </div>
            <div className='bg-[#34A0A4] p-4'>
                <div className='max-w-[1240px] mx-auto md:flex justify-between py-[50px]'>
                    <div className='m-2'>
                        <h1 className='text-[20px] md:text-[40px] font-bold text-white'>
                            Want to know about more PC components
                        </h1>
                        <span className='text-[15px] md:text-[20px]'>
                            Sign up to our newsletter and stay upto-date
                        </span>
                    </div>
                    <div className='m-2'>
                        <input className='p-3 mr-2 mb-3 text-gray-500 rounded ' type="email" placeholder='Email' />
                        <button className='bg-[#EEFAC7] hover:bg-[#DDE9B5] text-[#34A0A4] text-m font-bold p-3  rounded-xl '>Inform Us</button>
                        <br />
                        <p className='text-white'>
                            We care about the protection your data. Read our <br />
                            <a href="/" className='text-[#DDE9B5]'> Privacy Policy.</a>
                        </p>
                    </div>
                </div> <br /> <br /><hr />
            </div>
        </>
    )
}

export default Home