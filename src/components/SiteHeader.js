import { Box, Grid, Typography } from '@mui/material';
import RSLink from './RSLink';
import { navigationArray } from '../navigationArray';
import RSLogo from '../images/RS-logo.png';

const SiteHeader = () => {
  return (
    <Box bgcolor='BLACK' height={100}>
      <Grid
        conatiner
        xs={12}
        display='flex'
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
      >
        <Grid item xs={1}>
          <img src={RSLogo} alt='RS Works Logo' style={{ height: '70px' }} />
        </Grid>
        {navigationArray.map((nav, i) => {
          return (
            <Grid item xs={1} key={i}>
              <RSLink
                to={nav.value}
              >
                <Typography color='WHITE' textTransform='uppercase'>
                  {nav.key}
                </Typography>
              </RSLink>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default SiteHeader;
