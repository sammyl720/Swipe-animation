import React, { useEffect, useRef } from 'react'
import { 
  StyleSheet,
  Animated,
  Text,
  View,
PanResponder } from 'react-native'
import { card } from '../../data'
import { Gesture } from '../types/gesture.ts'

interface props {
  data: card[],
  renderCard: React.FC<card>
}

const Deck = ({ data, renderCard}: props) => {
  const position = new Animated.ValueXY()
  
  const panResponder = useRef(PanResponder.create({
    // called any time user touches screen
    // if function return true the pan responder will track the gesture
    onStartShouldSetPanResponder: (event) => true,

    // called whenever user drags their finger on the screen
    // args: event, gesture (has info on type of gesture ie: speed, direction)
    onPanResponderMove: (event, gesture: Gesture ) => {
      // console.log(gesture)
      position.setValue({ x: gesture.dx, y: gesture.dy })
    },

    // called when user releases their finger from screen
    onPanResponderRelease: () => {}
  })).current
  const renderCards = () => {
    return data.map(item => {
      return renderCard(item)
    })
  } 
  return (
    <Animated.View style={position.getLayout() } {...panResponder.panHandlers}>
      { renderCards() }
    </Animated.View>
  )
}

export default Deck

const styles = StyleSheet.create({})
