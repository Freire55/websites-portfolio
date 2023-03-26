import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MailIcon from "@mui/icons-material/Mail";

function NavBar() {
  return (
    <>
      <div className="bg-transparent h-20 w-full absolute top-0 flex justify-between items-center">
        <div className="mx-4">
            <img src="/59938655975.jpg" alt="" className="h-16" />
        </div>
        <div className="mx-4">
          <LinkedInIcon sx={{ color: "", fontSize: 40 }} />
          <GitHubIcon sx={{ color: "", fontSize: 40 }} />
          <MailIcon sx={{ color: "", fontSize: 40 }} />
        </div>
      </div>
    </>
  );
}

export default NavBar;
