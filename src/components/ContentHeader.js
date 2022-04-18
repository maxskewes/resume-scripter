import { Box, Typography, Button } from '@mui/material';
import { RiArrowLeftLine } from 'react-icons/ri';

const ContentHeader = (props) => {
  const { breadcrumb, year, clientName, currentPage, percentCompleted } = props;

  const ProgressBar = ({ completed }) => {
    return (
      <>
        {/* <Progress value={completed} w={160} h={2} /> */}
        <Typography variant='g14'>STEP 1 OF 3</Typography>
      </>
    );
  };

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      flexDirection='row'
      width='full'
      borderBottom='1px'
      borderColor='GRAY'
    >
      <Button
        href='#'
        variant='text'
        leftIcon={<RiArrowLeftLine fontSize={18} />}
      >
        Back to {breadcrumb}
      </Button>

      <Box p={6} borderLeft='1px' borderColor='GRAY' w='50%'>
        <Typography variant='t14' textTransform='uppercase'>
          RESUME: {clientName}-{year}
        </Typography>
        <Typography variant='g14' textTransform='uppercase'>
          \ {currentPage}
        </Typography>
      </Box>
      <Box p={5}>
        {percentCompleted !== null ? (
          <ProgressBar completed={percentCompleted} />
        ) : null}
      </Box>
    </Box>
  );
};

export default ContentHeader;
