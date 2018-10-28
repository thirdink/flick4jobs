import React, { Component } from 'react'
import { Text, View ,ScrollView, Dimensions } from 'react-native'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width;

export class Slides extends Component {

    renderLastSlide(index){
        if(index === this.props.data.length -1){
            return(
                <Button 
                title="Onwards!"
                raised
                buttonStyle={styles.buttonStyle}
                onPress={this.props.onComplete}
                />

            );
        }
    }

    renderSlides(){
        return this.props.data.map((slide,index) => {

            return(
            <View 
            key={slide.text}
            style={[styles.slideStyle, {backgroundColor: slide.color}]}
            >
            <Text style={styles.textStyle}>
                {slide.text}
            </Text>
            {this.renderLastSlide(index)}
            
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
        alignItems: 'center'
    },
    buttonStyle:{
        backgroundColor: '#F9B902',
        marginTop: 15,
        
        
    }
}

export default Slides