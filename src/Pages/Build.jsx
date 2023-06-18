import React from 'react';
import { useNavigate } from 'react-router-dom';
import valorent from '../assets/games/valorent.jpg';
import cyberpunk from '../assets/games/cyberpunk.jpg';
import gta from '../assets/games/gta.jpg';
import csgo from '../assets/games/csgo.jpg';
import fifa23 from '../assets/games/fifa23.jpg';
import flight from '../assets/games/flight.jpg';
import fortnite from '../assets/games/fortnite.jpg';
import froza from '../assets/games/froza.jpg';
import lol from '../assets/games/lol.jpg';
import minecraft from '../assets/games/minecraft.jpg';
import nba2k23 from '../assets/games/nba2k23.jpg';
import rdr2 from '../assets/games/rdr2.jpg';
import warzone from '../assets/games/warzone.jpg';
import pubg from '../assets/games/pubg.jpg';
import content from '../assets/games/content.jpg';

function Build() {
  const navigate = useNavigate();
  return (
    <div className='bg-[#34A0A4] w-full   py-[100px]'>
      <div className='text-center '>
        <h1 className='text-3xl md:text-6xl text-[#DDE9B5] font-bold mb-5 '>Choose Your Favorite Game</h1>
        <p className='text-[white] text-center text-m md:text-xl'>Select your Budget, and find the <span>Perfect</span>  PC Components for your <span>next</span>  Gaming PC Build </p>
      </div> <br /> <br /> <br />
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
       <button onClick={() => navigate("/valorent")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"250px"} width={"250px"} src={valorent} alt="" /></button> <br/>
          <p className='text-[#DDE9B5]  ml-[80px] text-xl md:text-2xl'>Valorent</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/cyberpunk")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={cyberpunk} alt="" /></button> <br />
          <p className='text-[#DDE9B5]  ml-[80px] text-xl md:text-2xl'>Cyberpunk</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/gta")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer '   height={"280px"} width={"280px"}  src={gta} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[100px] text-xl md:text-2xl'>Gta V</p> <br />
        </div> 
      </div> <br />
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <button onClick={() => navigate("/csgo")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={csgo} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[100px] text-xl md:text-2xl'>Csgo</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/fifa2023")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={fifa23} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[90px] text-xl md:text-2xl'>Fifa 23</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/fsimulator")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={flight} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[100px] text-xl md:text-2xl'>Flight</p> <br />

        </div>
      </div> <br />
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <button onClick={() => navigate("/fort")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={fortnite} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[80px] text-xl md:text-2xl'>Fortnite</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/forza")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={froza} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[90px] text-xl md:text-2xl'>Forza 5</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/league")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={lol} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[50px] text-xl md:text-2xl'>League of Legends</p> <br />
        </div>
      </div> <br />
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <button onClick={() => navigate("/minecraft")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={minecraft} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[80px] text-xl md:text-2xl'>Minecraft</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/nba")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"300px"} width={"300px"}  src={nba2k23} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[90px] text-xl md:text-2xl'>NBA2k23</p><br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/rdr")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"300px"} width={"300px"}  src={rdr2} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[110px] text-xl md:text-2xl'>RDR2</p><br />
        </div>
      </div> <br />
      <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-3 items-center '>
        <div className=''>
        <button onClick={() => navigate("/pubg")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={pubg} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[80px] text-xl md:text-2xl'>Pubg PC</p> <br /> 
        </div>
        <div className=''>
        <button onClick={() => navigate("/warzone")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"280px"} width={"280px"}  src={warzone} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[80px] text-xl md:text-2xl'>Warzone</p> <br />
        </div>
        <div className=''>
        <button onClick={() => navigate("/content")}><img className='rounded shadow-sm hover:shadow-2xl cursor-pointer ' height={"240px"} width={"280px"}  src={content} alt="" /></button> <br />
        <p className='text-[#DDE9B5]  ml-[90px] text-xl md:text-2xl'>Content</p>
        </div>
      </div> <br /> <br /> <br /> <br /> <hr />
    </div>
  )
}

export default Build