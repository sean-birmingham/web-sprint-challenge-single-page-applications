import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(2, 'Name must be at least 2 characters long')
});

export default schema;
