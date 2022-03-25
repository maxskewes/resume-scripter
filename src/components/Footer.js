import { Box, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box h={100} p={8}>
      <Text display='flex' justifyContent='center' fontSize='sm' color='GRAY_2'>
        Copyright 2021 | RS Works, LLC. Portland, Oregon
      </Text>
    </Box>
  );
};

export default Footer;
