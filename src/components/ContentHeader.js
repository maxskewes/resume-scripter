import { Box, Text, Progress, HStack, Button } from '@chakra-ui/react';
import { RiArrowLeftLine } from 'react-icons/ri';

const ContentHeader = (props) => {
  const { breadcrumb, year, clientName, currentPage, percentCompleted } = props;

  const ProgressBar = ({ completed }) => {
    return (
      <>
        <Progress value={completed} w={160} h={2} colorScheme='orangeScheme' />
        <Text variant='g14'>STEP 1 OF 3</Text>
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

      <HStack p={6} borderLeft='1px' borderColor='GRAY' w='50%'>
        <Text variant='t14' textTransform='uppercase'>
          RESUME: {clientName}-{year}
        </Text>
        <Text variant='g14' textTransform='uppercase'>
          \ {currentPage}
        </Text>
      </HStack>
      <HStack p={5}>
        {percentCompleted !== null ? <ProgressBar completed={percentCompleted} /> : null }
      </HStack>
    </Box>
  );
};

export default ContentHeader;
