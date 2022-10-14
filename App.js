import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';
import { Text, View, SafeAreaView, Button } from 'react-native';
import useStore from './src/store'

import { BannerAd, BannerAdSize, TestIds, InterstitialAd, AdEventType, RewardedInterstitialAd, RewardedAdEventType } from 'react-native-google-mobile-ads';
import { useState, useEffect } from 'react';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import Keyboard from './src/components/Keyboard';
import * as Sentry from 'sentry-expo';

Sentry.init({
  enableNative: true,
  dsn: 'https://7ac5af495c9b4ab9bf42732f7fac8f63@o4503984009707520.ingest.sentry.io/4503984010625024',
  enableInExpoDevelopment: true,
  debug: false, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

const interstitial = InterstitialAd.createForAdRequest(TestIds.INTERSTITIAL, {
  requestNonPersonalizedAdsOnly: true
});

export default function App() {
  try {
    const [interstitialLoaded, setInterstitialLoaded] = useState(false);

    const loadInterstitial = () => {
      const unsubscribeLoaded = interstitial.addAdEventListener(
        AdEventType.LOADED,
        () => {
          setInterstitialLoaded(true);
        }
      );

      const unsubscribeClosed = interstitial.addAdEventListener(
        AdEventType.CLOSED,
        () => {
          setInterstitialLoaded(false);
          interstitial.load();
        }
      );

      interstitial.load();

      return () => {
        unsubscribeClosed();
        unsubscribeLoaded();
      }
    }

    useEffect(() => {
      const unsubscribeInterstitialEvents = loadInterstitial();

      return () => {
        unsubscribeInterstitialEvents();
      };
    }, [])

    const result = useStore(state => state.result)
    const firstNumber = useStore(state => state.firstNumber)
    const operation = useStore(state => state.operation)
    const secondNumber = useStore(state => state.secondNumber)

    useEffect(() => {
      if (result != '' && interstitialLoaded) {
        interstitial.show()
      }
    }, [result])


    let [fontsLoaded] = useFonts({
      Inter_700Bold,
      Inter_400Regular
    });

    if (!fontsLoaded) {
      return null;
    }

    const operationSymbol = () => {
      switch (operation) {
        case "+":
          return 'plus'
          break
        case "-":
          return 'minus'
          break
        case "x":
          return 'times'
          break
        case "/":
          return 'divide'
          break
      }
    }

    return (
      <SafeAreaView className="flex flex-col" style={{backgroundColor: '#23222D'}}>
        <View className="flex basis-2/5 justify-end items-end p-8">
          <View className='flex flex-row items-center pr-1'>
            <Text className='text-white pr-4 text-2xl tracking-widest'>{firstNumber}</Text>
            <FontAwesome5 name={operationSymbol()} size={18} color='#FF6471' />
            <Text className='text-white pl-4 text-2xl tracking-widest'>{secondNumber}</Text>
          </View>
          <View className='flex flex-row'>
            <Text className='text-white text-5xl' style={{fontFamily: 'Inter_700Bold'}}>{result}</Text>
          </View>
        </View>
        <Keyboard />
      </SafeAreaView>
    );
  } catch (error) {
    Sentry.Native.captureException(error)
  }
}
