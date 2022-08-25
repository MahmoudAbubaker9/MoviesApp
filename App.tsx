import { StatusBar } from 'expo-status-bar';
import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import Movies from './app/screens/Movies';


export default function App() {

  return (
    <>
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Movies/>
    </SafeAreaView>
    {/* <Movies /> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3eeee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
