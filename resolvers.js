//Queries logic

exports.resolvers = {
  Query: {
    
    getAllPlants:  async (root,args, {Plant})=> {
      const allPlants = await Plant.find();
      return allPlants;
    }
  },
  Mutation: {
    addPlant: async (
      root,
      {
        genus,
        species,
        commonName,
        family,
        category,
        description,
        location,
        createdDate,
        wows,
        username
      },
      { Plant }
    ) => {
      const newPlant = await new Plant({
        genus,
        species,
        commonName,
        family,
        category,
        description,
        location,
        createdDate,
        wows,
        username
      }).save();
      return newPlant;
    }
  }
};

// fake data

