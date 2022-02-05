import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, icons } from '../constants'

function Header() {
  return (
    <View style={styles.header}>
      <View>
        <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}>Summary (private)</Text>
      </View>

      <View style={styles.headerIcon}>
        <View style={styles.imageContainer}>
          <Image source={icons.calendar} style={styles.imageHeader} />
        </View>

        <View style={{ marginLeft: SIZES.padding }}>
          <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>11 Nov, 2020</Text>
          <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>18% more than last month</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding,
    backgroundColor: COLORS.white,
  },
  headerIcon: {
    flexDirection: 'row',
    marginTop: SIZES.padding,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: COLORS.lightGray,
    height: 50,
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageHeader: {
    width: 20,
    height: 20,
    tintColor: COLORS.lightBlue,
  },
})

export default Header
