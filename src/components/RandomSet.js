const RandomSet = ({ blocks, setBlocks, moveAbles, setMoveAbles, setSetterMode }) => {

    const fire = () => {
        // reset the current state to keep track of "d"
        setBlocks([
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8]
        ])
        setMoveAbles([1, 3])

        let changeCount = Math.floor(Math.random() * 5) + 3 // todo : limit
        let componentBlocks = JSON.parse(JSON.stringify(blocks))
        let componentMoveAbles = JSON.parse(JSON.stringify(moveAbles))
        let prev = null;

        for (let i=0; i<changeCount; i++){
            let next = componentMoveAbles[Math.floor(Math.random() * componentMoveAbles.length)]
            while (next === prev){
                next = componentMoveAbles[Math.floor(Math.random() * componentMoveAbles.length)]
            }
            prev = next
            let {newBlocks, newMoveAbles} = componentMove(next, componentBlocks, componentMoveAbles)
            componentBlocks = JSON.parse(JSON.stringify(newBlocks))
            componentMoveAbles = JSON.parse(JSON.stringify(newMoveAbles))
        }
        setBlocks(componentBlocks)
        setMoveAbles(componentMoveAbles)
        setSetterMode(1)
    }

    const componentMove = (block, componentBlocks, componentMoveAbles) => {
        let blockPosition, emptyPosition, blockIdx, emptyIdx;

        if (componentBlocks[0].includes(block)){
            blockPosition = 0
            blockIdx = componentBlocks[0].indexOf(block)
        } else if (componentBlocks[1].includes(block)){
            blockPosition = 1
            blockIdx = componentBlocks[1].indexOf(block)
        } else {
            blockPosition = 2
            blockIdx = componentBlocks[2].indexOf(block)
        }

        if (componentBlocks[0].includes(0)){
            emptyPosition = 0
            emptyIdx = componentBlocks[0].indexOf(0)
        } else if (componentBlocks[1].includes(0)){
            emptyPosition = 1
            emptyIdx = componentBlocks[1].indexOf(0)
        } else {
            emptyPosition = 2
            emptyIdx = componentBlocks[2].indexOf(0)
        }

        // update blocks
        let newBlocks = JSON.parse(JSON.stringify(componentBlocks))
        newBlocks[blockPosition][blockIdx] = 0
        newBlocks[emptyPosition][emptyIdx] = block

        // update moveAbles
        let newMoveAbles;
        if (blockPosition === 0 && blockIdx === 0){
            newMoveAbles = [
                newBlocks[0][1],
                newBlocks[1][0]
            ]
        } else if (blockPosition === 0 && blockIdx === 1){
            newMoveAbles = [
                newBlocks[0][0],
                newBlocks[0][2],
                newBlocks[1][1]
            ]
        } else if (blockPosition === 0 && blockIdx === 2){
            newMoveAbles = [
                newBlocks[0][1],
                newBlocks[1][2]
            ]
        } else if (blockPosition === 1 && blockIdx === 0){
            newMoveAbles = [
                newBlocks[0][0],
                newBlocks[1][1],
                newBlocks[2][0],
            ]
        } else if (blockPosition === 1 && blockIdx === 1){
            newMoveAbles = [
                newBlocks[0][1],
                newBlocks[1][0],
                newBlocks[1][2],
                newBlocks[2][1],
            ]
        } else if (blockPosition === 1 && blockIdx === 2){
            newMoveAbles = [
                newBlocks[0][2],
                newBlocks[1][1],
                newBlocks[2][2],
            ]
        } else if (blockPosition === 2 && blockIdx === 0){
            newMoveAbles = [
                newBlocks[1][0],
                newBlocks[2][1]
            ]
        } else if (blockPosition === 2 && blockIdx === 1){
            newMoveAbles = [
                newBlocks[2][0],
                newBlocks[1][1],
                newBlocks[2][2],
            ]
        } else{
            newMoveAbles = [
                newBlocks[1][2],
                newBlocks[2][1]
            ]
        }

        return {
            newBlocks,
            newMoveAbles
        }
    }

    return(
        <div>
            {
                fire()
            }
        </div>
    )
}

export default RandomSet