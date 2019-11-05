import {gql} from 'apollo-boost';

export const GET_ALL_PLANTS = gql`
query {
    getAllPlants {
    genus
    species
    commonName
    family
    category
    description
    }
}

`