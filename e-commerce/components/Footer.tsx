import React from "react";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="w-[100vw] h-48 bg-[#353839] text-white text-xl text-center bottom-0 flex flex-col">
      <div className="w-[100%] h-[70%] flex flex-col md:flex-row">
        <div className="w-[100%] h-[80%] flex flex-row gap-4 items-center justify-center md:w-[50%] md:h-[100%]">
          <SocialIcon url="https://www.youtube.com/" bgColor="grey" />
          <SocialIcon url="https://twitter.com/?lang=pl" bgColor="grey" />
          <SocialIcon url="https://pl-pl.facebook.com/" bgColor="grey" />
          <SocialIcon url="https://www.instagram.com/" bgColor="grey" />
          <SocialIcon url="https://www.tiktok.com/pl-PL/" bgColor="grey" />
        </div>
        <div className="w-[100%] h-[100%] flex items-center justify-start ml-8 gap-5 md:w-[50%]">
          <input
            type="text"
            className="bg-[#a6a6a6] w-[50%] h-[60%] border-b-4 md:h-[40%]"
          ></input>
          <button className="bg-red-500 h-[60%] p-2 transition-[0.5s] hover:bg-red-800 whitespace-nowrap md:h-[40%]">
            Sign up for Newsletter
          </button>
        </div>
      </div>
      <div className="w-[100%] h-[30%] flex items-center justify-center">
        © {new Date().getFullYear()} Copyright: ShoeStore.com
      </div>
    </div>
  );
}

export default Footer;
