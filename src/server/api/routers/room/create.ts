import { protectedProcedure } from '@/server/api/trpc'

import { z } from 'zod'

import { GAME_PHASE } from '@prisma/client'

import { isCardPackOwner } from '../../common'

export const create = protectedProcedure
  .input(z.object({ cardPackId: z.string() }))
  .mutation(async ({ ctx: { prisma, session }, input: { cardPackId } }) => {
    await isCardPackOwner(prisma, session.user.id, cardPackId)

    const { id, name } = await prisma.room.create({
      data: {
        name: getRoomName(),
        cardPackId,
        phase: GAME_PHASE.LOBBY,
      },
      select: {
        name: true,
        id: true,
      },
    })

    const { id: playSessionId } = await prisma.playSession.create({
      data: {
        roomId: id,
        userId: session.user.id,
        isOwner: true,
      },
      select: {
        id: true,
      },
    })

    return { roomName: name, roomId: id, playSessionId }
  })

const getRoomName = () => {
  const randomIndex1 = Math.floor(Math.random() * WORDS.length),
    randomIndex2 = Math.floor(Math.random() * WORDS.length)

  return `${WORDS[randomIndex1]} ${WORDS[randomIndex2]}`
}

const WORDS = [
  'cat',
  'dog',
  'bat',
  'frong',
  'jog',
  'willy',
  'smirk',
  'jazz',
  'flub',
  'blip',
  'gizmo',
  'quack',
  'wham',
  'bop',
  'zing',
  'mooch',
  'quokk',
  'snub',
  'fizz',
  'jinx',
  'quop',
  'glow',
  'vex',
  'zany',
  'blow',
  'hush',
  'dork',
  'quip',
  'skit',
  'plonk',
  'snip',
  'clam',
  'swag',
  'buzz',
  'flop',
  'gulp',
  'gawk',
  'jive',
  'lick',
  'miff',
  'nix',
  'peek',
  'bunk',
  'plop',
  'quib',
  'quip',
  'skip',
  'vamp',
  'yack',
  'zest',
  'cozy',
  'dozy',
  'flip',
  'jolt',
  'kelp',
  'lurk',
  'mink',
  'noop',
  'plow',
  'ramp',
  'scum',
  'twit',
  'wimp',
  'zaps',
  'blur',
  'claw',
  'fuzz',
  'glop',
  'puff',
  'jaws',
  'quiz',
  'vibe',
  'muck',
  'whiz',
  'yelp',
  'blat',
  'clot',
  'flap',
  'junk',
  'quay',
  'swig',
  'flux',
  'jazz',
  'quip',
  'zing',
]
