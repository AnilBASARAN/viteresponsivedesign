const FeatureItem =(props)=>{

    // eslint-disable-next-line react/prop-types
    const {image,title,description} = props;

    return(
        <div className="w-[246px] mx-4 my-6  " >
            <div className=" flex justify-center" ><img className="w-[100px]" src={image} /> </div>
            <div className="font-ubuntu my-2 text-violet-800 text-xl text-center" >{title}</div>
            <div>{description}</div>
        </div>
    );
};
export default FeatureItem;