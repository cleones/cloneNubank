import React from 'react';

import {Container, Top, Logo, Title} from './styles';
import logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {textColor} from '~/styles/colors';

const Header = () => (
  <Container>
    <Top>
      <Logo source={logo} />
      <Title>Cleones</Title>
    </Top>
    <Icon name="keyboard-arrow-down" size={26} color={textColor} />
  </Container>
);

export default Header;
