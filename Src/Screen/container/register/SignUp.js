import React from 'react';
import { ScrollView } from 'react-native';
import colors from '../../../Library/react-native-elements/config/colors';
import { SafeAreaViewWrapper, ViewWrapper, InputWrapper, ContinueButton } from "./SignUp.style";

const Signup = ({ navigation }) => {
  return (
    <SafeAreaViewWrapper>
      <ScrollView>
        <ViewWrapper>

          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Name"
          />

          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Mobile"
          />

          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Email"
          />

          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Username"
          />
          <InputWrapper
            placeholderTextColor={colors.grey2}
            inputContainerStyle={{ borderBottomWidth: 0 }}
            placeholder="Password"
          />
          <ContinueButton
            titleStyle={{
              color: '#FFF',
              paddingTop: 10,
              paddingBottom: 10,
              paddingLeft: 30,
              paddingRight: 30,
              fontWeight: '700',
              fontSize: 22,
            }}
            title="Continue"
            type="outline"
            onPress={() => navigation.navigate('Login')}
          />
        </ViewWrapper>
      </ScrollView>
    </SafeAreaViewWrapper>
  );
};

export default Signup;
