import Board from "./components/Board";
import {useEffect, useState} from "react";
import QuickSet from "./components/QuickSet";
import RandomSet from "./components/RandomSet";
import Solver from "./components/Solver";


function App() {
    const [blocks, setBlocks] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ])
    const [moveAbles, setMoveAbles] = useState([1, 3])
    const [solved, setSolved] = useState(true)
    const [setterMode, setSetterMode] = useState(1)
    const [isSolving, setIsSolving] = useState(false)
    const [algorithm, setAlgorithm] = useState(null)

    /* Goal test */
    useEffect(() => {
        if(JSON.stringify(blocks) === JSON.stringify([[0, 1, 2], [3, 4, 5], [6, 7, 8]])){
            if (!solved){
                setSolved(true)
            }
        } else {
            if (solved){
                setSolved(false)
            }
        }
    }, [blocks, solved])

    const getSetterComponentByMode = () => {
        switch (setterMode) {
            case 1:
                return <Board blocks={blocks} setBlocks={setBlocks} moveAbles={moveAbles} setMoveAbles={setMoveAbles} />
            case 2:
                return <RandomSet blocks={blocks} setBlocks={setBlocks} moveAbles={moveAbles} setMoveAbles={setMoveAbles} setSetterMode={setSetterMode} />
            case 3:
                return <QuickSet setBlocks={setBlocks} setMoveAbles={setMoveAbles} setSetterMode={setSetterMode} />
            default:
                return <div>Something went wrong please refresh the app</div>
        }
    }

    const getSetterModeButtonsClass = (button) => {
        if(button === setterMode){
            return "transition hover:bg-blue-800 py-2 px-5 bg-blue-500 text-center text-white rounded-xl shadow cursor-pointer"
        } else {
            return "transition hover:bg-gray-300 py-2 px-5 bg-gray-200 text-gray-500 border-2 border-gray-400 text-center rounded-xl shadow cursor-pointer"
        }
    }

    return (
        <div>
            {
                isSolving ?
                    null
                    :
                    <div>
                        <div className={"text-3xl text-center my-5 text-gray-600"}>
                            Set the puzzle
                        </div>
                        <div className={"grid grid-cols-3 gap-4 w-max mx-auto my-5"}>
                            <div
                                onClick={e => setSetterMode(1)}
                                className={getSetterModeButtonsClass(1)}
                            >Manual set</div>
                            <div
                                onClick={e => setSetterMode(2)}
                                className={getSetterModeButtonsClass(2)}
                            >Random set
                            </div>
                            <div
                                onClick={e => setSetterMode(3)}
                                className={getSetterModeButtonsClass(3)}
                            >Quick set</div>
                        </div>
                        <div className={"w-max mx-auto p-3"}>
                            {
                                getSetterComponentByMode()
                            }
                        </div>
                    </div>
            }
            {
                isSolving ?
                    <div>
                        <Solver blocks={blocks} algorithm={algorithm} />
                    </div>
                    :
                    (
                        solved ?
                            null
                            :
                            <div className={'w-max mx-auto flex'}>
                                <div
                                    onClick={e => {
                                        setAlgorithm("uninformed_search")
                                        setIsSolving(true)
                                    }}
                                    className={"mx-2 w-max transition hover:bg-blue-800 py-2 px-5 bg-blue-500 text-center text-white rounded-xl shadow cursor-pointer"}>
                                    Uninformed search solve
                                </div>
                                <div
                                    onClick={e => {
                                    }}
                                    className={"mx-2 w-max transition hover:bg-blue-800 py-2 px-5 bg-blue-500 text-center text-white rounded-xl shadow cursor-pointer"}>
                                    Informed search solve
                                </div>
                                <div
                                    onClick={e => {
                                    }}
                                    className={"mx-2 w-max transition hover:bg-blue-800 py-2 px-5 bg-blue-500 text-center text-white rounded-xl shadow cursor-pointer"}>
                                    Local search solve
                                </div>
                            </div>
                    )
            }
        </div>
    );
}

export default App;
