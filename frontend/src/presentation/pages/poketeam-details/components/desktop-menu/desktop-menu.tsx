import React, { useState } from "react"
import { Button, keyframes, Stack } from "@chakra-ui/react"

import {
  FiChevronRight,
  FiChevronLeft,
  FiCalendar
} from "react-icons/fi"

const forwardAnimation = keyframes`
  from {
    width: 200px;
  }
  to {
    width: 68px;
  }
`

const reverseAnimation = keyframes`
  from {
    width: 68px;
  }
  to {
    width: 200px;
  }
`

const DesktopMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Stack
      h="100vh"
      backgroundColor="#FFF"
    >
      <Stack
        {...{
          position: "sticky",
          top: 0
        }}
      >
          <Button
            aria-label="Item 1"
            size="lg"
            colorScheme="blue"
            variant="ghost"
            borderRadius={0}
            justifyContent="left"
            iconSpacing={8}
            leftIcon={<FiCalendar />}
            css={{
              overflowX: "hidden",
              animation: isOpen
                ? `${forwardAnimation} 0.2s linear forwards`
                : `${reverseAnimation} 0.2s linear forwards`
            }}
          >
            Item 1
          </Button>
          <Button
            aria-label="Item 3"
            size="lg"
            justifyContent="left"
            iconSpacing={8}
            leftIcon={<FiCalendar />}
            css={{
              overflowX: "hidden",
              animation: isOpen
                ? `${forwardAnimation} 0.2s linear forwards`
                : `${reverseAnimation} 0.2s linear forwards`
            }}
          >
            Item 2
          </Button>
          <Button
            aria-label="Item 3"
            size="lg"
            justifyContent="left"
            iconSpacing={8}
            leftIcon={<FiCalendar />}
            css={{
              overflowX: "hidden",
              animation: isOpen
                ? `${forwardAnimation} 0.2s linear forwards`
                : `${reverseAnimation} 0.2s linear forwards`
            }}
          >
            Item 3
          </Button>
          <Button
            aria-label="Item 4"
            size="lg"
            justifyContent="left"
            iconSpacing={8}
            leftIcon={<FiCalendar />}
            css={{
              overflowX: "hidden",
              animation: isOpen
                ? `${forwardAnimation} 0.2s linear forwards`
                : `${reverseAnimation} 0.2s linear forwards`
            }}
          >
            Item 4
          </Button>
          <Button
            aria-label="Expand"
            css={{
              overflowX: "hidden",
              animation: isOpen
                ? `${forwardAnimation} 0.2s linear forwards`
                : `${reverseAnimation} 0.2s linear forwards`
            }}
            leftIcon={isOpen ? <FiChevronLeft /> : <FiChevronRight />}
            onClick={() => setIsOpen(!isOpen)}
          />
      </Stack>
    </Stack>
  )
}

export default DesktopMenu
