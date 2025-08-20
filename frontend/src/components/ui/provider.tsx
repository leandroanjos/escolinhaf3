"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"

type ProviderProps = {
  children: React.ReactNode
}

export function Provider(props: ProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      {props.children}
    </ChakraProvider>
  )
}
