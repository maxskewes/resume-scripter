import { TextField} from '@mui/material';
import { useField } from 'formik';

const RSText = ({props}) => {
  const [name, ...rest] = props

  return (
    <TextField name={name} {...rest} />
  )
}

export default RSText
