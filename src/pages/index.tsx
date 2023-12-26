import Head from 'next/head'

import { env } from '@/env'
import useIframeControls from '@/hooks/client/useIframeControls'
import useLocationHash from '@/hooks/client/useLocationHash'

export default function Home() {
  const { iframeRef } = useIframeControls()

  useLocationHash({ iframeRef })

  return (
    <>
      <Head>
        <title>DonChameleone</title>
        <meta name="description" content="Social game of the year!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        ref={iframeRef}
        src={
          env.NEXT_PUBLIC_VERCEL_ENV === 'development'
            ? 'http://localhost:8080'
            : '/dist/client/don-game.html'
        }
        className="h-full w-full"
      />
    </>
  )
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession()

//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   )

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   )
// }