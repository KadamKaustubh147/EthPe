import React from 'react';
import { Stack } from 'expo-router';

const TabsLayout: React.FC = () => {
    return (
        <Stack screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="home" />
            <Stack.Screen name="profile" />
        </Stack>
    );
};

export default TabsLayout;
