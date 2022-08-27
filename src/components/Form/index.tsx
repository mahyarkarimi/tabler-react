import { Formik, Form, FormikConfig, FormikValues } from "formik";

const MyForm = ({
    children,
    ...props
}: FormikConfig<FormikValues>) => {
    return (
        <Formik {...props}>
            <Form>
                {children}
            </Form>
        </Formik>
    )
}

export default MyForm;
