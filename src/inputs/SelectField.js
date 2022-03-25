import { FormLabel } from '@chakra-ui/react';
import { Field } from 'formik';
import CreatableSelect from 'react-select/creatable';
import Instructions from '../components/Instructions';
import * as React from 'react';


const SelectField = (qObj,index,props) => {
  const options = qObj.options;
  const qid = qObj.qid;
  const question = qObj.question;
  const jobSeekerData = props.formikProps.values.jobSeekerData;
  const handleChange = (newValue, actionMeta) => {
    //find handleChange
    let newValues = [];
    if (Array.isArray(newValue)) {
      for (const [valObj] of Object.entries(newValue)) {
        newValues.push(valObj.value);
      }
    } else {
      newValues.push(newValue.value);
    }
    jobSeekerData[index][qid] = newValues;
    props.handlers.onSubmit(props.formikProps, props.stateProps);
  };
  const handleInputChange = (inputValue, actionMeta) => {
  };
  let isMultiple = true;
  if (typeof qObj.multiple === 'undefined') {
    isMultiple=false;
  }
  if (typeof options === 'undefined') {
    return null;
  } else {
    return (
      <Field name={`jobSeekerData[${index}].${qid}`}>
        {({ field, form }) => {
          let fValue = [];
          if (typeof field.value !== 'undefined') {
            fValue= field.value;
          }
          if (!Array.isArray(fValue)) {
            fValue = [fValue];
          }

          const selected = [];
          options.forEach((option)=> {
            fValue.forEach((value)=> {
              if (option.value === value) {
                selected.push(option);
              }
            });
          });
          return (
            <>
              <FormLabel htmlFor={qid}>{question}</FormLabel>
              <Instructions
                instructions={qObj.instructions}
                expandedInstructions={qObj.expandedInstructions}
              />
              <CreatableSelect
                isMulti={isMultiple}
                onChange={handleChange}
                onInputChange={handleInputChange}
                options={options}
                value={selected}
              /></>
          );
        }
        }
      </Field>
    );
  }
  ;
};
export default SelectField;
