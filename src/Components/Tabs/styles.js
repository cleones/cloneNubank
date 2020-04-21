import styled from 'styled-components/native';
import {textColor} from '~/styles/colors';
import {Animated} from 'react-native';

export const Container = styled(Animated.View)`
  height: 100px;
  margin: 20px 0;
`;

export const TabContainer = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {paddingLeft: 10, paddingRight: 20},
})``;
export const TabItem = styled.View`
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  margin-left: 10px;
  justify-content: space-between;
  padding: 10px;
`;
export const TabText = styled.Text`
  font-size: 13px;
  color: ${textColor};
`;
