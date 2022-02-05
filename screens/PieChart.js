import React from 'react'
import { StyleSheet, View } from 'react-native'

import PieiOS from './Pie/PieiOS'
import PieAndroid from './Pie/PieAndroid'

function PieChart({ categoryDisplay, selectedCategory, selectByName }) {
  let chartData = categoryDisplay()
  let colorScales = chartData.map((item) => item.color)
  let totalExpenseCount = chartData.reduce((a, b) => a + (b.expenseCount || 0), 0)

  const props = {
    chartData,
    colorScales,
    selectedCategory,
    totalExpenseCount,
    selectByName,
  }

  if (Platform.OS == 'ios') {
    return (
      <View style={styles.listContainer}>
        <PieiOS {...props} />
      </View>
    )
  } else {
    // Android workaround by wrapping VictoryPie with SVG
    return (
      <View style={styles.listContainer}>
        <PieAndroid {...props} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },

  listContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PieChart
