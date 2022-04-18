// import { Field } from 'formik';
// import {
//   Heading,
//   Select,
//   FormControl,
//   FormLabel,
//   FormErrorMessage,
// } from '@mui/material';
// import Instructions from '../components/Instructions';

// const RSSelect = (props, qObj) => {
//   const { id, question, instructions, options, index } = props;

//   if (typeof options === 'undefined') {
//     return null;
//   } else {
//     return (
//       <Field name={`jobSeekerData[${index}].${props.qid}`}>
//         {({ field, form }) => (
//           <FormControl isInvalid={form.errors[id] && form.touched[id]}>
//             <FormLabel htmlFor={id}>
//               <Heading variant="b36">{question}</Heading>
//             </FormLabel>
//             <Instructions
//               instructions={instructions}
//               expandedInstructions={props.expandedInstructions}
//             />
//             <Select {...field}>
//               {options.map(option => {
//                 return (
//                   <option key={option.label} value={option.value}>
//                     {option.label}
//                   </option>
//                 );
//               })}
//             </Select>
//             <FormErrorMessage>{form.errors[id]}</FormErrorMessage>
//           </FormControl>
//         )}
//       </Field>
//     );
//   }
// };

// export default RSSelect;
