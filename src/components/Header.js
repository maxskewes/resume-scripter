import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { navArrays } from './navArrays';
import RSLogo from '../images/RS-logo.png';

const Header = (props) => {

  return (
    <Box p={4} bg='BLACK' h={100} display='flex' alignContent='center'>
      <Grid templateColumns='repeat(10, 1fr)' gap={4}>
        <GridItem colSpan={1} display='flex' justifyContent='center' key='logo'>
          <img src={RSLogo} alt='RS Works Logo' style={{ height: '70px' }} />
        </GridItem>
        {navArrays.map((nav, i) => {
          return (
            <GridItem colSpan={1} display='flex' alignContent='center' key={i}>
              <Link
                to={nav.value}
                display='flex'
                justifyContent='center'
                alignItems='center'
                textAlign='center'
              >
                <Text color='WHITE' textTransform='uppercase'>
                  {nav.key}
                </Text>
              </Link>
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Header;
