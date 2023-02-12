import React, { useEffect, useState } from 'react'
import { PokemonListItem } from './components'
import { type PokemonState } from '@/data/protocols/state-manager'
import { useAppSelector } from '@/main/providers/redux-store-provider'
import { Loading } from '@/presentation/components'
import {
  type LoadPokemonList,
  type StorePokemonList
} from '@/domain/usecases'
import { Container } from '@chakra-ui/react'

export interface HomeProps {
  loadPokemonList: LoadPokemonList
  storePokemonList: StorePokemonList
}

const Home: React.FC<HomeProps> = ({
  loadPokemonList,
  storePokemonList
}) => {
  const {
    isLoading,
    pokemons,
    size,
    filters: {
      limit
    },
    error
  }: PokemonState = useAppSelector((state) => state.pokemon)
  const [page, setPage] = useState(1)

  const load = (page: number): void => {
    const offset = (limit * ((page ?? 1) - 1))

    storePokemonList.filterPokemons({ page, limit, offset })
    loadPokemonList.loadAll({
      limit,
      offset
    })
  }

  useEffect(() => {
    load(page)
  }, [page])

  return (
    // <Flex
    //   minH='100vh'
    //   align='center'
    //   justify='center'
    //   bg={useColorModeValue('gray.50', 'gray.800')}>
    //   <Stack spacing={8} mx='auto' maxW='lg' py={12} px={6}>
    //     <Text>
    //       teste 123
    //     </Text>
    //   </Stack>
    // </Flex>
    <Container maxW="7xl" p="12">
      {isLoading
        ? <Loading />
        : (
            error
              ? "Error"
              : <PokemonListItem
                  pokemons={pokemons}
                  page={page}
                  size={size || 0}
                  registersPerPage={limit}
                  setPage={setPage}
                />
          )}
    </Container>
  )
}

export default Home
