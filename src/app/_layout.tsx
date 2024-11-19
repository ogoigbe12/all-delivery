import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import "react-native-reanimated";
import CustomHeader from "../components/CustomHeader";
import React from "react";
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Colors } from "../constants/Colors";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";



export const unstable_settings = {
  initialRouteName: 'index'
}


export default function RootLayoutNav() {
 const navigation = useNavigation();
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
      </Stack>
      </BottomSheetModalProvider>
      </GestureHandlerRootView>
  );
}
