import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, 'Name must be at least 2 characters long')
    .required('You must enter your name'),
  size: yup
    .string()
    .oneOf(
      ['Small', 'Medium', 'Large', 'Extra-Large'],
      'You must select a size'
    )
    .required('You must select a size'),
  instructions: yup.string().notRequired()
});

export default schema;
