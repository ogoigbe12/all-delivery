import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import { getDishById } from '@/assets/data/restaurant';
import { Colors } from '@/src/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';

const Dish = () => {
  const {id} = useLocalSearchParams();
  const item = getDishById(+id)

  const addToCart = () => {

  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}} edges={['bottom']}>
    <View style={styles.container}>
      <Image source={item?.img} style={styles.image}/>
      <View style={{padding: 20}}>
        <Text style={styles.dishName}>{item?.name}</Text>
        <Text style={styles.dishInfo}>{item?.info}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.fullButton} onPress={addToCart}>
        <Text style={styles.footerText}>Add for ${item?.price}</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  image: {
    width: '100%',
    height: 300
  },
  dishName: {
    fontSize: 24,
     fontWeight: 'bold', 
     marginBottom: 8
    },
    dishInfo: {
      fontSize: 16,
       color: Colors.mediumDark
      },
      footer:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: -10},
        shadowOpacity: 0.1,
        shadowRadius: 10,
        paddingTop: 20

      },
      footerText:{
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
      },
      fullButton: {
        backgroundColor: Colors.primary,
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
      },
})
export default Dish