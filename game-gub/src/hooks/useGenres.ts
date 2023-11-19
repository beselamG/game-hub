import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';

 export const useGenres = () => {
 
    interface Genre {
        id:number;
        name:string
        image_background:string
    }

    interface FetchGenraResponse {
        count:number;
        results:Genre[]

    }

    const [genres, setGenre] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading ] = useState(false)
  
    useEffect(() => {
     
      apiClient
        .get<FetchGenraResponse>("/genres")
        .then((res) =>{
           setLoading(true)
          setGenre(res.data.results)
          setLoading(false)
        } )
        .catch((err) =>{
          setError(err.message)
           setLoading(false)
        } );
        
      
    }
    
    ,[]);

    return {genres , error , isLoading}
}
