import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function AboutPage() {
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center>
          <p>WASSUP!!!!</p>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
