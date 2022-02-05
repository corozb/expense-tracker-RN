import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { COLORS, SIZES, icons } from '../constants'

function Navbar() {
  return (
    <View style={styles.navbar}>
      <TouchableOpacity style={styles.touchableIcon} onPress={() => console.log('Go Back')}>
        <Image source={icons.back_arrow} style={styles.navbarIcon} />
      </TouchableOpacity>

      <TouchableOpacity style={{ ...styles.touchableIcon, alignItems: 'flex-end' }} onPress={() => console.log('More')}>
        <Image source={icons.more} style={styles.navbarIcon} />
      </TouchableOpacity>
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

  navbarIcon: {
    width: 30,
    height: 30,
    tintColor: COLORS.primary,
  },

  touchableIcon: {
    justifyContent: 'center',
    width: 50,
  },
})

export default Navbar
