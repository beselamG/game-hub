import { useEffect, useState } from "react";
import apiClient from "../services/api-client";


export const usePlatforms = () =>{

    interface Platform {
        id:number;
        name:string
        slug:string
    }

    interface FetchGenraResponse {
        count:number;
        results:Platform[]

    }

    const [platforms, setPlatforms] = useState<Platform[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading ] = useState(false)
  
    useEffect(() => {
     
      apiClient
        .get<FetchGenraResponse>("/platforms/lists/parents")
        .then((res) =>{
           setLoading(true)
          setPlatforms(res.data.results)
          setLoading(false)
        } )
        .catch((err) =>{
          setError(err.message)
           setLoading(false)
        } );
        
      
    }
    
    ,[]);

    return {platforms , error , isLoading}
}