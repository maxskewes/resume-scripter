import * as yup from 'yup';

export const workExperienceValidation = yup.object({
    jobTitle: yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    companyName: yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    startMonth: yup.string().required('Required'),
    startYear: yup.string().required('Required'),
    endMonth: yup.string(),
    endYear: yup.string(),
  })