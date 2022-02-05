import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

function CategoriesHeader({ categories, viewMode, setViewMode }) {
  return (
    <View style={styles.categoriesHeader}>
      {/* Title */}
      <View>
        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
        <Text style={{ color: COLORS.darkgray, ...FONTS.body4 }}>{categories.length} Total</Text>
      </View>

      {/* Button */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.touchButton, backgroundColor: viewMode == 'chart' ? COLORS.secondary : null }}
          onPress={() => setViewMode('chart')}
        >
          <Image
            source={icons.chart}
            resizeMode='contain'
            style={{ ...styles.iconCategory, tintColor: viewMode == 'chart' ? COLORS.white : COLORS.darkgray }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={{ ...styles.touchButton, backgroundColor: viewMode == 'list' ? COLORS.secondary : null }}
          onPress={() => setViewMode('list')}
        >
          <Image
            source={icons.menu}
            resizeMode='contain'
            style={{ ...styles.iconCategory, tintColor: viewMode == 'list' ? COLORS.white : COLORS.darkgray }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  categoriesHeader: {
    flexDirection: 'row',
    padding: SIZES.padding,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  touchButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  iconCategory: {
    width: 20,
    height: 20,
  },
})

export default CategoriesHeader
