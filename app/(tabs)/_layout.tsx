import { Tabs } from 'expo-router';
import React, {useState} from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { View, StyleSheet } from 'react-native';

import {CustomBottomNav, NAV_ITEMS} from '@/components/CustomBottomNav';

export default function TabLayout() {
  const [activeTab, setActiveTab] = useState('home')

  const handleTabPress = (tabId: string) => {
    setActiveTab(tabId)
  }

  const renderScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'meals':
        return <View>Meals</View>;
      case 'profile':
        return <View>Profile</View>;
      case 'settings':
        return <View>Settings</View>;
      default:
        break;
    }
  } 
  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderScreen()}</View>
      <CustomBottomNav 
        items={NAV_ITEMS}
        activeTab={activeTab}
        onTabPress={handleTabPress}
      />
    </View>
  )
}

// Importing the screen components
import HomeScreen from './index'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1e3ec"
  },
  content: {
    flex: 1,
  }
})