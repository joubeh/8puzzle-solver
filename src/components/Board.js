import Block from "./Block";

const Board = ({blocks, moveAbles, move}) => {
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