import React, { useState, useRef } from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView, FlatList, Animated } from 'react-native'

import { COLORS, SIZES, FONTS, icons } from '../constants'

// dummy data
const confirmStatus = 'C'
const pendingStatus = 'P'

let categoriesData = [
  {
    id: 1,
    name: 'Education',
    icon: icons.education,
    color: COLORS.yellow,
    expenses: [
      {
        id: 1,
        title: 'Tuition Fee',
        description: 'Tuition fee',
        location: "ByProgrammers' tuition center",
        total: 100.0,
        status: pendingStatus,
      },
      {
        id: 2,
        title: 'Arduino',
        description: 'Hardward',
        location: "ByProgrammers' tuition center",
        total: 30.0,
        status: pendingStatus,
      },
      {
        id: 3,
        title: 'Javascript Books',
        description: 'Javascript books',
        location: "ByProgrammers' Book Store",
        total: 20.0,
        status: confirmStatus,
      },
      {
        id: 4,
        title: 'PHP Books',
        description: 'PHP books',
        location: "ByProgrammers' Book Store",
        total: 20.0,
        status: confirmStatus,
      },
    ],
  },
  {
    id: 2,
    name: 'Nutrition',
    icon: icons.food,
    color: COLORS.lightBlue,
    expenses: [
      {
        id: 5,
        title: 'Vitamins',
        description: 'Vitamin',
        location: "ByProgrammers' Pharmacy",
        total: 25.0,
        status: pendingStatus,
      },

      {
        id: 6,
        title: 'Protein powder',
        description: 'Protein',
        location: "ByProgrammers' Pharmacy",
        total: 50.0,
        status: confirmStatus,
      },
    ],
  },
  {
    id: 3,
    name: 'Child',
    icon: icons.baby_car,
    color: COLORS.darkgreen,
    expenses: [
      {
        id: 7,
        title: 'Toys',
        description: 'toys',
        location: "ByProgrammers' Toy Store",
        total: 25.0,
        status: confirmStatus,
      },
      {
        id: 8,
        title: 'Baby Car Seat',
        description: 'Baby Car Seat',
        location: "ByProgrammers' Baby Care Store",
        total: 100.0,
        status: pendingStatus,
      },
      {
        id: 9,
        title: 'Pampers',
        description: 'Pampers',
        location: "ByProgrammers' Supermarket",
        total: 100.0,
        status: pendingStatus,
      },
      {
        id: 10,
        title: 'Baby T-Shirt',
        description: 'T-Shirt',
        location: "ByProgrammers' Fashion Store",
        total: 20.0,
        status: pendingStatus,
      },
    ],
  },
  {
    id: 4,
    name: 'Beauty & Care',
    icon: icons.healthcare,
    color: COLORS.peach,
    expenses: [
      {
        id: 11,
        title: 'Skin Care product',
        description: 'skin care',
        location: "ByProgrammers' Pharmacy",
        total: 10.0,
        status: pendingStatus,
      },
      {
        id: 12,
        title: 'Lotion',
        description: 'Lotion',
        location: "ByProgrammers' Pharmacy",
        total: 50.0,
        status: confirmStatus,
      },
      {
        id: 13,
        title: 'Face Mask',
        description: 'Face Mask',
        location: "ByProgrammers' Pharmacy",
        total: 50.0,
        status: pendingStatus,
      },
      {
        id: 14,
        title: 'Sunscreen cream',
        description: 'Sunscreen cream',
        location: "ByProgrammers' Pharmacy",
        total: 50.0,
        status: pendingStatus,
      },
    ],
  },
  {
    id: 5,
    name: 'Sports',
    icon: icons.sports_icon,
    color: COLORS.purple,
    expenses: [
      {
        id: 15,
        title: 'Gym Membership',
        description: 'Monthly Fee',
        location: "ByProgrammers' Gym",
        total: 45.0,
        status: pendingStatus,
      },
      {
        id: 16,
        title: 'Gloves',
        description: 'Gym Equipment',
        location: "ByProgrammers' Gym",
        total: 15.0,
        status: confirmStatus,
      },
    ],
  },
  {
    id: 6,
    name: 'Clothing',
    icon: icons.cloth_icon,
    color: COLORS.red,
    expenses: [
      {
        id: 17,
        title: 'T-Shirt',
        description: 'Plain Color T-Shirt',
        location: "ByProgrammers' Mall",
        total: 20.0,
        status: pendingStatus,
      },
      {
        id: 18,
        title: 'Jeans',
        description: 'Blue Jeans',
        location: "ByProgrammers' Mall",
        total: 50.0,
        status: confirmStatus,
      },
    ],
  },
]

function Home() {
  const categoryListHeightAnimationValue = useRef(new Animated.Value(95)).current

  const [viewMode, setViewMode] = useState('chart')
  const [categories, setCategories] = useState(categoriesData)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showMoreToogle, setShowMoreToogle] = useState(false)

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

  const renderCategory = () => (
    <View style={styles.categoriesContainer}>
      <View>
        <Text style={{ color: COLORS.primary, ...FONTS.h3 }}>CATEGORIES</Text>
        <Text style={{ color: COLORS.primary, ...FONTS.body4 }}>Total</Text>
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.buttonCategory, backgroundColor: viewMode === 'chart' ? COLORS.secondary : null }}
          onPress={() => setViewMode('chart')}
        >
          <Image
            source={icons.chart}
            resizeMode='contain'
            style={{ ...styles.buttonImage, tintColor: viewMode === 'chart' ? COLORS.white : COLORS.darkgray }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.buttonCategory, backgroundColor: viewMode === 'list' ? COLORS.secondary : null }}
          onPress={() => setViewMode('list')}
        >
          <Image
            source={icons.menu}
            resizeMode='contain'
            style={{ ...styles.buttonImage, tintColor: viewMode === 'list' ? COLORS.white : COLORS.darkgray }}
          />
        </TouchableOpacity>
      </View>
    </View>
  )

  const renderCategoryList = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity style={{ ...styles.categoryItem, ...styles.shadow }} onPress={() => setSelectedCategory(item)}>
        <Image
          source={item.icon}
          style={{
            width: 20,
            height: 20,
            tintColor: item.color,
          }}
        />
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
            if (showMoreToogle) {
              Animated.timing(categoryListHeightAnimationValue, {
                toValue: 95,
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
            setShowMoreToogle(!showMoreToogle)
          }}
        >
          <Text style={{ ...FONTS.body4 }}>{showMoreToogle ? 'LESS' : 'MORE'}</Text>
          <Image style={styles.arrowStyle} source={showMoreToogle ? icons.up_arrow : icons.down_arrow} />
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {renderNavbar()}
      {renderHeader()}
      {renderCategory()}

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {viewMode === 'list' && <View>{renderCategoryList()}</View>}
      </ScrollView>
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

  categoriesContainer: {
    flexDirection: 'row',
    padding: SIZES.padding,
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  buttonCategory: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  buttonImage: {
    width: 20,
    height: 20,
  },

  categoryItem: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: SIZES.radius,
    paddingHorizontal: SIZES.padding,
    borderRadius: 5,
    backgroundColor: COLORS.white,
  },

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

export default Home
