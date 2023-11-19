import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id:number;
  name:string;
  slug:string


}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platform}[]
  metacritic:number

}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

interface Props {
  genreId : string  | null
}


const useGames  = (genreId:string | null) =>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading , setLoading ] = useState(false)
    
  
    useEffect(() => {
     
      apiClient
        .get<FetchGamesResponse>("/games",{params:{genres:genreId}})
        .then((res) =>{
           setLoading(true)
          setGames(res.data.results)
          setLoading(false)
        } )
        .catch((err) =>{
          setError(err.message)
           setLoading(false)
        } );
        
      
    }
    
    ,[genreId]);

    return {games , error , isLoading}
}

export default useGames