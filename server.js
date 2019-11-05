const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "variables.env" });
const Plant = require("./models/Plants");
const User = require("./models/Users");

//GraphQL mdw
const { ApolloServer } = require("apollo-server");

const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

//create server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    Plant,
    User
  }
});

//connects to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));

/*server.listen().then(({ url}) => {
    console.log(`🚀  Server ready at ${url}`);
  });
*/
const PORT = process.env.PORT || 4444;

server.listen(PORT, () =>
  console.log(`server Betoven listening on port ${PORT}`)
);
