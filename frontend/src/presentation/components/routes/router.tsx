import React from "react"
import {
  makeHome,
  makeMyTeams,
  makePokemonDetails
} from "@/main/factories/pages"
import { MainLayout } from "@/presentation/layouts"
import { AuthGuard } from "@/presentation/guards"
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom"
import { makeRemoteLoadSession } from "@/main/factories/usecases"

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={(
          <AuthGuard loadSession={makeRemoteLoadSession()}>
            <MainLayout />
          </AuthGuard>
        )}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={makeHome({})} />
          <Route path="/pokemon/:id" element={makePokemonDetails({})} />
          <Route path="/my-teams" element={makeMyTeams({})} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
