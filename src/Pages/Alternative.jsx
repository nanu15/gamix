import React from 'react'
import { useNavigate } from 'react-router-dom';
import ram from '../assets/games/alternatives/ram.png'
import ssd from '../assets/games/alternatives/ssd.png'
import psu from '../assets/games/alternatives/psu.png'
import casse from '../assets/games/alternatives/casse.png'
import gpu from '../assets/games/alternatives/gpu.png'
import cpu from '../assets/games/alternatives/cpu.png'
import cooler from '../assets/games/alternatives/cooler.png'
import motherboard from '../assets/games/alternatives/motherboard.png'
import prebuilt from '../assets/games/alternatives/prebuilt.png'

function Alternative() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#34A0A4] w-full py-[100px]'> 
      <div className='text-center '>
        <h1 className='text-2xl md:text-4xl text-[#DDE9B5] font-bold mb-5 '>Alternatives for Components in case of <br /> price changes</h1>
      </div> <br /> <br /> <br />
      <div className='max-w-[1200px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <a href="http://www.gtstore.pk/products/gaming-ram.html?page=1&sort=2" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={ram} alt="" /></a> <br/> <br />
          <p className='text-[#DDE9B5] text-center text-xl md:text-2xl'>RAM</p> <br />
        </div>
        <div className=''>
        <a href="http://www.gtstore.pk/ssd.html?page=1&sort=2" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={ssd} alt="" /></a> <br/> <br />
          <p className='text-[#DDE9B5] text-center  text-xl md:text-2xl'>SSD</p> <br />
        </div>
        <div className=''>
        <a href="http://www.gtstore.pk/searchresults.php?inputString=power+supply&x=0&y=0" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={psu} alt="" /></a> <br/> <br />
        <p className='text-[#DDE9B5] text-center  text-xl md:text-2xl'>PSU</p> <br />
        </div> 
      </div> <br /> <br /> <br /> <br />
      <div className='max-w-[1200px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <a href="https://www.czone.com.pk/casing-pakistan-ppt.168.aspx" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={casse} alt="" /></a> <br/> <br />
          <p className='text-[#DDE9B5] text-center text-xl md:text-2xl'>CASE</p> <br />
        </div>
        <div className=''>
        <a href="https://www.czone.com.pk/graphic-cards-pakistan-ppt.154.aspx" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={gpu} alt="" /></a> <br/> <br />
          <p className='text-[#DDE9B5] text-center  text-xl md:text-2xl'>GPU</p> <br />
        </div>
        <div className=''>
        <a href="https://www.czone.com.pk/processors-pakistan-ppt.85.aspx" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={cpu} alt="" /></a> <br/> <br />
        <p className='text-[#DDE9B5] text-center  text-xl md:text-2xl'>CPU</p> <br />
        </div> 
      </div> <br /> <br /> <br /> <br />
      <div className='max-w-[1200px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <a href="https://www.czone.com.pk/search.aspx?kw=CPU%20COOLER" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={cooler} alt="" /></a> <br/> <br />
          <p className='text-[#DDE9B5] text-center text-xl md:text-2xl'>CPU-COOLER</p> <br />
        </div>
        <div className=''>
        <a href="https://www.czone.com.pk/search.aspx?kw=MOTHERBOARD" target='_blank'><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={motherboard} alt="" /></a> <br/> <br />
          <p className='text-[#DDE9B5] text-center  text-xl md:text-2xl'>MOTHERBOARD</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/prebuild")}><img className='rounded shadow-sm hover:shadow-2xl ml-[160px] md:ml-[145px] cursor-pointer ' height={"100px"} width={"100px"} src={prebuilt} alt="" /></button> <br/> <br />
        <p className='text-[#DDE9B5] text-center  text-xl md:text-2xl'>PREBUILT PC</p> <br />
        </div> 
      </div> <br /> <br /> <hr />
    </div> 
  )
}

export default Alternative