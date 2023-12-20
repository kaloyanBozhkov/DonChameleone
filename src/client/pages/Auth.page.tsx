import Center from '@/components/layouts/Center.layout'
import PlayCard from '@/components/organisms/PlayCard.organism'
import ComicPage from '@/components/templates/ComicPage.template'

export default function AuthPage() {
  return (
    <ComicPage>
      <Center>
        <PlayCard />
      </Center>
    </ComicPage>
  )
}
