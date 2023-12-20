import AppLayout from '@/components/layouts/App.layout'
import Center from '@/components/layouts/Center.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

type Rules = 'basic' | '1v1' | 'gameplay'

export default function RulesPage({ rules }: { rules: Rules }) {
  const { w1, w2, wGap } = (() => {
    switch (rules) {
      case '1v1':
        return { w1: '1v1', w2: 'rules', wGap: 'gap-[20px]' }
      case 'gameplay':
        return {
          w1: 'Game',
          w2: 'Play',
          wGap: 'gap-0',
        }
      default:
        return {
          w1: 'Basic',
          w2: 'Rules',
          wGap: 'gap-[20px]',
        }
    }
  })()

  const headingTitle = (
    <Stack className="gap-0">
      <Group className="stroked-3px gap-[30px] font-don text-[60px] text-white">
        <p className="-mt-[40px] scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms]">Don</p>
        <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms]">Chameleone</p>
      </Group>
      <Group className={`stroked-3px -mt-[30px] ${wGap} font-don text-[92px]`}>
        <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_1000ms] text-hot-500">
          {w1}
        </p>
        <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_1100ms] text-hot-200">
          {w2}
        </p>
      </Group>
    </Stack>
  )

  return (
    <ComicPage variant="bw">
      <AppLayout header={<HeaderControls />}>
        <Center className="-mt-[35px]">{headingTitle}</Center>
      </AppLayout>
    </ComicPage>
  )
}
