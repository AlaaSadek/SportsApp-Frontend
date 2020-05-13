import React from 'react'

import { View, StyleSheet, Text, Dimensions,ImageBackground,TouchableOpacity } from 'react-native'

const AnnouncementlItem = ({ item },props) => {
    let containerStyle = styles.container;
    if (props.style) containerStyle = { ...containerStyle, ...props.style };
    const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
    const month_names_short= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   if(item.publishedDateTime.includes(monthNames))
   

    return (

        <View style={containerStyle}>
            <TouchableOpacity>
            <ImageBackground style={styles.image}  imageStyle={{ opacity: 0.59 }} source={{ uri: item.imageLocation }} >
                <Text style={styles.date}> {item.publishedDateTime}</Text>
                <Text style={styles.offer}>{item.title}</Text>
          </ImageBackground>
          </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 172, 
        width: Dimensions.get('window').width*0.73, 
        marginLeft: Dimensions.get('window').width*0.04, 
        borderRadius:10,
        backgroundColor:'#050000',
        flexGrow:1
    },
    textView: {
        position: 'absolute',
        bottom: 10,
        margin: 10,
        left: 5,
    },
    image: {
        resizeMode:'center',
        width:'100%',
        height:'100%',
        borderRadius:10,
        overflow: 'hidden',
        //opacity: 0.59,
    },
    date:{
        fontSize:15,
        color:'#FFFFFF',
        fontFamily:'Montserrat_Bold',
        textAlign:'center',
        marginTop:100,
        marginBottom:'1%'
    },
    offer:
    {
        fontSize:18,
        color:'#D8365D',
        fontFamily:'Montserrat_Bold',
        textAlign:'center',
    },
})

export default AnnouncementlItem