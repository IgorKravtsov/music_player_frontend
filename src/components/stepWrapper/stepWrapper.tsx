import React from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@material-ui/core";
import styles from './stepWrapper.module.scss';

interface StepWrapperProps {
    activeStep: number;
}
const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']

const StepWrapper: React.FC<StepWrapperProps> = (
    {
        activeStep,
        children
    }) => {
    return (
        <Container>
            <Stepper activeStep={activeStep}>
                {steps.map((step, index) =>
                    <Step
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" className={styles.grid}>
                <Card className={styles.card}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;