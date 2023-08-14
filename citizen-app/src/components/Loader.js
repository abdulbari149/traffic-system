import React from "react"
import { ActivityIndicator, View, Text } from "react-native"

export default ({ size=35 }) => {
  return (
    <View style={{ flex: 1, height: 500, width: "100%", alignItems: "center", justifyContent: "center" }}>
      <ActivityIndicator size={size} color="#202020" />
    </View>
  )
}