import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView className='flex-1 flex-row justify-center items-center'>
      <Text>
        <TouchableOpacity onPress={handleLogout} className='p-1 bg-amber-200 rounded-lg'>
          <Text>Logout</Text>
        </TouchableOpacity>
      </Text>
    </SafeAreaView>
  )
}

export default Home