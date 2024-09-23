import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { colors } from "../../../config";
import {
  ProfileScreen,
  ScanScreen,
  ShipmentsScreen,
  WalletScreen,
} from "../../../app/screens";
import {
  ProfileIcon,
  ScanIcon,
  ShipmentsIcon,
  WalletIcon,
} from "../../../assets/svg";

const Tab = createBottomTabNavigator();

type TabParamList = {
  Shipments: undefined;
  Scan: undefined;
  Wallet: undefined;
  Profile: undefined;
};

const screenOptions = ({ route }: { route: { name: keyof TabParamList } }) => {
  const icons = {
    Shipments: ShipmentsIcon,
    Scan: ScanIcon,
    Wallet: WalletIcon,
    Profile: ProfileIcon,
  };

  const IconComponent = icons[route.name];

  return {
    tabBarIcon: ({ size, color }: { size: number; color: string }) => (
      <IconComponent color={color} size={size} />
    ),
  };
};

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.darkGray,
    }}
  >
    <Tab.Screen
      name="Shipments"
      component={ShipmentsScreen}
      options={screenOptions}
    />
    <Tab.Screen name="Scan" component={ScanScreen} options={screenOptions} />
    <Tab.Screen
      name="Wallet"
      component={WalletScreen}
      options={screenOptions}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={screenOptions}
    />
  </Tab.Navigator>
);

export default TabNavigator;
