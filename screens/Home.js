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

  return <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>{renderNavbar()}</View>
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
})

export default Home
