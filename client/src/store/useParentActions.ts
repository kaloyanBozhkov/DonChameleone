import { create } from 'zustand'

type ParentActionsStore = {}

const useParentActions = create<ParentActionsStore>(() => ({}))

export default useParentActions
