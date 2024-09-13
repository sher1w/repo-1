import React from 'react';
import { ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SlidingImages from '../app/(tabs)/components/Carousel'; // Adjust path as needed

const Menu = () => {
  // Main slider images
  const mainSliderImages = [
    require('../assets/images/Gallery/Carousalt1.jpg'),
    require('../assets/images/Gallery/Carousalt2.jpg'),
    require('../assets/images/Gallery/Carouselt3.jpg'),
  ];

  // Separate images for each additional row
  const row1Images = [
    require('../assets/images/Gallery/Carousalt1.jpg'),
    require('../assets/images/Gallery/Carousalt2.jpg'),
    require('../assets/images/Gallery/Carouselt3.jpg'),
  ];

  const row2Images = [
    require('../assets/images/Gallery/Carousalt1.jpg'),
    require('../assets/images/Gallery/Carousalt2.jpg'),
    require('../assets/images/Gallery/Carouselt3.jpg'),
  ];

  const row3Images = [
    require('../assets/images/Gallery/Carousalt1.jpg'),
    require('../assets/images/Aboutimg/about2.png'),
    require('../assets/images/Gallery/Carousalt2.jpg'),
    require('../assets/images/Aboutimg/about1.png'),
  ];

  // Add more rows as needed

  return (
    <SafeAreaView className="bg-black flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      >
        {/* Main Sliding Images */}
        <View className="flex-1 mb-4">
          <SlidingImages images={mainSliderImages} isMainSlider={true} />
        </View>

        {/* Additional Rows of Sliding Images with Separate Images */}
        <View className="mb-4 flex-row">
          <SlidingImages images={row1Images} />
        </View>

        <View className="mb-4 flex-row">
          <SlidingImages images={row2Images} />
        </View>

        <View className="mb-4 flex-row">
          <SlidingImages images={row3Images} />
        </View>

        {/* Add more rows as needed */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;
