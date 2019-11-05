import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import{GET_ALL_PLANTS} from '../queries/queries'


function AllPlants() {

const { loading, error, data } = useQuery(GET_ALL_PLANTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
    console.log(data)
    
     return <p>Heloo plants</p>
    
}


export default AllPlants