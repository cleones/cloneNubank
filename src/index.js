import React from 'react';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import {StatusBar} from 'react-native';
import {primary} from './styles/colors';

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor={primary} />
    <Routes />
  </>
);

export default App;
