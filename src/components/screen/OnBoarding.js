import { View, Text,StyleSheet,Image, Button,TouchableOpacity, Touchable } from 'react-native';
import React from 'react';
import Onboarding from 'react-native-onboarding-swiper';
import PayScreen from './PayScreen';
import PayBill from './PayBill';
const OnBoarding = ({navigation}) => {

  const Skip = ({...props})=>(
    <Button
     title='skip'
     color='green'
     {...props}
    />
  );

  const Next = ({...props})=>(
    <Button
     title='Next'
     color='green'
     {...props}
    />
  );

  const Done = ({...props})=>(
    <TouchableOpacity
       style={{marginHorizontal:8}}
       {...props}
    >
    <Text style={{fontSize:15,fontWeight:'bold',color:'red'}}>Done</Text> 
    </TouchableOpacity>
  );
  return (
    <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    onSkip={()=>navigation.replace('PayBill')}
    onDone={()=>navigation.navigate('PayBill')}
  pages={[
    {
      backgroundColor: 'pink',
      image: <Image
      style={styles.img1} 
      
      source={require('../../assets/images/ff1.png')} />,
      title:'kill the bil get reward every time you pay',
      subtitle: 'get reward from ixiogo,cultfitd more by paying your credit card bill',
    },
    {
        backgroundColor: 'white',
        image: <Image
        style={styles.img1}
        source={require('../../assets/images/creditscore.jpg')} />,
        title: 'stay with your credit score',
        subtitle: 'as a member you can get access to reward and exclusive offer',
    },
    {
      backgroundColor: 'white',
      image: <Image
      style={styles.img1}
      source={require('../../assets/images/wallet.jpg')} />,
      title: 'Onboarding',
      subtitle: 'Done with React Native Onboarding Swiper',
  },
  ]}
/>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
    container:{

    },
    img1:{
      width:340,
      height:350
    }

 })