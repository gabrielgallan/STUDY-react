import { produce } from "immer"
import type { Cycle } from "../../pages/Home"
import { ActionTypes } from "./actions"

export interface CycleState {
    cycles: Cycle[]
    activeCycleId: string | null
}

export type CyclesActions =
    | {
        type: typeof ActionTypes.ADD_NEW_CYCLE
        payload: { newCycle: Cycle }
    }
    | {
        type: typeof ActionTypes.INTERRUPT_CYCLE
    }
    | {
        type: typeof ActionTypes.FINISH_CYCLE
    }

export function cyclesReducers(state: CycleState, action: CyclesActions) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_CYCLE:
            return produce(state, draft => {
                draft.cycles.push(action.payload.newCycle)
                draft.activeCycleId = action.payload.newCycle.id
            })
        case ActionTypes.INTERRUPT_CYCLE: {
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null,
                    draft.cycles[currentCycleIndex].interruptedDate = new Date()
            })
        }
        case ActionTypes.FINISH_CYCLE: {
            const currentCycleIndex = state.cycles.findIndex((cycle) => {
                return cycle.id === state.activeCycleId
            })

            if (currentCycleIndex < 0) {
                return state
            }

            return produce(state, (draft) => {
                draft.activeCycleId = null,
                    draft.cycles[currentCycleIndex].finishedDate = new Date()
            })
        }
        default:
            return state
    }
}