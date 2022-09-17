import React,{useState} from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill, BsFillSafeFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {

  const [click,setClick]=useState(false);
  const handleClick=()=>setClick(!click);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4   ">
      <div className="flex items-center">
        {/* Left side of navbar */}
        {/* Her we add the toggle for the menu */}
        <div onClick={handleClick} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        {/* anything above small, then large */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Best <span className="font-bold">Eats</span>
        </h1>

        {/* here is memdia queires */}
        <div className=" hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pick Up</p>
        </div>
      </div>


      {/* search input */}
      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
        <AiOutlineSearch size={25} />
        <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="Search foods" />
      </div>

      {/* cart button */}
      <button className="bg-black rounded-full text-white hidden md:flex items-center py-2">
          <BsFillCartFill size={20} className='mr-2'/>
          Cart
      </button>


      {/* Done with navbar*/}

      {/* Mobile Menu */}

      <div className={click?"bg-black/80 fixed w-full h-screen z-10 top-0 left-0":""}>
        {/* need backgrounf overlay */}
        {/* / on bg adds opacity */}


        {/* side drawer menu */}
        <div className={click?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300":"fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
          <AiOutlineClose onClick={handleClick} size={30} className='absolute right-4 top-4 cursor-pointer'/>
          
          <h2 className="text-2xl p-4 ">Best <span className="font-bold">Eats</span></h2>
          <nav>
            <ul className="flex flex-col p-4 text-gray-800">
              <li className="text-xl py-4 flex items-center"><TbTruckDelivery size={25} className="mr-4 "/>Orders</li>
              <li className="text-xl py-4 flex items-center"><MdFavorite size={25} className="mr-4 "/>Favorites</li>
              <li className="text-xl py-4 flex items-center"><FaWallet size={25} className="mr-4 "/>Wallet</li>
              <li className="text-xl py-4 flex items-center"><MdHelp size={25} className="mr-4 "/>Help</li>
              <li className="text-xl py-4 flex items-center"><AiFillTag size={25} className="mr-4 "/>Promotions</li>
              <li className="text-xl py-4 flex items-center"><BsFillSaveFill size={25} className="mr-4 "/>Best Ones</li>
              <li className="text-xl py-4 flex items-center"><FaUserFriends size={25} className="mr-4 "/>Invite Friends</li>
            </ul>
          </nav> 

        </div>

      </div>
    </div>
  );
};

export default Navbar;
