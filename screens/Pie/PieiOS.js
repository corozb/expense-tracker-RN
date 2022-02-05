import React from 'react'
import { StyleSheet } from 'react-native'
import { VictoryPie } from 'victory-native'

import { COLORS, SIZES } from '../../constants'
import ViewExpenses from './ViewExpenses'

function Pie({ chartData, colorScales, selectedCategory, totalExpenseCount, selectByName }) {
  return (
    <>
      <VictoryPie
        data={chartData}
        labels={(datum) => `${datum.y}`}
        radius={({ datum }) => (selectedCategory?.name === datum.name ? SIZES.width * 0.4 : SIZES.width * 0.4 - 10)}
        innerRadius={70}
        labelRadius={({ innerRadius }) => (SIZES.width * 0.4 + innerRadius) / 2.5}
        style={{
          labels: { fill: COLORS.white },
          parent: {
            ...styles.shadow,
          },
        }}
        width={SIZES.width * 0.8}
        height={SIZES.width * 0.8}
        colorScale={colorScales}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onPress: () => {
                return [
                  {
                    target: 'labels',
                    mutation: (props) => {
                      let categoryName = chartData[props.index].name
                      selectByName(categoryName)
                    },
                  },
                ]
              },
            },
          },
        ]}
      />

      <ViewExpenses totalExpenseCount={totalExpenseCount} />
    </>
  )
}

const styles = StyleSheet.create({
  imageList: {
    width: '100%',
    height: 'auto',
  },
})

export default Pie
