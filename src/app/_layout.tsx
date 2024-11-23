import { Stack, useNavigation, useRouter } from "expo-router";
import "react-native-reanimated";
import CustomHeader from "../components/CustomHeader";
import React from "react";
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";


export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: 'index',
};


export default function RootLayoutNav() {
 const navigation = useNavigation();
 const router = useRouter();
  return (
    <GestureHandlerRootView>
        <BottomSheetModalProvider>
      <Stack>
        <Stack.Screen name="index" options={{header: () => <CustomHeader/>}}/>
        <Stack.Screen name= "(modal)/filter" options={{
          presentation: 'modal',
          headerTitle: 'Filters',
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.lightGrey,
            
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
        }} />
         <Stack.Screen name= "(modal)/location-search" options={{
          presentation: 'fullScreenModal',
          headerTitle: 'Select Location',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="close-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
        }} />
        <Stack.Screen name= "(modal)/dish" options={{
          presentation: 'modal',
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity 
            style={{backgroundColor: '#fff', borderRadius: 20, padding: 6}}
            onPress={() => {router.push('/details')}}>
      
              <Ionicons name="close-outline" size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
          
        }} />
        <Stack.Screen name= "basket" options={{
  
          headerTitle: 'Basket',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity 
            onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={28} color={Colors.primary} />
            </TouchableOpacity>
          )
        }} />
      </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
  );
}
