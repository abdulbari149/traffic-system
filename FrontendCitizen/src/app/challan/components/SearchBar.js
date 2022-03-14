import { View, Text } from 'native-base'
import React from 'react'
import Field from '../../../components/Field'
import { Formik } from 'formik'

const SearchBar = () => {
    return (<View style={{ padding: 15 }}>
        <Formik
            initialValues={{ query: '' }}
            onSubmit={(values) => console.log(values)}
        >
            {({ initialValues, errors, handleChange }) => {
                return (
                    <Field
                        name="search"
                        type="search"
                        placeholder="Search your Challan here"
                        isLabel={false}
                    />
                )
            }}
        </Formik>
    </View>
    )
}
export default SearchBar