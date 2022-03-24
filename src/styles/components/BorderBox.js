import { Box } from '@chakra-ui/react';

const BorderBox = ({ children, ...props }) => {
  return (
    <Box
      w="100%"
      bg="transparent"
      border="1px solid"
      borderColor="GRAY"
      borderRadius={4}
      padding={10}
      {...props}
    >
      {children}
    </Box>
  );
};

export default BorderBox;
