import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Deck from './src/components/Deck.tsx';
import DATA, { card } from './data.ts'
import { Card, Button } from 'react-native-elements'
export default function App() {

  const renderCard = (item:card) => {
    return (
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}
      >
        <Text style={{ marginBottom: 10 }}> I can customize the card further</Text>
        <Button
          icon={{ name: 'code'}}
          backgroundColor='#03a9f4'
          title='View Now!'
        />
      </Card>
    )
  }
  return (
    <View style={styles.container}>
      <Deck data={DATA} renderCard={renderCard} />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
