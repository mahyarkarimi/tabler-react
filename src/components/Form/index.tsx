import { Formik, Form, FormikConfig, FormikValues } from "formik";
import React from "react";

const MyForm: React.FC<FormikConfig<FormikValues>> = ({
    children,
    ...props
}) => {
    return (
        <Formik {...props}>
            <Form>
                {children}
            </Form>
        </Formik>
    )
}

export default MyForm;
