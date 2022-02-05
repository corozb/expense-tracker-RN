import React from 'react'
import { StyleSheet, View, Text, Image, FlatList } from 'react-native'

import { COLORS, FONTS, SIZES, icons } from '../constants'
import TitleExpenses from './TitleExpenses'

function IncomingExpenses({ selectedCategory }) {
  let allExpenses = selectedCategory?.expenses || []
  let incomingExpenses = allExpenses.filter((a) => a.status == 'P')

  const renderItem = ({ item, index }) => (
    <View style={{ ...styles.expenses, ...styles.shadow, marginLeft: index == 0 ? SIZES.padding : 0 }}>
      {/* Title */}
      <View style={styles.card}>
        <View style={styles.cardIcon}>
          <Image
            source={selectedCategory.icon}
            style={{
              width: 30,
              height: 30,
              tintColor: selectedCategory.color,
            }}
          />
        </View>

        <Text style={{ ...FONTS.h3, color: selectedCategory.color }}>{selectedCategory.name}</Text>
      </View>

      {/* Expense Description */}
      <View style={{ paddingHorizontal: SIZES.padding }}>
        {/* Title and description */}
        <Text style={{ ...FONTS.h2 }}>{item.title}</Text>
        <Text style={{ ...FONTS.body3, flexWrap: 'wrap', color: COLORS.darkgray }}>{item.description}</Text>

        {/* Location */}
        <Text style={{ marginTop: SIZES.padding, ...FONTS.h4 }}>Location</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image source={icons.pin} style={styles.iconLocation} />
          <Text style={{ marginBottom: SIZES.base, color: COLORS.darkgray, ...FONTS.body4 }}>{item.location}</Text>
        </View>
      </View>

      {/* Price */}
      <View style={{ ...styles.cardPrice, backgroundColor: selectedCategory.color }}>
        <Text style={{ color: COLORS.white, ...FONTS.body3 }}>CONFIRM {item.total.toFixed(2)} USD</Text>
      </View>
    </View>
  )

  return (
    <View>
      <TitleExpenses />

      {incomingExpenses.length > 0 && (
        <FlatList
          data={incomingExpenses}
          renderItem={renderItem}
          keyExtractor={(item) => `${item.id}`}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      )}

      {incomingExpenses.length == 0 && (
        <View style={styles.cardEmpty}>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>No Record</Text>
        </View>
      )}
    </View>
  )
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

  expenses: {
    width: 300,
    marginRight: SIZES.padding,
    marginVertical: SIZES.radius,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },

  card: {
    flexDirection: 'row',
    padding: SIZES.padding,
    alignItems: 'center',
  },

  cardIcon: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: SIZES.base,
  },

  iconLocation: {
    width: 20,
    height: 20,
    tintColor: COLORS.darkgray,
    marginRight: 5,
  },

  cardPrice: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomStartRadius: SIZES.radius,
    borderBottomEndRadius: SIZES.radius,
  },

  cardEmpty: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
})

export default IncomingExpenses
