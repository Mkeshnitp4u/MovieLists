import styled from 'styled-components/native';
import { View, SafeAreaView } from 'react-native';
import Input from '../../../Library/react-native-elements/input/Input';
import Button from '../../../Library/react-native-elements/buttons/Button';

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: #111;
  height: 100%
`;

export const ViewWrapper = styled(View)`
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const ContinueButton = styled(Button)` 
  margin-top: 10px;
  margin-horizontal: 10px;
  background-color: #ff2251;
  border-radius:10px
`;

export const InputWrapper = styled(Input)`
  padding: 20px;
  margin-top: 20px;
  background-color: #1e1e1d;
  border-radius: 5px;
  font-weight: 500;
  color: #fff;
  border-color: #fff;
  border-width: 1px;
`;

