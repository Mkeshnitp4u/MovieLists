import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableNativeFeedback,
  Platform,
} from 'react-native';
import colors from '../../../Library/react-native-elements/config/colors';
import {
  InputWrapper,
  SafeAreaViewWrapper,
  TextElementWrapper,
  Wrapper,
  OrTextElemt,
  MemberMessage,
  SignupText,
  DividerView,
  LoginButton,
  DividerWrapper
} from './Login.style';
import {db} from '../../../Utills/Firebase/config'

const Login = ({ navigation }) => {

useEffect(() => {
  
  // const login = firebase.database().ref('/user')
  // const userCred= {
  //   userName:"Mukesh",
  //   password:"Muk@1994"
  // }
  return () => {
 return(   
  db.ref('/items').push({
    name: "Mukesh"
  })
 )
  }
}, [])

  return (
    <SafeAreaViewWrapper>
      <ScrollView>
        <Wrapper>
          <TextElementWrapper>Sign In</TextElementWrapper>

          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email"
          />
          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Password"
          />
          <LoginButton
            titleStyle={{
              color: '#FFF',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
              fontWeight: '700',
              fontSize: 22,
            }}
            title="Login"
            type="outline"
            onPress={() => navigation.navigate('Tabs')}
          />


          <DividerView>
            <DividerWrapper/>
            <OrTextElemt>
              OR
            </OrTextElemt>
            <DividerWrapper/>
          </DividerView>
          <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'center' }}>
            <MemberMessage> Not a member of IMDB?</MemberMessage>
            <TouchableNativeFeedback
              onPress={() => {
                navigation.navigate('SignUp');
              }}>
              <SignupText>
                Sign up
              </SignupText>
            </TouchableNativeFeedback>
          </View>
        </Wrapper>
      </ScrollView>
    </SafeAreaViewWrapper>
  );
};

export default Login;