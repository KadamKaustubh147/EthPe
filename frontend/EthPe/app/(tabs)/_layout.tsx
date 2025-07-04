import React from 'react';
import { Tabs } from 'expo-router';

const TabsLayout: React.FC = () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
};

export default TabsLayout;
