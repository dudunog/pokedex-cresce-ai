import React from "react"
import { PokemonLogo } from "@/presentation/components"
import NavItem from "./nav-item"
import {
  Box,
  type BoxProps,
  Flex,
  useColorModeValue,
  CloseButton
} from "@chakra-ui/react"
import { TbPokeball } from 'react-icons/tb'
import { RiPlayListAddFill } from 'react-icons/ri'
import { type IconType } from "react-icons"

interface LinkItemProps {
  name: string
  icon: IconType
}

const LinkItems: LinkItemProps[] = [
  { name: 'Pokemons', icon: TbPokeball },
  { name: 'Meus times', icon: RiPlayListAddFill }
]

interface SidebarContentProps extends BoxProps {
  onClose: () => void
}

const SidebarContent: React.FC<SidebarContentProps> = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex
        h="20"
        mx="8"
        alignItems="center"
        justifyContent="space-between"
      >
        <PokemonLogo />
        <CloseButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onClose}
        />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  )
}

export default SidebarContent
