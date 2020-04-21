import React from 'react';

import {Container, TabContainer, TabItem, TabText} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {textColor} from '~/styles/colors';

const Tabs = ({translateY}) => (
  <Container
    style={{
      transform: [
        {
          translateY: translateY.interpolate({
            inputRange: [0, 380],
            outputRange: [0, 30],
            extrapolate: 'clamp',
          }),
        },
      ],
      opacity: translateY.interpolate({
        inputRange: [0, 380],
        outputRange: [1, 0.3],
        extrapolate: 'clamp',
      }),
    }}>
    <TabContainer>
      <TabItem>
        <Icon name="person-add" size={24} color={textColor} />
        <TabText>Indicar amigos</TabText>
      </TabItem>
      <TabItem>
        <Icon name="chat-bubble-outline" size={24} color={textColor} />
        <TabText>Cobrar</TabText>
      </TabItem>
      <TabItem>
        <Icon name="arrow-downward" size={24} color={textColor} />
        <TabText>Depositar</TabText>
      </TabItem>
      <TabItem>
        <Icon name="arrow-upward" size={24} color={textColor} />
        <TabText>Transferir</TabText>
      </TabItem>
      <TabItem>
        <Icon name="lock" size={24} color={textColor} />
        <TabText>Bloquear Cartão</TabText>
      </TabItem>
    </TabContainer>
  </Container>
);

export default Tabs;
