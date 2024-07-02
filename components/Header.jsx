import { View, Text, Platform } from 'react-native'
import React from 'react'
import { BannerAd, BannerAdSize, TestIds, useForeground } from 'react-native-google-mobile-ads';

const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const Header = () => {
  const bannerRef = useRef<BannerAd>(null);

  return (
    <View className = "items-center">
        <Text className = "text-5xl text-grass-100 font-pokemon">PokéPomo</Text>
        <BannerAd ref={bannerRef} unitId={adUnitId} size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER} />
    </View>
  )
}

export default Header