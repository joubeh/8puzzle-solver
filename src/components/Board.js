import Block from "./Block";

const Board = ({ blocks, setBlocks, moveAbles, setMoveAbles }) => {

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

    return(
        <div className={"m-3 p-2 w-max bg-yellow-400 grid grid-cols-3 gap-2"}>
            {
                blocks[0].map(block => {
                    if (moveAbles.includes(block)){
                        return(
                            <div key={block} onClick={e => move(block)} className={"cursor-pointer"}>
                                <Block number={block}/>
                            </div>
                        )
                    }
                    return(
                        <div key={block} className={'cursor-not-allowed'}>
                            <Block number={block}/>
                        </div>
                    )
                })
            }
            {
                blocks[1].map(block => {
                    if (moveAbles.includes(block)){
                        return(
                            <div key={block} onClick={e => move(block)} className={"cursor-pointer"}>
                                <Block number={block}/>
                            </div>
                        )
                    }
                    return(
                        <div key={block} className={'cursor-not-allowed'}>
                            <Block number={block}/>
                        </div>
                    )
                })
            }
            {
                blocks[2].map(block => {
                    if (moveAbles.includes(block)){
                        return(
                            <div key={block} onClick={e => move(block)} className={"cursor-pointer"}>
                                <Block number={block}/>
                            </div>
                        )
                    }
                    return(
                        <div key={block} className={'cursor-not-allowed'}>
                            <Block number={block}/>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default Board