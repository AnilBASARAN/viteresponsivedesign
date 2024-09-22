import { faL } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const NavBar =()=>{

    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);

    return(
        <>
        <nav className="flex justify-center shadow-md bg-violet-50 py-2 px-4">
            <div className="w-full max-w-6xl flex justify-between items-center p-2">
                <div className="font-ubuntu text-4xl text-violet-900 flex items-center" >

                    <img
                    className="w-24 mr-2"
                    src="https://static-task-assets.react-formula.com/899963.png"/>
                    hasher
                </div>
                <div className="hidden md:flex items-center">


                <button className="mx-4 font-medium text-violet-800" >Home</button>
                <button className="mx-4 font-medium text-violet-800">About</button>
                <button className="mx-4 font-medium text-violet-800">Contact</button>
                <button className="mx-4 font-medium text-violet-800"><i className="fa-solid text-2xl text-red-700 fa-magnifying-glass"></i></button>
                </div>
                <button
                onClick={()=>setIsMobileMenuOpen(true)}
                className="text-4xl text-violet-950 p-4 md:hidden">
                <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </nav>
        {
            isMobileMenuOpen && <div className="bg-violet-950 fixed top-0 right-0 pt-12 pb-4 rounded-bl-lg" >
                <button className="text-2xl text-violet-200 pr-20 pl-6 flex py-4">Home</button>
                <button className="text-2xl text-violet-200 pr-20 pl-6 flex py-4">About</button>
                <button className="text-2xl text-violet-200 pr-20 pl-6 flex py-4">Contact</button>
                <button
                onClick={()=>setIsMobileMenuOpen(false)}
                >

                <i className="absolute top-0 right-0 p-2 fa-regular fa-circle-xmark text-violet-400 text-4xl"></i>
                </button>
                
            </div>
        }
        </>
    );
};

export default NavBar;