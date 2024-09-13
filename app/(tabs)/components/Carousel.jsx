import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions, FlatList, TouchableOpacity, Modal, Text } from 'react-native';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/MaterialIcons';

const StyledImage = styled(Animated.Image);
const Button = styled(TouchableOpacity);

const SlidingImages = ({ images, isMainSlider = false }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const translateXAnim = useRef(new Animated.Value(0)).current;
  const { width } = Dimensions.get('window');

  // Set image width and height based on whether it's the main slider
  const imageWidth = isMainSlider ? width * 0.9 : width * 0.45; // Main slider is 90%, others are 45%
  const imageHeight = (imageWidth / 250) * 200; // Maintain 200x400 aspect ratio

  useEffect(() => {
    if (isMainSlider) {
      const interval = setInterval(() => {
        nextImage();
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [currentImageIndex, isMainSlider]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    animateImage();
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    animateImage();
  };

  const animateImage = () => {
    translateXAnim.setValue(0);
    Animated.timing(translateXAnim, {
      toValue: -imageWidth,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      translateXAnim.setValue(imageWidth);
      Animated.timing(translateXAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  if (isMainSlider) {
    return (
      <View className="flex justify-center items-center relative">
        <StyledImage
          source={images[currentImageIndex]}
          style={{
            width: imageWidth,
            height: imageHeight,
            transform: [{ translateX: translateXAnim }],
          }}
          resizeMode="cover"
        />
        <View className="absolute flex-row justify-between w-full top-1/2 px-5">
          <Button onPress={prevImage} className="bg-white p-2 rounded shadow-md">
            <Icon name="arrow-back-ios" size={24} color="#000" />
          </Button>
          <Button onPress={nextImage} className="bg-white p-2 rounded shadow-md">
            <Icon name="arrow-forward-ios" size={24} color="#000" />
          </Button>
        </View>
      </View>
    );
  }

  // For additional rows, use FlatList for horizontal scrolling
  return (
    <>
      <FlatList
        data={images}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => openModal(index)}>
            <StyledImage
              source={item}
              style={{ width: imageWidth, height: imageHeight, marginRight: 10 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Modal for expanded view */}
      <Modal visible={isModalVisible} transparent={true} animationType="fade">
        <View className="flex-1 justify-center items-center bg-black bg-opacity-75">
          <StyledImage
            source={images[currentImageIndex]}
            style={{
              width: width * 0.9,
              height: (width * 0.9 / 250) * 200,
            }}
            resizeMode="contain"
          />
          <Button onPress={closeModal} className="absolute top-10 right-10 bg-white p-2 rounded">
            <Icon name="close" size={24} color="#000" />
          </Button>
        </View>
      </Modal>
    </>
  );
};

export default SlidingImages;