const Block = ({number}) => {
    if (number === 0){
        return(
            <div></div>
        );
    } else {
        return(
            <div className={"transition shadow-lg rounded-lg p-5 bg-blue-500 hover:bg-blue-800 hover:shadow-xl text-center text-white"}>
                {number}
            </div>
        );
    }
}

export default Block