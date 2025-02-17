import { useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import gql from "graphql-tag";
import { Pokemon } from "./Pokemon";

export function PokemonContainer() {
  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: {
      name: "Charmander",
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const pokemon = data?.pokemon || [];

  return (
    <Container maxWidth="sm">
      {pokemon && <Pokemon pokemon={pokemon} />}
    </Container>
  );
}

const GET_POKEMON_QUERY = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      name
      number
      image
      types

      attacks {
        fast {
          name
          type
          damage
        }
        special {
          name
          type
          damage
        }
      }

      evolutions {
        name
        image
        number

        evolutionRequirements {
          name
        }
      }
    }
  }
`;
