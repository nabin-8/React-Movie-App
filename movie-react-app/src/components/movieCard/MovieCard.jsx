const MovieCard=({title,poster})=>{
    return(
        <>
            <div
                className=" flex flex-wrap  relative  md:w-60 h-[410px] md:h-[360px] my-3  md:my-5 md:mx-0 cursor-pointer rounded-xl overflow-hidden ">
    
                
                <div className='absolute bottom-0 w-full flex justify-between items-end pb-3 px-2  md:p-3 z-20'>
                    <h1 className='text-white  text-xl font-semibold absolute  break-normal break-words'>{title}</h1>
                    {/* <p className=" text-red-200">{overview}</p> */}
                </div>
    
    
                <div>
                    <img className='hover:blur-sm img object-cover' src={`https://image.tmdb.org/t/p/w500${poster}`} /> 
                        
                </div>

            </div>
        </>
    )
}

export default MovieCard