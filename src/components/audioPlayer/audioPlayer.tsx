import React, { useState, useRef, useEffect } from 'react'
import styles from "./audioPlayer.module.scss";
import { BsArrowLeftShort } from "react-icons/bs"
import { BsArrowRightShort } from "react-icons/bs"
import { FaPlay } from "react-icons/fa"
import { FaPause } from "react-icons/fa"

const AudioPlayer = () => {
    // state
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    // references
    const audioPlayer = useRef<HTMLAudioElement>(null);   // reference our audio component
    const progressBar = useRef<HTMLInputElement>(null);   // reference our progress bar
    const animationRef = useRef();  // reference the animation

    useEffect(() => {
        if(audioPlayer.current && progressBar.current) {
            const seconds = Math.floor(audioPlayer.current.duration);
            setDuration(seconds);
            progressBar.current.max = seconds.toString();
            console.log(audioPlayer?.current?.onloadedmetadata);
        }
    }, [audioPlayer?.current?.onloadedmetadata, audioPlayer?.current?.readyState]);

    const calculateTime = (secs: number) => {
        const minutes = Math.floor(secs / 60);
        const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        const seconds = Math.floor(secs % 60);
        const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
        return `${returnedMinutes}:${returnedSeconds}`;
    }

    const togglePlayPause = () => {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (!prevValue) {
            if(audioPlayer.current && animationRef.current) {
                audioPlayer.current.play();
                // @ts-ignore
                animationRef.current = requestAnimationFrame(whilePlaying)
            }
        } else {
            audioPlayer.current && audioPlayer.current.pause();
            // @ts-ignore
            cancelAnimationFrame(animationRef.current);
        }
    }

    const whilePlaying = () => {
        if(progressBar.current && audioPlayer.current) {
            progressBar.current.value = audioPlayer.current.currentTime.toString();
            changePlayerCurrentTime();
            // @ts-ignore
            animationRef.current = requestAnimationFrame(whilePlaying);
        }
    }

    const changeRange = () => {
        if(audioPlayer.current && progressBar.current) {
            audioPlayer.current.currentTime = Number(progressBar.current.value);
            changePlayerCurrentTime();
        }
    }

    const changePlayerCurrentTime = () => {
        if(progressBar.current) {
            progressBar.current.style.setProperty('--seek-before-width', `${Number(progressBar.current.value) / duration * 100}%`)
            setCurrentTime(Number(progressBar.current.value));
        }
    }

    const backThirty = () => {
        if(progressBar.current) {
            progressBar.current.value = Number(+progressBar.current.value - 30).toString(); //Шото за гранью моего понимания. Надеюсь, заработает
            changeRange();
        }
    }

    const forwardThirty = () => {
        if(progressBar.current) {
            progressBar.current.value = Number(+progressBar.current.value + 30).toString();
            changeRange();
        }
    }

    return (
        <div className={styles.audioPlayer}>
            <audio ref={audioPlayer} src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3" preload="metadata"/>
            <button className={styles.forwardBackward} onClick={backThirty}><BsArrowLeftShort /> 30</button>
            <button onClick={togglePlayPause} className={styles.playPause}>
                {isPlaying ? <FaPause /> : <FaPlay className={styles.play} />}
            </button>
            <button className={styles.forwardBackward} onClick={forwardThirty}>30 <BsArrowRightShort /></button>

            {/* current time */}
            <div className={styles.currentTime}>{calculateTime(currentTime)}</div>

            {/* progress bar */}
            <div>
                <input type="range" className={styles.progressBar} defaultValue="0" ref={progressBar} onChange={changeRange} />
            </div>

            {/* duration */}
            <div className={styles.duration}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </div>
    )
}

export default AudioPlayer;