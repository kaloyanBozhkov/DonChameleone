import { useRef } from 'react'

import { getServerAuthSession } from '@/server/auth'

import { type GetServerSidePropsContext, type InferGetServerSidePropsType } from 'next'
import Head from 'next/head'

import useIframeControls from '@/hooks/client/useIframeControls'
import useLocationHash from '@/hooks/client/useLocationHash'
import useSessionSync, { getUserObjFromSession } from '@/hooks/client/useSessionSync'
import { IFRAME_ORIGIN } from '@/iframe/helpers'

export default function Home({ session }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { iframeRef, sendEvent } = useIframeControls()
  useLocationHash({ iframeRef })
  useSessionSync({ sendEvent })

  const initialUserSession = useRef(getUserObjFromSession({ data: session }))

  return (
    <>
      <Head>
        <title>DonChameleone</title>
        <meta name="description" content="Social game of the year!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <iframe
        ref={iframeRef}
        src={`${IFRAME_ORIGIN}?initialUserSession=${JSON.stringify(initialUserSession.current)}`}
        className="h-full w-full"
      />
    </>
  )
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return { props: { session: await getServerAuthSession(ctx) } }
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
