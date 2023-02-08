import React from "react"
import ReactDOM from "react-dom/client"
import { Router } from "@/presentation/components"
import { ChakraProvider } from "@chakra-ui/react"

ReactDOM.createRoot(document.getElementById("main") as HTMLElement).render(
  <ChakraProvider>
    <Router />
  </ChakraProvider>
)
