import {View} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store/store';
import Navigator from './navigators/main';

const App = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <Navigator />
      </View>
    </Provider>
  );
};

export default App;
