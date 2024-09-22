const NavBar =()=>{
    return(
        <nav className="flex justify-center shadow-md bg-violet-50 py-2 px-4">
            <div className="w-full max-w-6xl flex justify-between items-center p-2">
                <div className="font-ubuntu text-4xl text-violet-900 flex items-center" >

                    <img
                    className="w-24 mr-2"
                    src="https://static-task-assets.react-formula.com/899963.png"/>
                    hasher
                </div>
                <div className="flex justify-evenly font-medium text-violet-800">


                <button className="mx-4" >Home</button>
                <button className="mx-4">About</button>
                <button className="mx-4">Contact</button>
                <button className="mx-4"><i className="fa-solid text-2xl text-red-700 fa-magnifying-glass"></i></button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;