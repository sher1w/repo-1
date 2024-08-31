// import React from 'react';
// import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { classNames } from 'nativewind';

// // Main component
// export default function KafeKoffeeKnight() {
//   return (
//     <View className="flex-1 bg-black">
//       {/* Header with Back Button and Logo */}
//       <View className="flex-row items-center p-4">
//         <TouchableOpacity className="p-2">
//           {/* Add your back button icon here */}
//         </TouchableOpacity>
//         <View className="flex-1 items-center">
//         <Image
//   source={require('../assets/images/icon.png')}
//   className="w-20 h-20 rounded-lg bg-black"
//   resizeMode="contain"
//   accessibilityLabel="My Icon"
// />
//           <Text className="text-white text-3xl font-bold mt-2">  {/* Increased size to 3xl */}
//             Kafe Koffee Knight
//           </Text>
//         </View>
//       </View>

//       {/* Scrollable Content */}
//       <ScrollView className="px-4">
//         {/* First Image and Text */}
//         <View className="mb-6">
//           {/* Uncomment and replace the URL if you want to add the image */}
//           { <Image
//             source={require('../assets/images/homeimg/img1.jpg')} // Replace with your image URL
//             className="w-full h-48 rounded-lg"
//           /> }
          
//           <Text className="text-white text-2xl font-bold mt-2">  {/* Increased size to 3xl */}
//             OUR WHY
//           </Text>
//           <Text className="text-gray-400 text-lg mt-4">  {/* Increased size to lg */}
//           At Kafe Koffe Knigth, we believe that coffee is more than just a beverage; 
//           it's a way to connect, share, and create memories. Our passion for coffee started with a simple mission: 
//           to bring people together over a cup of the finest brews.
//            We are dedicated to sourcing ethically grown beans and crafting each cup with love and care, ensuring that every sip tells a story of sustainability and community.
//           </Text>
//         </View>

//         {/* Second Image and Text */}
//         <View className="mb-6">
//           {/* Uncomment and replace the URL if you want to add the image */}
//           {/* <Image
//             source={{ uri: 'https://example.com/image2.jpg' }} // Replace with your image URL
//             className="w-full h-48 rounded-lg"
//           /> */}
//           <Text className="text-white text-2xl font bold mt-2">
// WHY US            
//             </Text>
//           <Text className="text-gray-400 text-lg mt-4">  {/* Increased size to lg */}
//           Choosing Kafe Koffee Knigth means supporting a local business that prioritizes quality and connection.
//            We pride ourselves on our cozy atmosphere, where every customer is treated like family.
//             Our skilled baristas are not just experts in their craft; they are passionate about sharing their knowledge and love for coffee. 
//           Whether you're a casual drinker or a coffee connoisseur, our diverse menu is designed to cater to all tastes.
//           </Text>
//         </View>
//         {/* Third Image and Text */}
//         <View className="mb-6">
//           {/* Uncomment and replace the URL if you want to add the image */}
//           {/* <Image
//             source={{ uri: 'https://example.com/image3.jpg' }} // Replace with your image URL
//             className="w-full h-48 rounded-lg"
//           /> */}<Text className="text-white text-2xl font bold mt-2">HOW WE HELP</Text>
//           <Text className="text-gray-400 text-lg mt-4">  {/* Increased size to lg */}
//           We are committed to making a positive impact in our community and the environment. 
//           By sourcing our coffee from fair-trade farms, we ensure that farmers receive fair wages and work in safe conditions. Additionally, we offer workshops and tastings to educate our customers about the coffee-making process, empowering them to appreciate the nuances of each cup. 
//           Our goal is to foster a community of coffee lovers who care about the origins of their brew.
//           </Text>
//         </View>

//         <View className="mb-6">
//           {/* Uncomment and replace the URL if you want to add the image */}
//           {/* <Image
//             source={{ uri: 'https://example.com/image3.jpg' }} // Replace with your image URL
//             className="w-full h-48 rounded-lg"
//           /> */}
//           <Text className="text-white text-2xl font bold mt-4">TESTIMONIALS</Text>
//           <Text className="text-gray-400 text-lg mt-4">  {/* Increased size to lg */}
// "The moment I walked into Kafe Koffee, I felt at home. The ambiance is perfect, and the staff is incredibly friendly. The coffee is the best I've ever had!"
// — Angad Sawkar 
// </Text>
//  <Text className="text-gray-400 text-lg mt-4"> 
// "I love knowing that my coffee is sourced ethically. The quality is unmatched, and I always look forward to my visits!"
// — Mark T.
// </Text>
// <Text className="text-grey-400 text-lg mt-4">
// "Attending the coffee tasting workshop was an eye-opener! I learned so much and met wonderful people. Highly recommend!"
// — Emily R.
//  </Text>
//         </View>

//       </ScrollView>
//     </View>
//   );
// }