import React from 'react'
import { View, Text } from 'react-native'
import { FONTS } from '../../constants'

function ViewExpenses({ totalExpenseCount }) {
  return (
    <View style={{ position: 'absolute', top: '42%', left: '42%' }}>
      <Text style={{ ...FONTS.h1, textAlign: 'center' }}>{totalExpenseCount}</Text>
      <Text style={{ ...FONTS.body3, textAlign: 'center' }}>Expenses</Text>
    </View>
  )
}

export default ViewExpenses
