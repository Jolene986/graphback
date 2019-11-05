//Queries logic

exports.resolvers = {
  Query: {
    books: () => books,
    getAllPlants: () => {}
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

const books = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];
