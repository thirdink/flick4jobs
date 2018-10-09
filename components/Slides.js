import React, { Component } from 'react'
import { Text, View ,ScrollView, Dimensions } from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width;

export class Slides extends Component {
    renderSlides(){
        return this.props.data.map((slide) =>{
            return(
            <View 
            key={slide.text}
            style={[styles.slideStyle, {backgroundColor: slide.color}]}
            >
            <Text style={styles.textStyle}>
                {slide.text}
            </Text>
            </View>
            );
        });
    }
  render() {
    return (
     <ScrollView
     horizontal
     style={{flex:1}}
     pagingEnabled
     >
        {this.renderSlides()}
     </ScrollView>
    )
  }
}
const styles = {
    slideStyle:{
        flex: 1,// flex in vertical direction
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle:{
        fontSize: 30,
        color:'#FFFFFF',
    }
}

export default Slides