import React, { useRef } from 'react'



const Filtre = ({ searchTerm, handleChange }) => {
    const inputEl = useRef("");
    const getSearchTerm = () => { handleChange(inputEl.current.value) }

   /* const [searchMovie, setSearchMovie] = useState({

        titre: ''

    })
    const handleChange = (e) => {
        setSearchMovie({
            ...searchMovie, [e.target.name]: e.target.value
        })
    }
    return (
        <div>
            <input name="search" type='text'  placeholder='search' onChange={handleChange}
                onChange={handleChange}></input>
            
           
        </div>
    )
    
    
    
    
    
    
    
    
    
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
       // console.log(movies[1].titre)
        const results = movies.filter(movie =>
            movie.titre.toLowerCase().includes(searchTerm)
        );
        console.log(results)
        setSearchResults(results);
    }, [searchTerm]);

    return (
        <div >
            <input
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
            <ul>
                {searchResults.map(item => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    );
    
    
    
    
    */




  


    return (
        <div >
            <input
                ref={inputEl}
                type="text"
                placeholder="Search"
                value={searchTerm}
                onChange={getSearchTerm}
                className="mr-sm-2"
            />
            
               
          
        </div>
    );
}


export default Filtre
