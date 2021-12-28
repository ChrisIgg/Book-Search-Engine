const express = require("express");
const path = require("path");
const db = require("./config/connection");
const routes = require("./routes");
// added here
// const mongoose = require('mongoose');
const compression = require("compression");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(compression());

// mongoose.connect(
//   process.env.MONGODB_URI || "mongodb://localhost/book-search-db",
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//   }
// );

// if we're in production, serve client/build as static assets

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

// const { ApolloServer } = require ('apollo-server-express');

// const { typeDefs, resolvers } = require ('./schemas')
// const db = require ('./config/connection');

// const PORT = process.env.PORT || 3001;
// const app = express();
// const server = new ApolloServer({
//     typeDefs,
//     resolvers
// })
