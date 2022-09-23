import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {CustomModule} from './CustomModule';

const App = () => {
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    const fetchDeviceId = async () => {
      const id = await CustomModule.getDeviceId();
      setDeviceId(id);
    };

    fetchDeviceId();
  }, []);

  useEffect(() => {
    CustomModule.showToast();
  }, []);

  return (
    <View>
      <Text>Hello World!</Text>
      <Text>Device id: {deviceId}</Text>
    </View>
  );
};

export default App;
