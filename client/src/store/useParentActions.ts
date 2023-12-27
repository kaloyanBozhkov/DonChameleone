import { create } from 'zustand'

type ParentActionsStore = {
  none: boolean
}

const useParentActions = create<ParentActionsStore>(() => ({ none: true }))

export default useParentActions
