import React, {useRef} from 'react';
import {View, SafeAreaView, ScrollView, Text} from 'react-native';


const OTPScreen = ({navigation}) => {
  let otpInput = useRef(null);

  const clearText = () => {
    otpInput.current.clear();
  };

  const setText = () => {
    otpInput.current.setValue('1234');
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#111', height: '100%'}}>
      <ScrollView>
<View>
<Text>OTP SCREEN</Text>
  </View>     
      </ScrollView>
    </SafeAreaView>
  );
};

export default OTPScreen;
