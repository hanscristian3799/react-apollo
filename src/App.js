import "./App.css";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  from,
  InMemoryCache,
} from "@apollo/client";

import { onError } from "@apollo/client/link/error";
import Form from "./Components/Form";
import GetUsers from "./Components/GetUsers";

const errorLink = onError(({ grapghqlErrors, networkError }) => {
  if (grapghqlErrors) {
    grapghqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({ uri: "http://localhost:6969/graphql" }),
]);

const client = new ApolloClient({
  uri: "http://localhost:6969/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Form />
    </ApolloProvider>
  );
}

export default App;
