import { createContext, useState, type ReactNode, useReducer, useEffect } from "react"
import type { Cycle } from "../pages/Home"
import { cyclesReducers } from "../reducers/cycles/reducer"
import { addNewCycleAction, finishCurrentCycleAction, interruptCurrentCycleAction } from "../reducers/cycles/actions"
import { differenceInSeconds } from "date-fns"

interface CyclesContextType {
    cycles: Cycle[]
    activeCycle: Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    createNewCycle: (data: CreateNewCycle) => void
    interruptCurrentCycle: () => void
    setSeconds: (seconds: number) => void
    finishCurrentCycle: () => void
}

interface CreateNewCycle {
    task: string
    minutesAmount: number
}

export const CyclesContext = createContext({} as CyclesContextType)

interface CyclesContextProviderProps {
    children: ReactNode
}

export function CyclesContextProvider({ children }: CyclesContextProviderProps) {
    const initialState = {
        cycles: [],
        activeCycleId: null,
    }

    const [cyclesState, dispatch] = useReducer(
        cyclesReducers,
        initialState,
        (initialState) => {
            const storedStateJSON = localStorage.getItem('@ignite-timer:cycle-state-1.0.0')

            if (storedStateJSON) return JSON.parse(storedStateJSON)

            return initialState
        })

    const activeCycle = cyclesState.cycles.find((cycle) => cycle.id === cyclesState.activeCycleId)

    const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(() => {
        if (activeCycle) {
            return differenceInSeconds(
                new Date(),
                new Date(activeCycle.startDate)
            )
        }

        return 0
    })


    function createNewCycle(data: CreateNewCycle) {
        const newCycle: Cycle = {
            id: String(new Date().getTime()),
            startDate: new Date(),
            ...data
        }

        dispatch(addNewCycleAction(newCycle))
    }

    function interruptCurrentCycle() {
        dispatch(interruptCurrentCycleAction())
    }

    function finishCurrentCycle() {
        dispatch(finishCurrentCycleAction())
    }

    function setSeconds(seconds: number) {
        setAmountSecondsPassed(seconds)
    }

    useEffect(() => {
        const stateJSON = JSON.stringify(cyclesState)

        localStorage.setItem('@ignite-timer:cycle-state-1.0.0', stateJSON)
    }, [cyclesState])

    return (
        <CyclesContext.Provider
            value={{
                cycles: cyclesState.cycles,
                activeCycle,
                activeCycleId: cyclesState.activeCycleId,
                amountSecondsPassed,
                createNewCycle,
                interruptCurrentCycle,
                setSeconds,
                finishCurrentCycle
            }}
        >
            {children}
        </CyclesContext.Provider>
    )
}