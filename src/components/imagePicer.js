import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const Imagepicker=()=> {
    const [photo,setPhoto]=setState(null)

  handleChoosePhoto = () => {
    const options = {
      noData: true,
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (uri) {
       setPhoto(response)
      }
    });
  };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image
            source={{ uri: photo.uri }}
            style={{ resizeMode: 'center',
            width:  100,
            height: 100,
            borderRadius: 200/ 2,
            marginTop:'4%', }}
          />
        )}
        <TouchableOpacity onPress={()=>handleChoosePhoto()}>
        <Text style={{color:'#D8365D',
          fontFamily:'Montserrat_SemiBold',
          fontSize:16,
         marginTop:'2%'}}>{title="Choose Photo"}</Text>
            </TouchableOpacity> 
      </View>
    );
  }

export default Imagepicker()