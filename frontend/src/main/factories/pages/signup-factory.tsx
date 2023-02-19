import React, { lazy } from "react"
import { Loadable } from "@/presentation/components"

const Signup: React.FC = Loadable(lazy(async () => import("@/presentation/pages/signup/signup")))

export const makeSignup: React.FC = () => {
  return (
    <Signup />
  )
}
