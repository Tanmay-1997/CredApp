import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, Image } from 'react-native'
import { HEIGHT, WIDTH } from '../../utils';
import Pulse from 'react-native-pulse'

const PayScreen = (props) => {
  setTimeout(() => props.navigation.navigate('HomeScreen'), 5000)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.score}>fetching your{'\n'}credit score</Text>
      <Text style={styles.eligibility}>hang on,while we check{'\n'}your eligibility</Text>
      <View style={{ position: 'absolute', alignSelf: 'center', top: 350 }}>
        <Pulse color='#585858' numPulses={3} diameter={320} speed={20} duration={2000}/>
      </View>
      <Image
        source={require('../../assets/images/credit-card.png')}
        style={styles.credit}
      />
      <View style={styles.scoreHeader}>
        <Text style={styles.members}>7 million members pay their bill on{'\n'}CRED</Text>
        <Image
          source={require('../../assets/images/medal.png')}
          style={styles.medal}
        />
      </View>
      <View style={{ borderTopWidth: 1, borderColor: '#585858', margin: 7 }}>
        <Text style={styles.creditBureau}>contacting RBI approved credit bureau</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2F3230',
    width: '100%',
    height: '100%',
  },
  score: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 25
  },
  eligibility: {
    color: '#ffffff',
    fontSize: 17,
    textAlign: 'center',
    margin: 20,
    color: '#585858'
  },
  credit: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 140,
  },
  members: {
    margin: 10,
    color: '#FFFFFF',
    fontSize: 15,
    paddingHorizontal: 10
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#585858',
    backgroundColor: '#585858',
    borderRadius: 10,
    margin: 20,
    marginTop: 85,
  },
  medal: {
    width: 25,
    height: 25,
    margin: 10,
  },
  creditBureau: {
    color: '#585858',
    marginTop: 20,
    marginLeft: 23,
    fontSize: 20
  },
})

export default PayScreen;