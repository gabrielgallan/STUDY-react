import type { Cycle } from "../../pages/Home";

export const ActionTypes = {
    ADD_NEW_CYCLE: 'ADD_NEW_CYCLE',
    INTERRUPT_CYCLE: 'INTERRUPT_CYCLE',
    FINISH_CYCLE: 'FINISH_CYCLE',
} as const

export function addNewCycleAction(newCycle: Cycle) {
    return {
        type: ActionTypes.ADD_NEW_CYCLE,
        payload: {
            newCycle
        }
    }
}

export function interruptCurrentCycleAction(): { type: typeof ActionTypes.INTERRUPT_CYCLE } {
    return { type: ActionTypes.INTERRUPT_CYCLE }
}

export function finishCurrentCycleAction(): { type: typeof ActionTypes.FINISH_CYCLE } {
    return { type: ActionTypes.FINISH_CYCLE }
}