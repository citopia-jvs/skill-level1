import {Text, View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Home from './screens/Home';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Home />
      </View>
    </Provider>
  );
};

export default App;
