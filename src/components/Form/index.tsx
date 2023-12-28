import { Formik, Form, FormikConfig, FormikValues } from "formik";
import React, { PropsWithChildren } from "react";

const TablerForm = ({
    children,
    ...props
}: PropsWithChildren<FormikConfig<FormikValues>>) => {
    return (
        <Formik {...props}>
            <Form>
                {children}
            </Form>
        </Formik>
    )
}

export default TablerForm;
