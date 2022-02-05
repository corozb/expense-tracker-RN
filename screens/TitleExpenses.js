import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

function TitleExpenses() {
  return (
    <View style={styles.title}>
      {/* Title */}
      <Text style={{ ...FONTS.h3, color: COLORS.primary }}>INCOMING EXPENSES</Text>
      <Text style={{ ...FONTS.body4, color: COLORS.darkgray }}>12 Total</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    height: 80,
    backgroundColor: COLORS.lightGray2,
    padding: SIZES.padding,
  },
})

export default TitleExpenses
