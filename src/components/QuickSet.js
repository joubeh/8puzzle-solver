import {useState} from "react";

const QuickSet = ({ setBlocks, setMoveAbles, setSetterMode }) => {
    const [isChoosing, setIsChoosing] = useState(false)
    const [selectedBlock, setSelectedBlock] = useState(null)
    const [tmpBlocks, setTmpBlocks] = useState([
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ])
    const [availableNumbers, setAvailableNumbers] = useState([
        0, 1, 2, 3, 4, 5, 6, 7, 8
    ])

    const fixBlock = (number) => {
        let newTmpBlocks = JSON.parse(JSON.stringify(tmpBlocks))
        newTmpBlocks[selectedBlock[0]][selectedBlock[1]] = number
        setTmpBlocks(newTmpBlocks)

        let newAvailableNumbers = JSON.parse(JSON.stringify(availableNumbers))
        newAvailableNumbers.splice(newAvailableNumbers.indexOf(number), 1)
        setAvailableNumbers(newAvailableNumbers)

        setIsChoosing(false)
    }

    const fire = () => {
        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (tmpBlocks[i][j] === -1){
                    alert("Please set all blocks!")
                    reset()
                    return
                }
            }
        }

        setBlocks(tmpBlocks)
        let emptyPosition;
        let emptyIdx;

        for (let i=0; i<3; i++){
            for (let j=0; j<3; j++){
                if (tmpBlocks[i][j] === 0){
                    emptyPosition = i
                    emptyIdx = j
                    break
                }
            }
        }

        // update moveAbles
        if (emptyPosition === 0 && emptyIdx === 0){
            setMoveAbles([
                tmpBlocks[0][1],
                tmpBlocks[1][0]
            ])
        } else if (emptyPosition === 0 && emptyIdx === 1){
            setMoveAbles([
                tmpBlocks[0][0],
                tmpBlocks[0][2],
                tmpBlocks[1][1]
            ])
        } else if (emptyPosition === 0 && emptyIdx === 2){
            setMoveAbles([
                tmpBlocks[0][1],
                tmpBlocks[1][2]
            ])
        } else if (emptyPosition === 1 && emptyIdx === 0){
            setMoveAbles([
                tmpBlocks[0][0],
                tmpBlocks[1][1],
                tmpBlocks[2][0],
            ])
        } else if (emptyPosition === 1 && emptyIdx === 1){
            setMoveAbles([
                tmpBlocks[0][1],
                tmpBlocks[1][0],
                tmpBlocks[1][2],
                tmpBlocks[2][1],
            ])
        } else if (emptyPosition === 1 && emptyIdx === 2){
            setMoveAbles([
                tmpBlocks[0][2],
                tmpBlocks[1][1],
                tmpBlocks[2][2],
            ])
        } else if (emptyPosition === 2 && emptyIdx === 0){
            setMoveAbles([
                tmpBlocks[1][0],
                tmpBlocks[2][1]
            ])
        } else if (emptyPosition === 2 && emptyIdx === 1){
            setMoveAbles([
                tmpBlocks[2][0],
                tmpBlocks[1][1],
                tmpBlocks[2][2],
            ])
        } else{
            setMoveAbles([
                tmpBlocks[1][2],
                tmpBlocks[2][1]
            ])
        }

        reset()
        setSetterMode(1)
    }

    const reset = () => {
        setAvailableNumbers([
            0, 1, 2, 3, 4, 5, 6, 7, 8
        ])
        setTmpBlocks([
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ])
        setIsChoosing(false)
        setSelectedBlock(null)
    }

    return(
        <div>
            <div className={"w-max mx-auto"}>

                {
                    availableNumbers.length === 0 ?
                        <div
                            onClick={fire}
                            className={"text-center mb-3 text-xl bg-blue-500 text-white py-2 rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl transition cursor-pointer"}>
                            Set
                        </div>
                        :
                        null
                }

                {
                    availableNumbers.length === 9 ?
                        null
                        :
                        <div
                            onClick={reset}
                            className={"text-center mb-3 text-xl bg-red-500 text-white py-2 rounded-lg shadow-lg hover:bg-red-800 hover:shadow-xl transition cursor-pointer"}>
                            Reset
                        </div>
                }

                <div className={"m-3 w-max bg-gray-200 p-5 grid grid-cols-3 gap-2 rounded-lg border-2 border-gray-400"}>
                    {
                        tmpBlocks[0].map((block, idx) => {
                            return(
                                <div
                                    key={`${0}-${idx}`}
                                    onClick={e => {
                                        setSelectedBlock([0, idx])
                                        setIsChoosing(true)
                                    }}
                                    className={"cursor-pointer transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
                                    {
                                        block === -1 ?
                                            <span>X</span>
                                            :
                                            block
                                    }
                                </div>
                            )
                        })
                    }
                    {
                        tmpBlocks[1].map((block, idx) => {
                            return(
                                <div
                                    key={`${1}-${idx}`}
                                    onClick={e => {
                                        setSelectedBlock([1, idx])
                                        setIsChoosing(true)
                                    }}
                                    className={"cursor-pointer transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
                                    {
                                        block === -1 ?
                                            <span>X</span>
                                            :
                                            block
                                    }
                                </div>
                            )
                        })
                    }
                    {
                        tmpBlocks[2].map((block, idx) => {
                            return(
                                <div
                                    key={`${2}-${idx}`}
                                    onClick={e => {
                                        setSelectedBlock([2, idx])
                                        setIsChoosing(true)
                                    }}
                                    className={"cursor-pointer transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
                                    {
                                        block === -1 ?
                                            <span>X</span>
                                            :
                                            block
                                    }
                                </div>
                            )
                        })
                    }
                </div>


                {
                    isChoosing ?
                        <div className={"grid grid-cols-3 gap-2"}>
                            {
                                [0, 1, 2, 3, 4, 5, 6, 7, 8].map(number => {
                                    if (availableNumbers.includes(number)) {
                                        return (
                                            <div
                                                key={number}
                                                onClick={e => {
                                                    fixBlock(number)
                                                }}
                                                className={"transition cursor-pointer text-center p-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-800 hover:shadow-xl"}>
                                                {number}
                                            </div>
                                        );
                                    } else {
                                        return(
                                            <div
                                                key={number}
                                                className={"transition cursor-not-allowed text-center p-2 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-800 hover:shadow-xl"}>
                                                {number}
                                            </div>
                                        );
                                    }
                                })
                            }
                        </div>
                        :
                        null
                }
            </div>
            <div className={"text-center text-gray-700 mt-2"}>
                <div>Careful when using "Quick set", Half of the starting states are not going to be solved!</div>
                <div>We recommended to use either "Manual set" or "Random set" to make sure the puzzle can be solved.</div>
            </div>
        </div>
    );
}

export default QuickSet