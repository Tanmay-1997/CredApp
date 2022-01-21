import { View, Text ,StyleSheet} from 'react-native';
import React from 'react';
import Splash from './src/components/screen/Splash';
import RootNavigation from './src/components/RootNavigation/RootNavigation';

const App = () => {
  return (
    <View style={{flex:1}}> 
     <RootNavigation />
    </View>
  );
};

export default App;
