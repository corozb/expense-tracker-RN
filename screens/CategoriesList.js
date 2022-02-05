import React, { useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, Animated, FlatList } from 'react-native'
import { COLORS, FONTS, SIZES, icons } from '../constants'

function CategoriesList({ categories, setSelectedCategory, showMoreToggle, setShowMoreToggle }) {
  const categoryListHeightAnimationValue = useRef(new Animated.Value(110)).current

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{
        ...styles.categoryItem,
        ...styles.shadow,
      }}
      onPress={() => setSelectedCategory(item)}
    >
      <Image source={item.icon} style={{ ...styles.categoryIcon, tintColor: item.color }} />
      <Text style={{ marginLeft: SIZES.base, color: COLORS.primary, ...FONTS.h4 }}>{item.name}</Text>
    </TouchableOpacity>
  )

  return (
    <View style={{ paddingHorizontal: SIZES.padding - 5 }}>
      <Animated.View style={{ height: categoryListHeightAnimationValue }}>
        <FlatList data={categories} renderItem={renderItem} keyExtractor={(item) => `${item.id}`} numColumns={2} />
      </Animated.View>

      {/* More Button */}
      <TouchableOpacity
        style={styles.moreButton}
        onPress={() => {
          if (showMoreToggle) {
            Animated.timing(categoryListHeightAnimationValue, {
              toValue: 110,
              duration: 500,
              useNativeDriver: false,
            }).start()
          } else {
            Animated.timing(categoryListHeightAnimationValue, {
              toValue: 172.5,
              duration: 500,
              useNativeDriver: false,
            }).start()
          }
          setShowMoreToggle(!showMoreToggle)
        }}
      >
        <Text style={{ ...FONTS.body4 }}>{showMoreToggle ? 'LESS' : 'MORE'}</Text>
        <Image style={styles.arrowStyle} source={showMoreToggle ? icons.up_arrow : icons.down_arrow} />
      </TouchableOpacity>
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

  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    margin: 5,
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },

  categoryIcon: {
    width: 20,
    height: 20,
  },
  moreButton: {
    flexDirection: 'row',
    marginVertical: SIZES.base,
    justifyContent: 'center',
  },
  arrowStyle: {
    marginLeft: 5,
    width: 15,
    height: 15,
    alignSelf: 'center',
  },
})

export default CategoriesList
