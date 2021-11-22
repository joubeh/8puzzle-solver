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

    // useEffect(() => {
    //     console.log(`problem status : ${solved}`)
    // }, [solved])

    // useEffect(() => {
    //     console.log(moveAbles)
    // }, [moveAbles])

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

    const move = (block) => {
        let blockPosition, emptyPosition, blockIdx, emptyIdx;

        if (blocks[0].includes(block)){
            blockPosition = 0
            blockIdx = blocks[0].indexOf(block)
        } else if (blocks[1].includes(block)){
            blockPosition = 1
            blockIdx = blocks[1].indexOf(block)
        } else {
            blockPosition = 2
            blockIdx = blocks[2].indexOf(block)
        }

        if (blocks[0].includes(0)){
            emptyPosition = 0
            emptyIdx = blocks[0].indexOf(0)
        } else if (blocks[1].includes(0)){
            emptyPosition = 1
            emptyIdx = blocks[1].indexOf(0)
        } else {
            emptyPosition = 2
            emptyIdx = blocks[2].indexOf(0)
        }

        // update blocks
        let newBlocks = JSON.parse(JSON.stringify(blocks))
        newBlocks[blockPosition][blockIdx] = 0
        newBlocks[emptyPosition][emptyIdx] = block
        setBlocks(newBlocks)

        // update moveAbles
        if (blockPosition === 0 && blockIdx === 0){
            setMoveAbles([
                newBlocks[0][1],
                newBlocks[1][0]
            ])
        } else if (blockPosition === 0 && blockIdx === 1){
            setMoveAbles([
                newBlocks[0][0],
                newBlocks[0][2],
                newBlocks[1][1]
            ])
        } else if (blockPosition === 0 && blockIdx === 2){
            setMoveAbles([
                newBlocks[0][1],
                newBlocks[1][2]
            ])
        } else if (blockPosition === 1 && blockIdx === 0){
            setMoveAbles([
                newBlocks[0][0],
                newBlocks[1][1],
                newBlocks[2][0],
            ])
        } else if (blockPosition === 1 && blockIdx === 1){
            setMoveAbles([
                newBlocks[0][1],
                newBlocks[1][0],
                newBlocks[1][2],
                newBlocks[2][1],
            ])
        } else if (blockPosition === 1 && blockIdx === 2){
            setMoveAbles([
                newBlocks[0][2],
                newBlocks[1][1],
                newBlocks[2][2],
            ])
        } else if (blockPosition === 2 && blockIdx === 0){
            setMoveAbles([
                newBlocks[1][0],
                newBlocks[2][1]
            ])
        } else if (blockPosition === 2 && blockIdx === 1){
            setMoveAbles([
                newBlocks[2][0],
                newBlocks[1][1],
                newBlocks[2][2],
            ])
        } else{
            setMoveAbles([
                newBlocks[1][2],
                newBlocks[2][1]
            ])
        }
    }

    return (
        <div>
            <Board blocks={blocks} moveAbles={moveAbles} move={move} />
            <RandomSet blocks={blocks} setBlocks={setBlocks} moveAbles={moveAbles} setMoveAbles={setMoveAbles} />
            <QuickSet setBlocks={setBlocks} setMoveAbles={setMoveAbles} />
        </div>
    );
}

export default App;
