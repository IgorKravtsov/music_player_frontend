import React from 'react';
import {useInput} from "../hooks/useInput";
import axios from "axios";
import StepWrapper from "../components/stepWrapper/stepWrapper";
import {Button, Grid, TextField} from "@material-ui/core";
import FileUpload from "../components/fileUpload/fileUpload";

const UploadTrack = () => {
    const [activeStep, setActiveStep] = React.useState(0);
    // const [picture, setPicture] = React.useState(null);
    const [audio, setAudio] = React.useState(null);
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        }
        // } else {
        //     if(audio) {
        //         const formData = new FormData()
        //         formData.append('name', name.value)
        //         formData.append('text', text.value)
        //         formData.append('artist', artist.value)
        //         // formData.append('picture', picture)
        //         formData.append('audio', audio)
        //         axios.post('http://localhost:5000/tracks', formData)
        //             // .then(resp => router.push('/tracks'))
        //             .catch(e => console.log(e))
        //     }
        }


    const back = () => {
        setActiveStep(prev => prev - 1);
    }

    return (
        <>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 &&
                <Grid container direction={"column"} style={{padding: 20}}>
                    <TextField
                        {...name}
                        style={{marginTop: 10}}
                        label={"Название трека"}
                    />
                    <TextField
                        {...artist}
                        style={{marginTop: 10}}
                        label={"Имя исполнителя"}
                    />
                    <TextField
                        {...text}
                        style={{marginTop: 10}}
                        label={"Слова к треку"}
                        multiline
                        rows={3}
                    />
                </Grid>
                }
                {activeStep === 1 &&
                // <FileUpload setFile={setPicture} accept="image/*">
                //     <Button>Загрузить изображение</Button>
                // </FileUpload>
                    "Загрузить изображение"
                }
                {activeStep === 2 &&
                <FileUpload setFile={setAudio} accept="audio/*">
                    <Button>Загрузить аудио</Button>
                </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
                <Button onClick={next}>Далее</Button>
            </Grid>
        </>
    );
};

export default UploadTrack;