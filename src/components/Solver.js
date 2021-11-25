import {useEffect, useState} from "react";
import LoadingScreen from "./LoadingScreen";
import IDS from '../algorithms/IDS'
import UninformedResult from "./UninformedResult";

const Solver = ({ blocks, algorithm }) => {
    const [result, setResult] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (algorithm === "uninformed_search") {
                let res = IDS({
                    state: blocks,
                    depth: 1
                })
                setResult(res)
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [algorithm, blocks]);

    const showResult = () => {
        switch (algorithm) {
            case "uninformed_search":
                return <UninformedResult result={result} />
            default:
                return null
        }
    }

    return(
        <div>
            {
                result === false ?
                    <div>
                        <LoadingScreen/>
                    </div>
                    :
                    showResult()
            }
        </div>
    )
}

export default Solver