import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

export default function RuleBookPage() {
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center>
          <p>Hello world</p>
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
