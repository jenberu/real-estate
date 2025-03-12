import { View, Text } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const Proprerty = () => {
    // useLocalSearchParams hook is used to get the parameters from the URL.
    const {id}=useLocalSearchParams()
  return (
    <View>
          <Text> Proprerty { id}</Text>
    </View>
  )
}

export default Proprerty