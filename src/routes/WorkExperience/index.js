import React from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import AddExperience from '../../components/AddExperience';
import RSInput from '../../inputs/RSText';
import RSSelect from '../../inputs/RSSelect';
import { workExperienceValidation } from './validation';
import ProTip from '../../components/ProTip';
import { month, year } from '../../components/dateOptionsArray';

const initialValues = {
  wxList: [
    {
      jobTitle: '',
      companyName: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
    },
  ],
};

const WorkExperience = () => {

  return (
    <Box>
      {/* <Flex py={10} justifyContent='space-between' alignItems='center'>
        <Box>
          <Heading>What's your work experience?</Heading>
          <Text variant='g15'>
            Tell us more about your experience to help personalize your resume.
          </Text>
        </Box>
        <ProTip />
      </Flex>

      <AddExperience initialValues={initialValues} validation={workExperienceValidation}>
        <GridItem colSpan={2}>
          <RSInput question='Job Title' qid={`wxList.${index}.jobTitle`} />
        </GridItem>
        <GridItem colSpan={2}>
          <RSInput
            question='Company Name'
            qid={`wxList.${index}.companyName`}
            placeholder='Company'
          />
        </GridItem>
        <GridItem colSpan={1}>
          <RSSelect
            question='Start Month'
            qid={`wxList.${index}.startMonth`}
            options={month}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <RSSelect
            question='Start Year'
            qid={`wxList.${index}.startYear`}
            options={year}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <RSSelect
            question='End Month'
            qid={`wxList.${index}.endMonth`}
            options={month}
          />
        </GridItem>
        <GridItem colSpan={1}>
          <RSSelect
            question='End Year'
            qid={`wxList.${index}.endYear`}
            options={year}
          />
        </GridItem>
      </AddExperience> */}

    </Box>
  );
};

export default WorkExperience;
