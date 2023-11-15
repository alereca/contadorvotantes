import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Send from '@mui/icons-material/Send';
import { IconButton } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

interface InputFormProps {
  onAddId: (id: string) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onAddId }) => {
  const handleAddId = (id: string) => {
    onAddId(id);
  };

  const validationSchema = Yup.object({
    id: Yup.number()
      .typeError('Debe ingresar un número')
      .integer('El número debe ser entero')
      .min(1, 'El número debe ser al menos 1')
      .max(350, 'El número no debe ser mayor que 350'),
  });

  return (
    <Formik
      initialValues={{ id: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        if (values.id !== '') {
          handleAddId(values.id);
          values.id = '';
        }
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2 }}>
            <Field
              name="id"
              as={TextField}
              label="Ingrese número de orden"
              error={touched.id && Boolean(errors.id)}
              helperText={touched.id && errors.id}
              sx={{ flexGrow: 1 }}
            />
            <IconButton type="submit" disabled={isSubmitting} sx={{ ml: 1 }}>
              <Send />
            </IconButton>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
