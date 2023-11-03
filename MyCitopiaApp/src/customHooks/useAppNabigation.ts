import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamsList, TabBarNavigationParamsList} from '../../App';

export const useAppNavigation = () => {
  return useNavigation<NavigationProp<RootStackParamsList>>();
};

export const useAppTabNavigation = () => {
  return useNavigation<NavigationProp<TabBarNavigationParamsList>>();
};
