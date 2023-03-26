import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";
import NightlightIcon from '@mui/icons-material/Nightlight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function NavBar() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    const body = document.body;
    body.style.backgroundColor = darkMode ? "#fff" : "#000";
    body.style.color = darkMode ? "#000" : "#fff";
  }
  return (
    <>
      <div className="bg-transparent w-full top-0 flex justify-between px-8 mt-4">
        <div className="">
            {darkMode ?
          <img src="\whiteletterslogo (1).png" alt="" className="h-14" />
          :
          <img src="\LettersLogoBlack.png" alt="" className="h-16" />
        }
        </div>
        <div className="flex gap-4">
          <div className="relative top-1">
            <button onClick={toggleDarkMode}>
              {darkMode ? <NightlightIcon /> : <WbSunnyIcon />}
            </button>
          </div>
          <div className="flex gap-4">
            <a href="">
              <LinkedInIcon sx={{ color: "", fontSize: 35 }} />
            </a>
            <a href="">
              <GitHubIcon sx={{ color: "", fontSize: 35 }} />
            </a>
            <a href="">
              <MailIcon sx={{ color: "", fontSize: 35 }} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
