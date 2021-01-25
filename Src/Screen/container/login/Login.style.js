import styled from 'styled-components/native';
import {TextElement} from '../../../Library/react-native-elements/text/Text';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import Input from '../../../Library/react-native-elements/input/Input';
import Button from '../../../Library/react-native-elements/buttons/Button';
import {Divider} from '../../../Library/react-native-elements/divider/Divider';

export const SafeAreaViewWrapper = styled(SafeAreaView)`
  flex: 1;
  background-color: black;
`;

export const Wrapper = styled(View)`
  margin-top: 20px;
  margin-left: 25px;
  margin-right: 25px;
`;

export const LoginButton = styled(Button)` 
  margin-top: 10px;
  margin-horizontal: 10px;
  background-color: #ff2251;
  border-radius:10px
`;

export const DividerWrapper = styled(Divider)`
  margin-top: 10px;
  width:42%;
  height:0.5px;
  background-color: white;
`;



export const DividerView = styled(View)`
  margin-top: 30px;
  margin-bottom:20px;
  justify-content: center;
  flex-direction: row;
`;

export const TextElementWrapper = styled(TextElement)`
  margin-left: 10px;
  margin-bottom: 20px;
  color: white;
  font-size: 30;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const ForgetTextElement = styled(TextElement)`
  text-align: center;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  color: #656565;
  font-size: 16;
  font-weight: 700;
  padding-top: 10px;
  padding-bottom: 10px;
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


export const OrTextElemt = styled(TextElement)`
margin-top:2px;
color: #FFF
`;

export const MemberMessage = styled(TextElement)`
margin-left:10px;
color: #FFF;
font-size:16px;
padding-top:10px;
padding-bottom:10px
`;


export const SignupText = styled(TextElement)`
margin-left:10px;
margin-right:10px;
color: #ff2251;
font-size:16px;
padding-top:10px;
padding-bottom:10px
font-weight:900
`;
