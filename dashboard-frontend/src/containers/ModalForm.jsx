import React from 'react';

import { Formik } from 'formik'

import Input from './CustomInput'

import styles from '../styles/ModalForm.module.css';
import { Button } from '@mui/material';

const getFieldValues = (data) => {
    let names = []
    for (const key in data) {
        names = names.concat(data[key].names)
    }
    const values = names.reduce((obj, name) => ({ ...obj, [name]: "" }), {})
    return values;
}

const ModalForm = ({
    data,
    handleSubmit,
    btn: {
        title,
        amount,
        onClickOfCancel
    }
}) => {
    const fieldInitialValues = getFieldValues(data);
    return (<>
        <Formik
            initialValues={fieldInitialValues}
            onSubmit={handleSubmit}
        >
            {({ handleChange, handleBlur, handleSubmit: formikSubmit, values, errors }) => (<>
                <form className={styles.form}>
                    {data.names.map((name, idx) => (
                        <Input
                            onChange={handleChange(name)}
                            onBlur={handleBlur(name)}
                            key={name}
                            modal={true}
                            name={name}
                            value={values[name]}
                            placeholder={data.placeholders ? data?.placeholders[idx] : ""}
                            label={name.replace(/_/g, " ")}
                            type={data.types ? data?.types[idx] : "text"}
                            error={errors[name]}
                        />
                    ))}
                </form>
                <div className={styles.buttonGroup}>
                    {amount === 2 && <Button className={styles.ghostButton}
                        onClick={onClickOfCancel}
                    >
                        Cancel
                    </Button>}
                    <Button className={styles.button}
                        onClick={() => formikSubmit()}
                    >
                        {title}
                    </Button>
                </div>
            </>)}

        </Formik>
    </>)
}

export default ModalForm;