import { Box, Typography } from '@mui/material';

const SiteFooter = () => {
  return (
    <Box height={100} p={8}>
      <Typography display='flex' justifyContent='center' fontSize='sm' color='GRAY_2'>
        Copyright 2021 | RS Works, LLC. Portland, Oregon
      </Typography>
    </Box>
  );
};

export default SiteFooter;
