// import { Box, Button, Grid, Typography } from '@mui/material';
// import { BiGridVertical } from 'react-icons/bi';
// import { RiSettings3Line, RiEditFill, RiDeleteBinFill } from 'react-icons/ri';
// import PersonalizationChart from './PersonalizationChart';
// import RemoveModal from './RemoveModal';

// const AddedExperiences = ({ heading, blackText, greyText, isIndustry }) => {


//   return (
//     <Box py={3} px={2} m={2}>
//       <Grid container columns={7} spacing={4}>
//         <Grid item colSpan={3}>
//           <Button variant='empty'>
//             <Typography color='GRAY' fontSize={24}>
//               <BiGridVertical />
//             </Typography>
//           </Button>
//           <Box>
//             <Typography
//               variant='b18'
//               textTransform='uppercase'
//               fontWeight={700}
//             >
//               {heading}
//             </Typography>
//             {blackText !== null && <Text variant='t16'>{blackText}</Text>}
//             <Typography variant='g16'>{greyText}</Typography>
//           </Box>
//         </Grid>

//         <Grid item xs={2}>
//           {isIndustry && <PersonalizationChart />}
//         </Grid>

//         <Grid item xs={2}>
//           <Box display='flex'>
//             <Button variant='wxIcon'>
//               <Typography color='GRAY_2'>
//                 <RiEditFill />
//               </Typography>
//             </Button>
//             <RemoveModal />
//             {isIndustry && (
//               <Button variant='personalize'>
//                 <RiSettings3Line color='ORANGE' />
//                 <Typography variant='g14' fontWeight={600}>
//                   Personalize
//                 </Typography>
//               </Button>
//             )}
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default AddedExperiences;
