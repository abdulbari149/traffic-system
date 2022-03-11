import React from "react";
import { Formik } from "formik";
import Button from "./Button";
import Field from "./Field";
import { VStack, Box, Text } from "native-base";
import styles from "../styles/Auth.styles";

const getFieldValues = (data) => {
    let names = [];
    for (const key in data) {
        names = names.concat(data[key].names);
    }
    const values = names.reduce((obj, name) => ({ ...obj, [name]: "" }), {});
    return values;
};

const MultiGroupForm = ({ data, values, handleChange }) => {
    return (
        <>
            {Object.keys(data).map((key) => {
                const group = data[key]
                return (
                    <Box key={key} style={styles.formGroup}  >
                        <Box style={styles.formGroupLabel} _text={styles.formGroupLabelText}>{key}</Box>
                        {group.names.map((name, idx) => (
                            <Field
                                key={name}
                                name={name}
                                value={values[name]}
                                onChange={handleChange(name)}
                                type={!!group?.types ? group.types[idx] : "text"}
                                label={name}
                            />
                        ))}
                    </Box>
                );
            })}
        </>
    );
};

const SingleForm = ({ data, values, handleChange }) => {
    return (
        <>
            {data.names.map((name, idx) => {
                return (
                    <Field
                        key={name}
                        name={name}
                        value={values[name]}
                        onChange={handleChange(name)}
                        placeholder={data.placeholders[idx]}
                        label={name.replace("_", " ")}
                        type={data.types[idx]}
                    />
                );
            })}
        </>
    );
};

const VerficationCode = () => {
    return (
        <View>
            
        </View>
    )
}

const Form = ({ data, handleSubmit, variety = 'single', _btn, containerStyles = {} }) => {
    const fieldInitialValues = getFieldValues(data);
    return (
        <Formik initialValues={fieldInitialValues} onSubmit={handleSubmit}>
            {(formikProps) => (
                <VStack style={{ ...containerStyles, padding: 10 }} alignItems='center' width="100%">
                    {
                        variety === 'multiple' ? (
                            <MultiGroupForm data={data} {...formikProps} />
                        ) : variety === 'single' ? (
                            <SingleForm data={data} {...formikProps} />
                        ) : variety === 'verfication' ? (
                            <VerificationCode />
                        ): <Text>Please provide variety prop</Text> 
                    }
            <Button {..._btn} onPress={() => formikProps.handleSubmit()} />
        </VStack>
    )
}
        </Formik >
    );
};

export default Form;