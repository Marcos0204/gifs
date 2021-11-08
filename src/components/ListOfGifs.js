import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGifs'
import Gif from './Gif';

const ListOfGifs = ({params}) => {
    const [ gifs, setGifs ] = useState([])
    const {keyWord} = params
  useEffect( () =>{
    async function fetchAPi() {
      //const keyWord='morty'
      const data = await getGifs({keyWord});
      setGifs(data)
    }
    fetchAPi()

          //  getGifs.then(res => setGifs(res))    
  }, [keyWord])

    return <>
        {gifs.map((singleGifs, index) => <Gif {...singleGifs} key={index}/>  )}
    </>
    
          
    
}

export default ListOfGifs
