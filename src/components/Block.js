const Block = ({number}) => {
    if (number === 0){
        return(
            <div></div>
        );
    } else {
        return(
            <div className={"transition shadow-lg rounded p-5 bg-indigo-500 hover:bg-indigo-800 hover:shadow-xl text-center text-white"}>
                {number}
            </div>
        );
    }
}

export default Block