import React from "react";
import Sidebar from "../Vocab/Sidebar";
import { Outlet } from "react-router-dom";
import { Notivation, ProfilePic } from "../../common/icon";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-[#FAFAFA] sm:flex-row flex-col">

      
      <div className="sm:relative fixed bottom-0 left-0 w-full sm:w-auto sm:h-screen z-50 bg-white shadow-md">
        <Sidebar />
      </div>

      
      <div className="flex flex-col flex-1 sm:ml-0 mb-[70px] sm:mb-0 overflow-hidden">

        
        <div className="flex justify-between items-center sm:px-[32px] px-4 sm:py-[32px] py-3 bg-white">
          <div>
            <h3 className="sm:text-[24px] text-[18px] font-semibold text-[#141522]">
              Hi, Rohit Dhaka
            </h3>
            <p className="text-[#54577A] font-medium sm:pt-2 text-[14px]">
              Let’s learn new words today!
            </p>
          </div>

          <div>
            
            <ProfilePic />
          </div>
        </div>

        
        <div className="flex-1 overflow-y-auto   py-[20px] sm:px-5 px-4">
          <Outlet />
        </div>

      </div>
    </div>
  );
};

export default DashboardLayout;
