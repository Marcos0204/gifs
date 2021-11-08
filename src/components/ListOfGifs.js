import React, { useState, useEffect } from 'react';
import getGifs from '../services/getGifs'
import Gif from './Gif';

const ListOfGifs = ({params}) => {
    const [ gifs, setGifs ] = useState([]);
    const [loading, setLoading] = useState(false)
    const {keyWord} = params
  useEffect( () =>{
    setLoading(true)
    async function fetchAPi() {
      //const keyWord='morty'
      const data = await getGifs({keyWord});
      setGifs(data)
      setLoading(false)
    }
    fetchAPi()

          //  getGifs.then(res => setGifs(res))    
  }, [keyWord])

    if(loading) return <i>Cargando</i>

    return <>
        {gifs.map((singleGifs, index) => <Gif {...singleGifs} key={index}/>  )}
    </>
    
          
    
}

export default ListOfGifs
