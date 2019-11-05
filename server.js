
const mongoose = require("mongoose");

require("dotenv").config({ path: "variables.env" });
const Plant = require("./models/Plants");
const User = require("./models/Users");



const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");

const express = require('express');
const { ApolloServer } = require('apollo-server-express');


//create server


const server = new ApolloServer({ typeDefs, resolvers, context:{Plant,User}  });
 
const app = express();
server.applyMiddleware({ app, cors: {origin: '*',
credentials: true} });
 
//connects to DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB connected"))
  .catch(err => console.error(err));


const PORT = process.env.PORT || 4000;


app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);