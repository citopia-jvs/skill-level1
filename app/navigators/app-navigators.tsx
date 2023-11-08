import React from "react";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { HomeScreen } from "~screens/home-screen";
import { ProfileScreen } from "~screens/profile-screen";
import { HomeSvg } from "~assets/icons/home";

export type BottomTabParamList = {
  homeTab: undefined;
  profileTab: undefined;
};

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const AppStack = ({
  initialRoute,
}: {
  initialRoute: keyof BottomTabParamList;
}) => {
  console.log("Initial route: ", initialRoute);

  return (
    <BottomTab.Navigator
      initialRouteName={initialRoute}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#F7F1ED",
        },
        tabBarShowLabel: false,
      }}
    >
      <BottomTab.Screen
        name="homeTab"
        component={HomeScreen}
        options={{
          headerTitle: "Home",
          tabBarIcon: ({ focused }) => (
            <HomeSvg fill={focused ? "#4F4F4F" : "#ffffff"} />
          ),
        }}
      />
      <BottomTab.Screen
        name="profileTab"
        options={{
          headerTitle: "Profile",
          tabBarIcon: () => <Text>profile</Text>,
        }}
        component={ProfileScreen}
      />
    </BottomTab.Navigator>
  );
};

export type NavigationProps = Partial<
  React.ComponentProps<typeof NavigationContainer>
>;

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer {...props}>
      <AppStack initialRoute={"homeTab"} />
    </NavigationContainer>
  );
};

AppNavigator.displayName = "AppNavigator";
