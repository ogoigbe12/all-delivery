import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { forwardRef, useCallback, useMemo } from 'react'
import { BottomSheetBackdrop, BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet'
import { Colors } from '../constants/Colors'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export type Ref = BottomSheetModal

const BottomSheet = forwardRef<Ref>((props, ref)  => {
    const snapPoints = useMemo(() => ['50%'],[])
    const renderBackDrop = useCallback((props: any) => <BottomSheetBackdrop appearsOnIndex={1} disappearsOnIndex={-1}{... props} />,[])
    const {dismiss} = useBottomSheetModal();
  return (
    <BottomSheetModal 
    handleIndicatorStyle= {{display: 'none'}}
    backgroundStyle={{borderRadius: 0, backgroundColor: Colors.lightGrey}}
    overDragResistanceFactor={0}
    backdropComponent={renderBackDrop}
    ref={ref} snapPoints={snapPoints}>
        <View style={styles.contextContainer}>
            <View style={styles.toggle}>

              <TouchableOpacity style={styles.toggleActive}>
                <Text style= {styles.activeText}>Delivery</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.toggleInactive}>
                <Text style= {styles.inactiveText}>Pickup</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.subHeader}>Your Location</Text>
            <Link href={'/'} asChild>
            <TouchableOpacity>
              <View style= {styles.items}>
                <Ionicons name='location-outline' size={20} color={Colors.medium} />
                <Text style={{flex : 1}}>Current Location</Text>
                <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
              </View>
            </TouchableOpacity>
            </Link>
            <Text style={styles.subHeader}>Arrival Time</Text>
            <TouchableOpacity>
              <View style= {styles.items}>
                <Ionicons name='stopwatch-outline' size={20} color={Colors.medium} />
                <Text style={{flex : 1}}>Now</Text>
                <Ionicons name='chevron-forward' size={20} color={Colors.primary} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => dismiss()}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
        </View>
    </BottomSheetModal>
  )
})

const styles= StyleSheet.create({
  contextContainer: {
    flex: 1
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  activeText: {
    color: '#fff',
    fontWeight: '700',
  },
  inactiveText: {
    color: Colors.primary,
  },
  toggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    marginBottom: 32
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30

  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30
  },
  subHeader:{
    fontSize: 16,
    fontWeight: '600',
    margin: 16,
  },
  items: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1
  }
})

export default BottomSheet