const HeroSection =()=>{
    return (
        <div className="flex justify-center" >

            <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row px-4 justify-center items-center py-32" >

            
                <div className="text-violet-800 text-4xl md:text-5xl font-ubuntu font-medium max-w-[450px]">
                    

<div>

Something
<span className="text-yellow-600"> Catchy</span> and{" "} <span className="text-red-600"> Technological</span>
</div>

                   
                    <button
                className="py-3 px-10 border-4 font-medium border-violet-800 text-xl mt-4">Learn More</button>
                    </div>


                <div>
                
                    <img
                    className="md:w-[450px] my-16"
                     src="https://static-task-assets.react-formula.com/963190.png" />
                </div>
                
            </div>
        </div>
    );
};
export default HeroSection;