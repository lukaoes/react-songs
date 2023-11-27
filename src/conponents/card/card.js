import styled, { css } from "styled-components";
import { Button } from "../buttons/buttons";
import { useState, useEffect } from "react";
import ProgressBar from "../progressBar/progressBar";

const Title = styled.h2`
    font-size:  18px;
    line-height: 1.5rem;
    padding: 0 0 5px 0;
    color: #A238FF;
    font-weight: bold;
    letter-spacing: 2px; 
    margin: 2px 0;
`

const Text = styled.span`
    font-size: 14px;
    color: #0f0d13;

    ${(props) =>
    (props.small &&
        css`
		    font-size: 12px;
	      `)}
`

const SongDesc = styled.div`
    width: 250px;
    height: 500px;
    margin: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    background: rgba(162,56,255, 0.2);
    ${(props) =>
    (props.small &&
        css`
            width: 238px;
            height: 230px;
            border: 1px solid #ccc;
            margin: 0;
            padding: 5px;
            background: #fff;
        `)}
`


const Card = (props) => {
    const songList = props.item;
    const [playing, setPlaying] = useState(false)
    const [musicPlay, setMusic] = useState(null);
    const [second, setSecond] = useState(0);
    const [interval, setIntervalValue] = useState(null);



    const playMusic = (music) => {
        var audio = new Audio(music);
        if (playing) {
            musicPlay.pause();
            clearInterval(interval);
        } else {
            setMusic(audio);
            audio.play();
            setSecond(1)
            const playInterval = setInterval(() => {
                setSecond((prevSecond) => prevSecond + 1);
            }, 1000);
            setIntervalValue(playInterval);
        }
        setPlaying(!playing);
    }


    const resetTime = () => {
        musicPlay.pause();
        clearInterval(interval);
        setSecond(0);
    };


    useEffect(() => {
        if (second === 30) {
            resetTime();
        }
    }, [second])




    return (
        <SongDesc>
            <div style={{ position: "relative" }}>
                <img src={songList.album.cover_medium} alt={songList.artist.id} />
                <Button onClick={() => playMusic(songList.preview)}> {!playing || second === 0 ? <i class="fa fa-play"></i>
                    : <i class="fa fa-pause"></i>}
                </Button>
                <Button onClick={() => resetTime()} type="reset"> <i class="fa fa-stop"></i> </Button>
            </div>
            <SongDesc small>
                <ProgressBar second={second} />
                <Text small>Song Title :</Text>
                <Title> {songList.title}</Title>
                <Text small>Artist</Text> :
                <Title>{songList.artist.name} </Title>
                <div>
                    <Text small> Album : </Text> <Text> {songList.album.title} </Text>
                </div>
            </SongDesc>
        </SongDesc>
    );
};
;
export default Card;

