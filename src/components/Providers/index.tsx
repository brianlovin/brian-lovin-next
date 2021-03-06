import * as React from 'react'
import Fathom from './Fathom'
import SEO from './SEO'
import { createClient, LiveblocksProvider } from '@liveblocks/react'

interface Props {
  children?: any
}

const client = createClient({
  authEndpoint: '/api/auth',
})

export default function Providers({ children }: Props) {
  return (
    <LiveblocksProvider client={client}>
      <SEO />
      <Fathom />

      {children}
    </LiveblocksProvider>
  )
}
