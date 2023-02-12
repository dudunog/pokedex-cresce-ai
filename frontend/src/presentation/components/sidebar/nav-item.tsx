import React, { type ReactNode } from "react"
import { Flex, type FlexProps, Link, Icon } from "@chakra-ui/react"
import { type IconType } from "react-icons"

interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactNode
}

const NavItem: React.FC<NavItemProps> =
  ({ icon, children, ...rest }) => {
    return (
      <Link
        href="#"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
      >
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white'
          }}
          {...rest}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white'
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Link>
    )
  }

export default NavItem
