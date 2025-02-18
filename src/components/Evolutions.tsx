import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import { Evolution } from "./types";

type EvolutionsProps = {
  evolutions: Evolution[];
};

export function Evolutions({ evolutions }: EvolutionsProps) {
  return (
    <Stack direction="row" justifyContent="space-between" padding={2}>
      {evolutions.map((e) => (
        <Item>
          <Stack alignItems="center">
            <Avatar src={e.image} />
            <Stack>{e.name}</Stack>
            <Stack>{`No. ${e.number}`}</Stack>
          </Stack>
        </Item>
      ))}
    </Stack>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));
