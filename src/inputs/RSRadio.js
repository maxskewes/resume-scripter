import { Field } from 'formik';
import {
  Text,
  Heading,
  Radio,
  RadioGroup,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import Instructions from '../components/Instructions';

const RSRadio = (props, qObj) => {
  const { id, question, instructions, expandedInstructions, options, index } =
    props;

  return (
    <Field name={`jobSeekerData[${index}].${props.qid}`}>
      {({ field, form }) => {
        return (
          <FormControl isInvalid={form.errors[id] && form.touched[id]}>
            <FormLabel htmlFor={id}>
              {' '}
              <Heading variant="b36">{question}</Heading>
            </FormLabel>
            <Instructions
              instructions={instructions}
              expandedInstructions={expandedInstructions}
            />
            <RadioGroup
              label={question}
              id={id}
              {...field}
              colorScheme="orange"
            >
              <Stack direction="column">
                {options.map(option => {
                  return (
                    <Radio
                      name={`jobSeekerData[${index}].${props.qid}`}
                      size="lg"
                      pt={8}
                      color="BLACK"
                      display="flex"
                      borderColor="GRAY"
                      colorScheme="orange"
                      {...field}
                      key={option.label}
                      value={option.value}
                      checked={field.value === option.value}
                    >
                      <label htmlFor={option.value}>
                        <Text fontWeight="400" pl={6}>
                          {option.label}
                        </Text>
                      </label>
                    </Radio>
                  );
                })}
              </Stack>
            </RadioGroup>
            <FormErrorMessage>{form.errors[id]}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default RSRadio;
