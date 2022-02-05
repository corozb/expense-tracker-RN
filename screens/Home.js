import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'

import { COLORS } from '../constants'
import { categoriesData } from '../utils/data.js'
import Navbar from './Navbar'
import Header from './Header'
import CategoriesHeader from './CategoriesHeader'
import CategoriesList from './CategoriesList'
import IncomingExpenses from './IncomingExpenses'
import PieChart from './PieChart'
import ExpensesList from './ExpensesList'

const Home = () => {
  const [categories, setCategories] = useState(categoriesData)
  const [viewMode, setViewMode] = useState('chart')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [showMoreToggle, setShowMoreToggle] = useState(false)

  const processCategoryDataToDisplay = () => {
    // Filter expenses with "Confirmed" status
    let chartData = categories.map((item) => {
      let confirmExpenses = item.expenses.filter((a) => a.status == 'C')
      var total = confirmExpenses.reduce((a, b) => a + (b.total || 0), 0)

      return {
        name: item.name,
        y: total,
        expenseCount: confirmExpenses.length,
        color: item.color,
        id: item.id,
      }
    })

    // filter out categories with no data/expenses
    let filterChartData = chartData.filter((a) => a.y > 0)

    // Calculate the total expenses
    let totalExpense = filterChartData.reduce((a, b) => a + (b.y || 0), 0)

    // Calculate percentage and repopulate chart data
    let finalChartData = filterChartData.map((item) => {
      let percentage = ((item.y / totalExpense) * 100).toFixed(0)
      return {
        label: `${percentage}%`,
        y: Number(item.y),
        expenseCount: item.expenseCount,
        color: item.color,
        name: item.name,
        id: item.id,
      }
    })

    return finalChartData
  }

  const selectCategoryByName = (name) => {
    let category = categories.filter((a) => a.name == name)
    setSelectedCategory(category[0])
  }

  const props = {
    categories,
    viewMode,
    setViewMode,
    selectedCategory,
    setSelectedCategory,
    showMoreToggle,
    setShowMoreToggle,
    categoryDisplay: processCategoryDataToDisplay,
    selectByName: selectCategoryByName,
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.lightGray2 }}>
      {/* Nav bar section */}
      <Navbar />

      {/* Header section */}
      <Header />

      {/* Category Header Section */}
      <CategoriesHeader {...props} />

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {viewMode == 'list' && (
          <View>
            <CategoriesList {...props} />
            <IncomingExpenses selectedCategory={selectedCategory} />
          </View>
        )}
        {viewMode == 'chart' && (
          <View>
            <PieChart {...props} />
            <ExpensesList {...props} />
          </View>
        )}
      </ScrollView>
    </View>
  )
}

export default Home
