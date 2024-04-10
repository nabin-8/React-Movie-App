import { useState } from "react"

const SearchBar=(props)=>{

    const [query, setQuery]=useState("")
    const handleChange=(event)=>{
        setQuery(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        props.onSubmit(query)
    }

    return(
        <>
            
            <form className="max-w-md mx-auto"
            onSubmit={handleSubmit}>   
                <div className="relative flex justify-center">
                   
                    <input type="search" id="default-search" className="block w-10% md:w-full p-4 ps-10 text-sm rounded-lg backdrop-blur-xl bg-white/30 text-white focus:outline-none" placeholder="Search Movies..." 
                    value={query}
                    onChange={handleChange}
                    />
                    
                </div>
            </form>

        </>
    )
}

export default SearchBar