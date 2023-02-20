import React from "react"
import { type LoadPoketeamList } from "@/domain/usecases"
import {
  PoketeamItem,
  PoketeamItemEmpty
} from "@/presentation/pages/poketeams/components"
import { Heading, SimpleGrid, Stack } from "@chakra-ui/react"

interface ListProps {
  poketeams: LoadPoketeamList.Model[]
}

const List: React.FC<ListProps> =
  ({ poketeams }) => {
    return (
      <Stack>
        <Heading size="xl" marginBottom={5} color="blackAlpha.800">
          Poketeams
        </Heading>

        {poketeams?.length
          ? (
              <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={8}>
                {poketeams.map((poketeam: LoadPoketeamList.Model) =>
                  <PoketeamItem key={poketeam.id} poketeam={poketeam} />)
                }
              </SimpleGrid>
            )
          : <PoketeamItemEmpty />}
      </Stack>
    )
  }

export default List
