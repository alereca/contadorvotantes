import { Formik, Field, Form } from 'formik';
import { TextField, Button, Box } from '@mui/material';
import * as Yup from 'yup';

interface ConfigurationFormProps {
  onTotalChange: (total: number) => void;
  setShowConfig(show: boolean): void;
}

const maxElectors = 400;
const validationSchema = Yup.object({
  total: Yup.number()
    .typeError('Debe ingresar un número')
    .min(1, 'El total debe ser al menos 1')
    .max(maxElectors, `El total no debe ser mayor que ${maxElectors}`),
});

const ConfigurationForm: React.FC<ConfigurationFormProps> = ({
  onTotalChange,
  setShowConfig,
}) => {
  return (
    <Formik
      initialValues={{ total: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        if (values.total !== '') {
          onTotalChange(Number(values.total));
          setSubmitting(false);
        }
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <Box sx={{ display: 'block', alignItems: 'center', gap: 2, p: 2 }}>
            <Field
              name="total"
              as={TextField}
              label="Ingrese numero de electores"
              placeholder="350"
              error={touched.total && Boolean(errors.total)}
              helperText={touched.total && errors.total}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 2,
              }}
            >
              <Button 
                type="button"
                onClick={() => setShowConfig(false)}
                color="error"
              >
                Volver
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Guardar
              </Button>
            </Box>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ConfigurationForm;
