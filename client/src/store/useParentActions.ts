import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'

import env from '@/env'

type ParentActionsStore = {
  none: boolean
}

const useParentActions = create<ParentActionsStore>(() => ({ none: true }))

export default useParentActions

if (env.VERCEL_ENV === 'development') mountStoreDevtool('useParentActions', useParentActions)
