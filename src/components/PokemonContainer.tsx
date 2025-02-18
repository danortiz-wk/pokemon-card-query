import { gql, useQuery } from "@apollo/client";
import Container from "@mui/material/Container";
import { Pokemon } from "./Pokemon";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

export function PokemonContainer() {
  const { loading, error, data } = useQuery(GET_POKEMON_QUERY, {
    variables: {
      name: "Charmander",
    },
  });

  if (loading)
    return (
      <Stack alignItems="center" flex={1} height="100%" justifyContent="center">
        <CircularProgress />
      </Stack>
    );

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
