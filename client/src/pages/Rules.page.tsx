import AppLayout from '@/components/layouts/App.layout'
import Group from '@/components/layouts/Group.layout'
import Stack from '@/components/layouts/Stack.layout'
import TextCard from '@/components/molecules/ComicCard'
import HeaderControls from '@/components/molecules/HeaderControls.molecule'
import ComicPage from '@/components/templates/ComicPage.template'

type Rules = 'basic' | '1v1' | 'gameplay'

export default function RulesPage({ rules }: { rules: Rules }) {
  const {
    w1,
    w2,
    wGap,
    rules: r,
  } = (() => {
    switch (rules) {
      case '1v1':
        return {
          w1: '1v1',
          w2: 'rules',
          wGap: 'gap-[20px]',
          rules: RULES['VERSUS'],
        }
      case 'gameplay':
        return {
          w1: 'Game',
          w2: 'Play',
          wGap: 'gap-0',
          rules: RULES['GAMEPLAY'],
        }
      default:
        return {
          w1: 'Basic',
          w2: 'Rules',
          wGap: 'gap-[20px]',
          rules: RULES['BASIC'],
        }
    }
  })()

  const headingTitle = (
    <Stack className="gap-0">
      <Group className="font-don stroked-2px sm:stroked-3px gap-[30px] text-[40px] text-white sm:text-[60px]">
        <p className="-mt-[40px] scale-0 animate-[pop-in_250ms_ease-in-out_forwards_850ms]">Don</p>
        <p className="scale-0 animate-[pop-in_250ms_ease-in-out_forwards_900ms]">Chameleone</p>
      </Group>
      <Group
        className={`stroked-3px -mt-[20px] sm:-mt-[30px] ${wGap} font-don text-[61px] sm:text-[92px]`}
      >
        <p className="text-hot-500 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_1000ms]">
          {w1}
        </p>
        <p className="text-hot-200 scale-0 animate-[pop-in_250ms_ease-in-out_forwards_1100ms]">
          {w2}
        </p>
      </Group>
    </Stack>
  )

  return (
    <ComicPage variant="bw" withoutDon>
      <AppLayout header={<HeaderControls />}>
        <Stack className="-my-[20px] mt-[150px] gap-[60px]">
          {headingTitle}
          <div className="flex grid-cols-2 flex-col items-center gap-[80px] md:grid md:[&>div:nth-child(even)]:top-[50%]">
            {r.map((rule, idx) => (
              <div
                key={rule.title}
                className="relative h-[300px] w-[80%] animate-[slide-in-opacity_250ms_ease-in-out_forwards] opacity-0 sm:w-[300px] lg:h-[300px] lg:w-[420px]"
                style={{ animationDelay: `${idx * 300}ms` }}
              >
                <TextCard bg={idx % 2 ? 'red' : 'blue'} className="h-full w-full">
                  <Stack className="stroked-2px md:stroked-3px h-full !items-start !justify-start gap-1 overflow-auto px-3 py-1 text-white sm:gap-4">
                    <p className="font-don text-[33px] sm:text-[50px]">
                      {idx + 1}. {rule.title}
                    </p>
                    <p className="font-don text-[23px] leading-[27px] sm:text-[35px] sm:leading-[42px]">
                      {rule.txt}
                    </p>
                  </Stack>
                </TextCard>
              </div>
            ))}
          </div>
        </Stack>
      </AppLayout>
    </ComicPage>
  )
}
const RULES = {
  BASIC: [
    {
      title: 'Rule 1',
      txt: 'Players must start the game with a minimum of three cards.',
    },
    {
      title: 'Rule 2',
      txt: 'A player wins by reaching 100 points first.',
    },
    {
      title: 'Rule 3',
      txt: 'Players take turns clockwise.',
    },
    {
      title: 'Rule 4',
      txt: 'Draw one card from the deck at the beginning of each turn.',
    },
    {
      title: 'Rule 5',
      txt: 'Players may only play one card per turn.',
    },
  ],
  VERSUS: [
    {
      title: 'Rule 1',
      txt: 'In a versus match, each player starts with 50 health points.',
    },
    {
      title: 'Rule 2',
      txt: 'Players can use special abilities once per turn.',
    },
    {
      title: 'Rule 3',
      txt: 'Versus matches have a time limit of 10 minutes.',
    },
    {
      title: 'Rule 4',
      txt: 'The player with the most health points at the end of the time limit wins.',
    },
    {
      title: 'Rule 5',
      txt: 'If both players reach 0 health simultaneously, the match is a draw.',
    },
  ],
  GAMEPLAY: [
    {
      title: 'Rule 1',
      txt: 'Players can trade one card with another player each turn.',
    },
    {
      title: 'Rule 2',
      txt: 'Certain cards have special effects; refer to the card descriptions for details.',
    },
    {
      title: 'Rule 3',
      txt: 'Players can form alliances but must break them at the start of their turn.',
    },
    {
      title: 'Rule 4',
      txt: 'A player can only have a maximum of 10 cards in their hand at any time.',
    },
    {
      title: 'Rule 5',
      txt: 'Players must announce "Uno" when they have one card left in their hand.',
    },
  ],
}
