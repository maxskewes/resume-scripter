import {  Typography } from '@mui/material';
const ProgressBar = (stepIndex,steps)  => {
  const completed = stepIndex / steps * 100;
  return (
    <>
      {/* <Progress value={completed} w={160} h={2} colorScheme="orangeScheme" /> */}
      <Typography variant="g14">STEP {stepIndex} OF {steps}</Typography>
    </>
  );
}

export default ProgressBar;
