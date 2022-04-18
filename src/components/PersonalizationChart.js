import { Box, Typography } from '@mui/material';

const PersonalizationChart = () => {

// Code to determine state of PersonalizationChart //

  return (
    <Box>
      <Typography variant="t14">PersonalizationChart</Typography>
      <Box h={2}>
        <Box h={2} w={12} bg="ORANGE" />
        <Box h={2} w={12} bg="GRAY" />
        <Box h={2} w={12} bg="GRAY" />
      </Box>
      <Typography variant="b16">Good</Typography>
    </Box>
  );
};

export default PersonalizationChart;
