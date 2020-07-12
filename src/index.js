
import React from "react";
import { render } from "react-dom";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/react-hooks";
import { createUploadLink } from "apollo-upload-client";
import App from "./components/App";

const link = createUploadLink({ 
  uri: 'https://33lb8zsifi.execute-api.eu-west-1.amazonaws.com/dev/upload' 
});
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);