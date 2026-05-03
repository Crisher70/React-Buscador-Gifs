
import { useState } from 'react'


const useCounter = (initialValue: number = 10) => {
    const [counter, setCounter] = useState(initialValue)

    const handleAdd = () => {
        setCounter(counter + 1)
    }

    const handleSubstract = () => {
        setCounter((prevState) => prevState -1)
    }

    const handleReset = () => {
        setCounter(initialValue)
    }

    return {
        //values
        counter,

        //methods /actions
        handleAdd,
        handleSubstract,
        handleReset
    }
}

export default useCounter
