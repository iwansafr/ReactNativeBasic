import React,{Component} from 'react';
import {View, Text,TextInput, Image} from 'react-native';

const SampleComponent = () => {
    return (
      <View>
        <View style={{width: 80, height: 80, backgroundColor: "#3498db"}} />
        <Text>Iwan</Text>
        <Text>Safrudin</Text>
        <Esoftgreat />
        <Photo />
        <TextInput style={{borderWidth: 1}}/>
        <BoxGreen/>
        <Profile />
      </View>
    )
  }
  
  const Esoftgreat = () => {
    return <Text>esoftgreat</Text>;
  };
  
  const Photo = () => {
    return (
      <Image 
        source={{uri: 'https://placeimg.com/100/100/tech'}} 
        style={{width: 100, height: 100}} 
      />
    )
  }
  
  class BoxGreen extends Component{
    render(){
      return <Text>Ini Componen dari class</Text>
    }
  }
  
  class Profile extends Component{
    render(){
      return (
        <View>
          <Image 
            source={{ uri: 'https://placeimg.com/100/100/people' }} 
            style={{ width:100, height: 100, borderRadius:50}}
          />
          <Text style={{color: 'blue',fontSize:24}}>Ini Orang</Text>
        </View>
      )
    }
  }

export default SampleComponent;