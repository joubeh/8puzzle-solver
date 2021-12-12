import {useEffect, useState} from "react";
import LoadingScreen from "./LoadingScreen";
import IDS from '../algorithms/IDS'
import AStarRunner from '../algorithms/AStar'
import Result from "./Result";

const Solver = ({ blocks, algorithm }) => {
    const [result, setResult] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (algorithm === "IDS") {
                let res = IDS({
                    state: blocks,
                    depth: 1
                })
                setResult(res)
            }
            else if (algorithm === "AStar") {
                let res = AStarRunner({
                    state: blocks,
                    depth: 1
                })
                setResult(res)
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [algorithm, blocks]);

    return(
        <div>
            {
                result === false ?
                    <div>
                        <LoadingScreen/>
                    </div>
                    :
                    <Result result={result}/>
            }
        </div>
    )
}

export default Solver