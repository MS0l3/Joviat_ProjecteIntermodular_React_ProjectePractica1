import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import PreferidosScreen from './src/Screen/PreferidosScreen';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <PreferidosScreen />
    </SafeAreaView>
  );
}