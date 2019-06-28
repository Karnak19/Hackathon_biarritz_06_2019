const express = require("express");
const graphqlHTTP = require("express-graphql");
const app = express();
const cors = require("cors");

const schema = require("./schema");

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => console.log("server is running on port 4000"));
