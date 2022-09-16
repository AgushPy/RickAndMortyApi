import React, { useEffect, useState } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Card } from './Card'

export const Cards = () => {

  const[rickAndMorty,setRickAndMorty]=useState([]);

  useEffect(()=>{
      
        RickAndMortyService.getAllCharacters()
                                .then((data) =>setRickAndMorty(data.results))
                                .catch((err) => console.log(err));
    
  },[rickAndMorty])
  //Cada elemento iterado tiene que estar con su key para que no lance error de conflicto
  const cardList = rickAndMorty.map((rm) => <Card rickAndMorty={rm} key={rm.id} />)

  return (
    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {cardList}
        </div>
      </div>
    </div>
  )
}
