'use client'

import React, { useState, useEffect } from 'react'

interface ClientOnly {
  children: React.ReactNode
}

const ClientOnly: React.FC<ClientOnly> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) return null

  return <>{children}</>
}

export default ClientOnly

/* TODO:  Hydration errors result from a mismatch between server- and client-rendered markup and differences in component states. Specifically, Next.js hydration errors arise when you wrap your components or HTML elements with an improper tag ! */
