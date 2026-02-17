import React from 'react'
import { NavLink } from 'react-router-dom'
import { AddwordIcon, DashboardIcon, Logo , PracticeIcon , VocabularyIcon , SettingIcon } from '../../common/icon'

const Sidebar = () => {

    const menuItems = [
  { name: "Dashboard", path: "dashboard", icon: <DashboardIcon /> },
  { name: "Add Word", path: "addword", icon: <AddwordIcon /> },
  { name: "Vocabulary", path: "vocabulary", icon: <VocabularyIcon /> },
  { name: "Practice", path: "practice", icon: <PracticeIcon /> },
  { name: "Profile", path: "profile", icon: <SettingIcon /> },
];

  return (
    <div  className='sm:h-screen  md:max-w-[252px] shadow-2xl  md:p-4 p-2 flex flex-col items-center max-sm:bg-[#4F2CBC]'>
        <div className="sm:flex hidden gap-3 items-center pb-[60px]   ">
            <Logo/>
            <h3 className='text-[32px] font-semibold md:block hidden'>Vocabify</h3>
        </div>
        
     <div className="flex sm:flex-col max-md:gap-2   max-sm:w-full  max-sm:justify-between   ">
         {menuItems.map((item, index) => (
           <NavLink
             key={index}
             to={item.path}
 
        className={({ isActive }) =>
  `${isActive ? "md:bg-[#F5F5F7] bg-white   " : "text-[#8E92BC] "}
  sm:duration-300 sm:ease-linear
  sm:w-full flex gap-3 items-center
  font-semibold text-[14px]
  sm:py-[10px] md:px-[20px]   px-3  py-3
  md:rounded-[10px] rounded-full`
}

           >
             {item.icon}
         
             
             <span className="hidden md:block">
          {item.name}
             </span>
         
           </NavLink>
         ))}
     </div>

        
   
                
    </div>
  )
}

export default Sidebar


