import MainLayout from '@/components/layouts/Main.layout'

export default function IndexPage() {
  return (
    <MainLayout>
      <p className="font-don something-new-sm stroked-2px stroke-black text-[35px] text-white">
        We’ve sent you a sign in link to email@addr.com  Click the link we’ve sent you to finish
        your sign in.
      </p>
    </MainLayout>
  )
}
