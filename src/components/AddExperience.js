import { useState } from 'react';
import { Formik, Form, FieldArray } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Grid } from '@mui/material';
import ProTip from '../components/ProTip';
import RSInput from '../inputs/RSText';
import RSSelect from '../inputs/RSSelect';
import { month, year } from '../components/dateOptionsArray';

import PersonalizationChart from '../components/PersonalizationChart';
import {
  RiEditFill,
  RiDeleteBinFill,
  RiAddCircleLine,
  RiSettings3Line,
} from 'react-icons/ri';

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

const AddExperience = (props) => {
  const { initialValues, validation, children } = props;
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validation}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ values }) => (
        <Box>
          <Form>
            <FieldArray name='wxList'>
              {({ insert, remove, push }) => (
                <Box>
                  {values.wxList.length > 0 &&
                    values.wxList.map((wx, index) => {
                      //   const handleRemove = () => remove(index);

                      return (
                        <Box>
                          <Box
                            key={index}
                            h='100%'
                            w={920}
                            m={4}
                            border='1px'
                            borderColor='GRAY'
                            borderRadius={8}
                          >
                            <Box display='flex' justify='right'>
                              {values.wxList.length > 1 && (
                                <button
                                  type='button'
                                  onClick={() => remove(index)}
                                >
                                  X Remove Experience
                                </button>
                              )}
                            </Box>

                            <Grid container h='100%' w='100%' p={8}>
                              {children}
                            </Grid>
                          </Box>
                        </Box>
                      );
                    })}
                </Box>
              )}
            </FieldArray>

            <Box display='flex' justify='space-between'>
              <Button variant='outline'>Previous</Button>
              <Button type='submit'>Complete</Button>
            </Box>

            {/* DEV PURPOSES ONLY - DELETE BEFORE BUILD */}
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </Form>
        </Box>
      )}
    </Formik>
  );
};

export default AddExperience;
