import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import PlayCard from '@/components/organisms/PlayCard.organism'
import ComicPage from '@/components/templates/ComicPage.template'

export default function IndexPage() {
  return (
    <ComicPage>
      <AppLayout header={<HeaderControls />}>
        <Center>
          <PlayCard />
        </Center>
      </AppLayout>
    </ComicPage>
  )
}
