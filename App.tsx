import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppFonts } from './src/hooks/useAppFonts';
import AppNavigation from './src/navigation/Navigation';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white',
  },
});

const Root = () => {
  const [appIsReady, setAppIsReady] = useState(false);
  const { fontsLoaded } = useAppFonts();

  useEffect(() => {
    if (fontsLoaded) {
      setAppIsReady(true);
    }
  }, [fontsLoaded]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.root} onLayout={onLayoutRootView}>
      <AppNavigation />
    </View>
  );
};

const App = () => {
  return <Root />;
};

export default App;
