import { Box, Typography } from '@mui/material';
import React from 'react';

const Instructions = props => {
  let instructions = '';
  let expandedInstructions = '';

  if (typeof instructions !== 'undefined') {
    instructions = <>{props.instructions}</>;
  } else {
    return null;
  }

  if (typeof expandedInstructions !== 'undefined') {
    expandedInstructions = <>{props.expandedInstructions}</>;
  } else {
    return null;
  }

  return (
    <Box m={0} p={0} pb={2} >
      <Typography variant='t16'>
        {instructions}
      </Typography>
      <Typography variant='b16' ml={2}>
        {expandedInstructions}
      </Typography>
    </Box>
  );
};

export default Instructions;
/*
  let variant="solid";
const styles = useStyleConfig('RSCheckboxes', {variant});
<Box __css={styles} >CHECK THE STYLES</Box>
 */