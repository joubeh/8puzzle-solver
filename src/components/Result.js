import {AiOutlineArrowDown} from "react-icons/ai";

const Result = ({ result, execTime, algorithm }) => {
    return(
        <div>
            <div className={"w-max mx-auto mt-5 text-5xl text-gray-700"}>
                Solved!
            </div>
            <div className={"w-max mx-auto text-2xl text-gray-700 my-5 text-center"}>
                <div>
                    Cost : {result.foundOnDepth - 1}
                </div>
                <div>
                    Execution time : {execTime} milliseconds
                </div>
                <div>
                    Solver algorithm : {algorithm}
                </div>
            </div>
            <div className={"w-max mx-auto"}>
                {
                    result.steps.map((step, floor) => {
                        return(
                            <div
                                key={floor}
                            >
                                <div
                                    className={"m-3 w-max bg-gray-200 p-5 grid grid-cols-3 gap-2 rounded-lg border-2 border-gray-400"}>
                                    {
                                        step[0].map((block, idx) => {
                                            if (block === 0){
                                                return(
                                                    <div key={`${0}-${idx}`}></div>
                                                )
                                            } else {
                                                return(
                                                    <div
                                                        key={`${0}-${idx}`}
                                                        className={"shadow-lg rounded-lg p-5 bg-blue-500 text-center text-white"}>
                                                        {block}
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    {
                                        step[1].map((block, idx) => {
                                            if (block === 0){
                                                return(
                                                    <div key={`${1}-${idx}`}></div>
                                                )
                                            } else {
                                                return(
                                                    <div
                                                        key={`${1}-${idx}`}
                                                        className={"shadow-lg rounded-lg p-5 bg-blue-500 text-center text-white"}>
                                                        {block}
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                    {
                                        step[2].map((block, idx) => {
                                            if (block === 0){
                                                return(
                                                    <div key={`${2}-${idx}`}></div>
                                                )
                                            } else {
                                                return(
                                                    <div
                                                        key={`${2}-${idx}`}
                                                        className={"shadow-lg rounded-lg p-5 bg-blue-500 text-center text-white"}>
                                                        {block}
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                {
                                    floor === (result.foundOnDepth - 1) ?
                                        null
                                        :
                                        <div className={"w-max mx-auto text-gray-700"}>
                                            <AiOutlineArrowDown />
                                        </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default Result