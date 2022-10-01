import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NativeModuleDemo from './src/NativeModuleDemo';

const App = () => {
  return (
    <NavigationContainer>
      <NativeModuleDemo />
    </NavigationContainer>
  );
};

export default App;
