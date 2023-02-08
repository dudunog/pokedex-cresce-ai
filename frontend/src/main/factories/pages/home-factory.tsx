import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"

const Home: React.FC = Loadable(lazy(async () => import("@/presentation/pages/home/home")))

export const makeHome: React.FC = () => {
  return (
    <Home />
  )
}
