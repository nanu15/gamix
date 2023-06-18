import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from './Pages/Contact'
import Build from "./Pages/Build";
import Prebuild from "./Pages/Prebuild";
import Alternative from "./Pages/Alternative";
import Layout from "./components/Layout";
import Valorent from "./Pages/Valorent";
import Cyberpunk from "./Pages/Cyberpunk";
import Gta from "./Pages/Gta";
import Csgo from "./Pages/Csgo";
import Fifa2023 from "./Pages/Fifa2023";
import Fsimulator from "./Pages/Fsimulator";
import Forza from "./Pages/Forza";
import Minecraft from "./Pages/Minecraft";
import Nba from "./Pages/Nba";
import Rdr from "./Pages/Rdr";
import Pubg from "./Pages/Pubg";
import Warzone from "./Pages/Warzone";
import League from "./Pages/League";
import Fort from "./Pages/Fort";
import Content from "./Pages/Content";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="build" element={<Build />} />
            <Route path="prebuild" element={<Prebuild />} />
            <Route path="alternative" element={<Alternative />} />
            <Route path="contact" element={<Contact />} />
            <Route path="valorent" element={<Valorent/>} />
            <Route path="cyberpunk" element={<Cyberpunk/>} />
            <Route path="gta" element={<Gta/>} />
            <Route path="csgo" element={<Csgo/>} />
            <Route path="fifa2023" element={<Fifa2023/>} />
            <Route path="fsimulator" element={<Fsimulator/>} />
            <Route path="fort" element={<Fort/>} />
            <Route path="forza" element={<Forza/>} />
            <Route path="league" element={<League/>} />
            <Route path="minecraft" element={<Minecraft/>} />
            <Route path="nba" element={<Nba/>} />
            <Route path="rdr" element={<Rdr/>} />
            <Route path="pubg" element={<Pubg/>} />
            <Route path="warzone" element={<Warzone/>} />
            <Route path="content" element={<Content/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
