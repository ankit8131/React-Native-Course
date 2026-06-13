// import { Slot } from "expo-router";
// import React from "react";
// import "../global.css";

// // const properties = [
// //   {
// //     id: '1',
// //     title: 'Modern Villa',
// //     city: 'Mumbai',
// //     price: 'Rs.1.2cr'
// //   },
// //   {
// //     id: '2',
// //     title: 'Sea View Flat',
// //     city: 'Mumbai',
// //     price: 'Rs.1.32cr'
// //   },
// //   {
// //     id: '3',
// //     title: 'Studio Loft',
// //     city: 'Bangalore',
// //     price: 'Rs.1.42cr'
// //   }
// // ]

// export default function RootLayout() {
//   return (
//     // <SafeAreaView className="bg-white flex-1 p-4">
//     //   <View>
//     //     <Text>FirstClub</Text>
//     //     <TextInput placeholder="Search City.." placeholderTextColor="grey"
//     //       style={{
//     //         borderWidth: 1,
//     //         borderColor: "white",
//     //         borderRadius: 8,
//     //         padding: 10,
//     //         marginTop: 12
//     //       }}
//     //     ></TextInput>

//     //     <TouchableOpacity
//     //       style={{
//     //         backgroundColor: "blue",
//     //         padding: 10,
//     //         alignItems: "center",
//     //         borderRadius: 8,
//     //         marginTop: 12
//     //       }}
//     //       onPress={() => alert("Searching")}
//     //     >
//     //       <Text style={{ color: "white", fontWeight: "bold" }}>Search</Text>
//     //     </TouchableOpacity>
//     //     <FlatList
//     //       data={properties}
//     //       keyExtractor={(item)=>item.id}
//     //       style={{
//     //         marginTop:12,
//     //       }}
//     //       renderItem={({item})=>
//     //         ( <View>
//     //           <Text>{item.title}</Text>
//     //         </View>)
           
//     //         }

//     //      />


//     //   </View>
//     // </SafeAreaView>)
//     <Slot/>)
// }

import { ClerkProvider } from '@clerk/expo'
import { tokenCache } from '@clerk/expo/token-cache'
import { Slot } from 'expo-router'
import '../global.css'

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <Slot />
    </ClerkProvider>
  )
}
