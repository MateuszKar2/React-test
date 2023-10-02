import { useRef } from "react"



export const Player = ({source}) => {
    const  playerRef = useRef();
    const play = () => playerRef.current.play();
    const pause = () => playerRef.current.pause();

    return (
        <div>
            <video ref={playerRef} src={source}>
            Sorry, your browser does not support embedded videos.
            </video>
            <div>
                <button onClick={play}>play</button>
                <button onClick={pause}>pause</button>
            </div>
        </div>
    )
}
