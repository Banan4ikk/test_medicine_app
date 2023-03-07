import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import React, { useCallback, useEffect, useState } from 'react';
import { useAppFonts } from './src/hooks/useAppFonts';
import { typography } from './src/styles/global';

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
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <SafeAreaView style={styles.root} onLayout={onLayoutRootView}>
      <Text style={typography.defaultFontFamily}>Hello world</Text>
    </SafeAreaView>
  );
};

const App = () => {
  return <Root />;
};

export default App;
