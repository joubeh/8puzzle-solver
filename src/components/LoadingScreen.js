import loadingGif from '../assets/loading-gif.gif';


const LoadingScreen = () => {
    return(
        <div className={"text-center p-5 w-max mx-auto"}>
            <img src={loadingGif} alt="loading..." />
            <div className={"text-5xl text-gray-700"}>
                Processing...
            </div>
        </div>
    )
}

export default LoadingScreen