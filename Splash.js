import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Animated,
  Easing,
  LogBox
} from 'react-native';

import { SPLASH_MESSAGE } from "./Src/Contant/constant";

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false }
    this.animatedValue = new Animated.Value(0)
    LogBox.ignoreLogs(['Animated: `useNativeDriver`']);

  }

  async componentDidMount() {
    this.animate()
    const data = await this.performTimeTask();
    if (data !== null) {
      this.setState({ isLoading: true });
    }
  }


  animate() {
    this.animatedValue.setValue(0)
    Animated.timing(
      this.animatedValue,
      {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
      }
    ).start(() => this.animate())
  }

  performTimeTask = async () => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }


  render() {
    if (this.state.isLoading) {
      this.props.navigation.navigate('Login');
    }
    const textSize = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: [8, 28]
    })
    const spin = this.animatedValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <SafeAreaView style={styles.container}>
        <Animated.Image
          style={[styles.imageAnimation, { transform: [{ rotate: spin }] }]}
          source={require('./Src/Assets/Image/movieList.png')} />
        <Animated.Text
          style={[styles.textAnimation, { fontSize: textSize }]} >
          {SPLASH_MESSAGE}
        </Animated.Text>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  textAnimation: {
    marginTop: 10,
    color: 'black',
    marginTop: 20
  },
  imageAnimation: {
    resizeMode: 'contain',
    aspectRatio: 1,
  }
});
