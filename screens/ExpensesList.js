import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, FlatList } from 'react-native'

import { COLORS, FONTS, SIZES } from '../constants'

function ExpensesList({ categoryDisplay, selectedCategory, selectByName }) {
  let data = categoryDisplay()

  const renderItem = ({ item }) => {
    let itemSelected = selectedCategory?.name == item.name ? item.color : COLORS.white
    let textSelected = selectedCategory?.name == item.name ? COLORS.white : item.color
    let priceList = selectedCategory?.name == item.name ? COLORS.white : COLORS.primary

    return (
      <TouchableOpacity
        style={{
          ...styles.list,
          backgroundColor: itemSelected,
        }}
        onPress={() => {
          let categoryName = item.name
          selectByName(categoryName)
        }}
      >
        {/* Name/Category */}
        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
          <View
            style={{
              ...styles.categoryName,
              backgroundColor: textSelected,
            }}
          />

          <Text
            style={{
              marginLeft: SIZES.base,
              color: textSelected,
              ...FONTS.h3,
            }}
          >
            {item.name}
          </Text>
        </View>

        {/* Expenses */}
        <View style={{ justifyContent: 'center' }}>
          <Text
            style={{
              color: priceList,
              ...FONTS.h3,
            }}
          >
            {item.y} USD - {item.label}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ padding: SIZES.padding }}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} />
    </View>
  )
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    height: 40,
    paddingHorizontal: SIZES.radius,
    borderRadius: 10,
  },

  categoryName: {
    width: 20,
    height: 20,
    borderRadius: 5,
  },
})

export default ExpensesList
