import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"

const MyTeams: React.FC = Loadable(lazy(async () => import("@/presentation/pages/my-teams/my-teams")))

export const makeMyTeams: React.FC = () => {
  return (
    <MyTeams />
  )
}
