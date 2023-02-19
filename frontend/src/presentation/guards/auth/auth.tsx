import React, { type ReactNode, useState, useEffect } from 'react'
import { Loading } from '@/presentation/components'
import { Navigate, useLocation } from 'react-router-dom'
import { useAppSelector } from '@/main/providers'
import { type AuthenticationState } from '@/data/protocols/state-manager'
import { type LoadSession } from '@/domain/usecases'
import { makeSignin } from '@/main/factories/pages'

interface AuthGuardProps {
  children: ReactNode
  loadSession: LoadSession
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ loadSession, children }) => {
  const {
    isAuthenticated,
    isInitialized
  }: AuthenticationState = useAppSelector((state) => state.authentication)
  const { pathname } = useLocation()
  const [requestedLocation, setRequestedLocation] = useState<string | null>(null)

  useEffect(() => {
    async function init (): Promise<void> {
      await loadSession.load()
    }

    init()
  }, [])

  if (!isInitialized) {
    return <Loading />
  }

  if (!isAuthenticated) {
    if (pathname !== requestedLocation) {
      setRequestedLocation(pathname)
    }

    return makeSignin({})
  }

  if (requestedLocation && pathname !== requestedLocation) {
    setRequestedLocation(null)
    return <Navigate to={requestedLocation} />
  }

  return <>{children}</>
}
