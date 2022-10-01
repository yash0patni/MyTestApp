import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {CustomModule} from './nativeModules/CustomModule';
import {CounterModule} from './nativeModules/CounterModule';

const NativeModuleDemo = () => {
  const [deviceId, setDeviceId] = useState('');
  const [message, setMessage] = useState('');

  const fetchDeviceId = async () => {
    const id = await CustomModule.getDeviceId();
    setDeviceId(id);
  };

  const incrementCounter = () => {
    CounterModule.increment(msg => setMessage(msg));
  };

  const decrementCounter = async () => {
    try {
      const msg = await CounterModule.decrement();
      setMessage(msg);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <View style={styles.deviceIdContainer}>
        <Text>{deviceId}</Text>
        <Button title="Get Device Id" onPress={fetchDeviceId} />
      </View>
      <View style={styles.counterContainer}>
        <Text>{message}</Text>
        <Button title="Increment" onPress={incrementCounter} />
        <Button title="Decrement" onPress={decrementCounter} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceIdContainer: {
    marginTop: 20,
  },
  counterContainer: {
    marginTop: 20,
  },
});

export default NativeModuleDemo;
