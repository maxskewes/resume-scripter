import { Field } from 'formik';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
} from '@chakra-ui/react';
import Instructions from '../components/Instructions';

const RSInput = props => {
  const { qid, id, question, instructions, index } = props;
  //let charLimit = '';

  return (
    <Field name={`jobSeekerData[${index}].${qid}`}>
      {({ field, form }) => (
        <FormControl isInvalid={form.errors[id] && form.touched[id]}>
          <FormLabel htmlFor={id}>
            <Heading variant="b36">{question}</Heading>
          </FormLabel>
          <Instructions
            instructions={instructions}
            expandedInstructions={props.expandedInstructions}
          />
          <Input {...field} />
          <FormErrorMessage>{form.errors[id]}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};

export default RSInput;
