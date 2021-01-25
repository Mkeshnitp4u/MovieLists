import React, { Component } from 'react';
import { StyleSheet, View, Text, Animated, FlatList } from 'react-native';
import Card from '../../components/Card/card';
import {connect} from 'react-redux'
import {fetchMovieList} from '../../../Redux/actions/movieAction'
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList)

const movieList = [{ name: "Tare Jammen pe", images: 'https://reactjs.org/logo-og.png' }, { name: "Tare Jammen pe", images: 'https://reactjs.org/logo-og.png' }, { name: "Tare Jammen pe", images: 'https://reactjs.org/logo-og.png' }, { name: "Tare Jammen pe", images: 'https://reactjs.org/logo-og.png' }]

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }
componentDidMount(){
const val = this.props.fetchMovieList()
console.log("VAL", val)

}


  render() {
    console.log("this.props.movieList",this.props.movieList)
    const y = new Animated.Value(0);
    const navigation = this.props.navigation
    const onScroll = Animated.event([{ nativeEvent: { contentOffset: { y } } }], { useNativeDriver: true })
    return (
      <View style={{ paddingBottom: 50 }}>
        <AnimatedFlatList
          scrollEventThrottle={16}
          bounces={false}
          data={this.props.movieList}
          renderItem={({ index, item }) =>
            <Card {...{ item, y, navigation }} />
          }
          keyExtractor={(item) => item.index}
          {...{ onScroll }}
        />
        {/* <Text>{this.props.movieList || "NHH"}</Text> */}
      </View>




    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});


const mapStateToProps=(state)=>{
  console.log("statestatestatestatestate", JSON.stringify(state))
  return{
    movieList:state.movieReducer.movieList?.data?.results
  }

}

const mapDispatch={
  fetchMovieList
}

export default  connect(mapStateToProps, mapDispatch)(Dashboard)
