import React from "react"
import { type PokemonDetailsModel } from "@/domain/models"
import { Link } from "react-router-dom"
import {
  Box,
  Heading,
  Image,
  SimpleGrid,
  Tag,
  Text
} from "@chakra-ui/react"
import { POKEMON_TYPES } from "./types/pokemon-types-colors"
import { Tags } from "@/presentation/components"
// import ArticleImage from "@/presentation/assets/article.png"

interface PokemonItemProps {
  pokemon: PokemonDetailsModel
}

const PokemonItem: React.FC<PokemonItemProps> =
  ({ pokemon }: PokemonItemProps) => {
    const pokemonColor = POKEMON_TYPES[pokemon.types[0].type.name]

    return (
      <SimpleGrid>
        <Box
          w="100%"
          padding={5}
          backgroundColor={`${pokemonColor}.50`}
          borderRadius={20}
        >
          <Tag
            fontWeight="bold"
            colorScheme={pokemonColor}
          >
            {pokemon.id}
          </Tag>
          <Box borderRadius="lg" overflow="hidden">
            <Link to={`/pokemon/${pokemon.id}`}>
              <Image
                maxH={160}
                transform="scale(1.0)"
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt={pokemon.name}
                objectFit="contain"
                width="100%"
                height="100%"
                transition="0.3s ease-in-out"
                loading="lazy"
                _hover={{
                  transform: "scale(1.05)"
                }}
              />
            </Link>
          </Box>
          <Box
            py={1}
            pb={3}
            maxW={210}
            display="flex"
            justifyContent="center"
          >
            <Link to={`/pokemon/${pokemon.id}`}>
              <Heading size="md" color="blackAlpha.700">
                <Text casing="capitalize" textAlign="center">
                  {pokemon.name}
                </Text>
              </Heading>
            </Link>
          </Box>
          <Box display="flex" justifyContent="center">
            <Tags
              tags={pokemon.types.map(c => {
                return {
                  name: c.type.name,
                  colorScheme: pokemonColor
                }
              })}
            />
          </Box>
        </Box>
      </SimpleGrid>
    )
  }

export default PokemonItem
