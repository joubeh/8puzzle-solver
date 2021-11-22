import Board from "./components/Board";
import {useEffect, useState} from "react";
import QuickSet from "./components/QuickSet";
import RandomSet from "./components/RandomSet";

function App() {
    const [blocks, setBlocks] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8]
    ])
    const [moveAbles, setMoveAbles] = useState([1, 3])
    const [solved, setSolved] = useState(true)

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

    return (
        <div>
            <Board blocks={blocks} setBlocks={setBlocks} moveAbles={moveAbles} setMoveAbles={setMoveAbles} />
            <RandomSet blocks={blocks} setBlocks={setBlocks} moveAbles={moveAbles} setMoveAbles={setMoveAbles} />
            <QuickSet setBlocks={setBlocks} setMoveAbles={setMoveAbles} />
        </div>
    );
}

export default App;
