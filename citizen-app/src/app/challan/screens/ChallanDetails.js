import React, { useEffect } from 'react'
import { ScrollView, Text, View } from 'native-base'
import DetailAccordion from '../components/DetailAccordion'
import { useGetChallanByIdQuery } from 'api/index'
import NumberFormat from 'react-number-format'
import styles from '../styles'
import { Loader } from 'components'
import _ from 'lodash'
import { useDispatch } from 'react-redux'
import { openDetailsAccordin } from '../slice'
import { myCapitalize } from 'utils/myCapitalize'
import { useLayoutEffect } from 'react'

const ChallanDetails = ({ navigation, route }) => {
  const params = route.params
  const { data, error, isSuccess, isError, isLoading } = useGetChallanByIdQuery(
    params.cid,
  )
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View
          style={[
            styles.headerStatus,
            { backgroundColor: params.paid ? 'lightgreen' : '#bb2e3cca' },
          ]}
        >
          <Text style={styles.headerStatusText}>
            {paid ? 'Paid' : 'Unpaid'}
          </Text>
        </View>
      ),
    })
  }, [params.paid])

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(openDetailsAccordin({ name: 'offender' }))
  }, [])

  useEffect(() => {
    if (isSuccess) {
    }
  }, [isSuccess])

  return (
    <ScrollView contentContainerStyle={styles.detailsContainer}>
      {isLoading && <Loader />}
      {!isLoading && isSuccess && (
        <>
          <View style={styles.detailsTop}>
            <View>
              <Text fontWeight="bold" fontSize={24}>
                Challan Details
              </Text>
            </View>
            <View>
              <NumberFormat
                value={data?.data?.fine_imposed}
                style={{ fontSize: 24, paddingTop: 10 }}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'Rs. '}
                renderText={(value, props) => <Text {...props}>{value}</Text>}
              />
              <Text style={styles.fineText}>Fine</Text>
            </View>
          </View>
          <DetailAccordion
            data={[
              {
                id: 1,
                title: 'Name',
                value: `${_.capitalize(
                  data?.data?.citizen.first_name,
                )} ${_.capitalize(data?.data?.citizen.last_name)}`,
              },
              {
                id: 2,
                title: 'CNIC',
                value: data?.data?.citizen.cnic_no,
              },
              {
                id: 3,
                title: 'Vehicle No.',
                value: data?.data?.vehicle_registration_no,
              },
            ]}
            name="offender"
            open={true}
          />
          <DetailAccordion
            name="location"
            data={[
              {
                id: 1,
                title: 'District',
                value: _.capitalize(data?.data.district),
              },
              {
                id: 2,
                title: 'Division',
                value: _.capitalize(data?.data.division),
              },
              {
                id: 3,
                title: 'Province',
                value: myCapitalize(data?.data?.province),
              },
              {
                id: 4,
                title: 'Place Of Voilation',
                value: data?.data?.place_of_voilation,
              },
            ]}
          />
          <DetailAccordion
            name="voilation"
            data={[
              { id: 1, title: 'Name', value: data?.data?.voilation.voilation },
              {
                id: 2,
                title: 'Type',
                value: _.capitalize(data?.data?.voilation.v_type),
              },
              {
                id: 3,
                title: 'Code',
                value: data?.data?.voilation.code.toUpperCase(),
              },
            ]}
          />
        </>
      )}
    </ScrollView>
  )
}

export default ChallanDetails
