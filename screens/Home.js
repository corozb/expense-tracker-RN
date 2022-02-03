import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import { COLORS, SIZES, FONTS, icons } from '../constants'

function Home() {
  const renderNavbar = () => {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity style={styles.navbarButtons} onPress={() => console.log('back button')}>
          <Image source={icons.back_arrow} style={styles.navbarIcons} />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.navbarButtons, alignItems: 'flex-end' }}
          onPress={() => console.log('more button')}
        >
          <Image source={icons.more} style={styles.navbarIcons} />
        </TouchableOpacity>
      </View>
    )
  }

  const renderHeader = () => {
    return (
      <View style={{ paddingHorizontal: SIZES.padding, paddingVertical: SIZES.padding, backgroundColor: COLORS.white }}>
        <View>
          <Text style={{ color: COLORS.primary, ...FONTS.h2 }}>My Expenses</Text>
          <Text style={{ color: COLORS.darkgray, ...FONTS.h3 }}>Summary</Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: SIZES.padding, alignItems: 'center' }}>
          <View style={styles.imageContainer}>
            <Image source={icons.calendar} style={{ width: 20, height: 20, tintColor: COLORS.lightBlue }} />
          </View>

          <View style={{ marginLeft: SIZES.padding }}>
            <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>21 Dec, 2020</Text>
            <Text style={{ ...FONTS.body3, color: COLORS.darkgray }}>13% more than last month</Text>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {renderNavbar()}
      {renderHeader()}
    </View>
  )
}

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: SIZES.padding,
    backgroundColor: COLORS.white,
  },

  navbarButtons: {
    justifyContent: 'center',
    width: 50,
  },

  navbarIcons: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },

  imageContainer: {
    height: 50,
    width: 50,
    backgroundColor: COLORS.lightGray,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Home
