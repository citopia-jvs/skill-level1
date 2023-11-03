import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({children}: LayoutProps) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Layout;
