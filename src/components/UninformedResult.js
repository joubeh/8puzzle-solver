import {AiOutlineArrowDown} from "react-icons/ai";

const UninformedResult = ({result}) => {
    return(
        <div>
            <div className={"w-max mx-auto mt-5 text-5xl text-gray-700"}>
                Solved!
            </div>
            <div className={"w-max mx-auto text-3xl text-gray-700 my-5"}>
                Cost : {result.foundOnDepth - 1}
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
                                                        className={"cursor-pointer transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
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
                                                        className={"cursor-pointer transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
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
                                                        className={"cursor-pointer transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
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

export default UninformedResult