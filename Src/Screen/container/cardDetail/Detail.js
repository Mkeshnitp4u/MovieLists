import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

import { View, SafeAreaView,StyleSheet,  ScrollView, Text, Image, Dimensions, Animated ,} from 'react-native';
const imageHeight =  Dimensions.get('window').height; 


const DetailScreen = (item) => {
   const {title,backdrop_path, poster_path, vote_average, overview, paramsrelease_date } = item.route.params.selectedItem
        return (
            <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
            >
            <View style={{flex:1 ,marginBottom:10 }}>
          <Text style={{fontSize:20 , fontWeight:'bold', color:"green" , textAlign:'center'}}>Movie Name: 
          <Text style={{fontSize:20 , fontWeight:'bold', color:"green" , textAlign:'center'}}> {title}</Text>

          </Text>
          </View>

          <Image
         source={{uri: backdrop_path?`https://image.tmdb.org/t/p/w500/${poster_path}`:`https://image.tmdb.org/t/p/w500/${item.route.params.poster_path}`}}
         resizeMode='cover'
                    style={{
                        height: imageHeight*0.4,
                        width: '100%',
                        borderRadius:20
                    }}
                />
            <Text style={{fontSize:20 , fontWeight:'bold', color:"green" , textAlign:'center', marginTop:10}}>A plot synopsis:</Text>
           <Text style={{fontSize:16 ,marginTop:10 }}>{overview}</Text>
           <Text style={{fontSize:16 , marginTop:10 }}>User Rating: 
           <Text style={{fontSize:16 , }}>{vote_average} </Text> 
            </Text> 
            <Text style={{fontSize:16 , marginVertical:10 }}>release_date: 
           <Text style={{fontSize:16 , }}>{paramsrelease_date } </Text> 
            </Text>        
            </ScrollView>
        </Animatable.View>
        );
};

export default DetailScreen;



const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
  });