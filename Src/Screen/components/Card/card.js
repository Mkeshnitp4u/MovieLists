import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, Animated } from 'react-native';
import Card from '../../../Library/react-native-elements/card/Card';
import CardImage from '../../../Library/react-native-elements/card/CardImage';
import CardTitle from '../../../Library/react-native-elements/card/CardTitle';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {item: props.item, title: props.item.original_title, ImageUri: props.item.backdrop_path?`https://image.tmdb.org/t/p/w500/${props.item.backdrop_path}`:`https://image.tmdb.org/t/p/w500/${props.item.poster_path}` }

   console.log("propsMUJKKKKKKK", this.state.ImageUri)
        // this.state = { item: props.original_title, title: props.item.name, images: { uri: backdrop_path?`https://image.tmdb.org/t/p/w500/${item.item.backdrop_path}`:`https://image.tmdb.org/t/p/w500/${item.item.poster_path} } }
    }


    render() {
        const translateY = Animated.add(this.props.y, this.props.y.interpolate({
            inputRange: [0, 10],
            outputRange: [0, 10],
            extrapolateRight: "clamp"
        }))

        const {title, ImageUri, item } = this.state
        return (
            <Animated.View style={{ marginBottom: 0 }}>
                <TouchableNativeFeedback onPress={() => this.props.navigation.navigate('Detail', {selectedItem: item})}>
                    <Card >
                        {ImageUri ?
                            <CardImage
                                source={{uri :ImageUri}} >
                            </CardImage>
                            :
                            <CardImage
                                source={require('../../../Assets/Image/movieList.png')} >
                            </CardImage>
                        }
                        <CardTitle style={{marginTop:20}}>{ title}</CardTitle>
                    </Card>
                </TouchableNativeFeedback>
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'red'
    },
});
