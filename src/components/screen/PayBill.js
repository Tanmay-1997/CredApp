import { View, Text,SafeAreaView,TouchableOpacity, Touchable ,StyleSheet} from 'react-native';
import React from 'react';
import LottieView from "lottie-react-native";
import Pulse from 'react-native-pulse'


const PayBill = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <View style={{ position: 'absolute', alignSelf: 'center', top: 180 }}>
      <Pulse color='#585858' numPulses={3} diameter={300} speed={20} duration={2000} />
      <LottieView
        source={require("../../assets/logo/data.json")}
        style={styles.animation}
      />
      </View>

      <View>
      <Text style={styles.score}>pay your credit card{'\n'}bills. win rewards.</Text>
      </View>

      <View style={styles.scoreHeader}>
      <TouchableOpacity
       style={styles.members}
       onPress={()=>navigation.navigate('MobileNo')}
      >
          <Text style={styles.members}>continue</Text>

      </TouchableOpacity>
      </View>

      {/*<View style={styles.scoreHeader}>
        <Text style={styles.members}>7 million members pay their bill on{'\n'}CRED</Text>
        <Image
          source={require('../../assets/images/medal.png')}
          style={styles.medal}
        />
      </View>
      <View style={{ borderTopWidth: 1, borderColor: '#585858', margin: 7 }}>
        <Text style={styles.creditBureau}>contacting RBI approved credit bureau</Text>
      </View>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#2F3230',
      flex:1,
      justifyContent:'center'
      //width: '100%',
      //height: '100%',
    },
    animation: {
        width: 100,
        height: 100,
      },
    score: {
      color: '#ffffff',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      top:200
    },
    credit: {
      width: 120,
      height: 120,
      alignSelf: 'center',
      marginTop: 140,
    },
    members: {
      margin: 4,
      color: '#FFFFFF',
      fontWeight:'900',
      alignItems:'center',
      fontSize:20
      
    },
    scoreHeader: {
      backgroundColor: 'blue',
      borderRadius: 35,
      margin: 50,
      top:215,
    paddingTop: 4,
    paddingBottom: 5,
    paddingLeft: 50,
    paddingRight: 50,
    backgroundColor: '#1e90ff',
    shadowColor: 'pink',
    shadowOpacity: 0.2,
    elevation:12,
    shadowRadius: 10 ,
    shadowOffset : { width: 2, height: 10},
      
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
  

export default PayBill;
