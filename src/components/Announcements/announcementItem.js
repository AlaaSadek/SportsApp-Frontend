import React from 'react'

import { View, StyleSheet, Text, Dimensions,ImageBackground,TouchableOpacity } from 'react-native'

const AnnouncementlItem = ({ item },props) => {
    let containerStyle = styles.container;
    if (props.style) containerStyle = { ...containerStyle, ...props.style };
    const monthNames = ["January", "February", "March", "April", "May", "June",
       "July", "August", "September", "October", "November", "December"
     ];
    const month_names_short= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    function containsAny(str, substrings) {
        for (var i = 0; i != substrings.length; i++) {
           var substring = substrings[i];
           if (str.indexOf(substring) != - 1) {
             return substring;
           }
        }
        return null; 
    }
    var month ;
    if(containsAny(item.publishedDateTime, monthNames))
    {
        month = containsAny(item.publishedDateTime, monthNames);
       
    }
    else if(containsAny(item.publishedDateTime,  month_names_short))
        month = containsAny(item.publishedDateTime,  month_names_short);
    else {
        if(item.publishedDateTime.includes('01'))
        {
            month='January'
        }
        else  if(item.publishedDateTime.includes('02'))
        {
            month='February'
        }
        else  if(item.publishedDateTime.includes('03'))
        {
            month='March'
        }
        else  if(item.publishedDateTime.includes('04'))
        {
            month='April'
        }
        else  if(item.publishedDateTime.includes('05'))
        {
            month='May'
        }
        else  if(item.publishedDateTime.includes('06'))
        {
            month='June'
        }
        else  if(item.publishedDateTime.includes('07'))
        {
            month='July'
        }
        else  if(item.publishedDateTime.includes('08'))
        {
            month="August"
        }
        else  if(item.publishedDateTime.includes('09'))
        {
            month="September"
        }
        else  if(item.publishedDateTime.includes('10'))
        {
            month='October'
        }
        else  if(item.publishedDateTime.includes('11'))
        {
            month='November'
        }
        else  if(item.publishedDateTime.includes('12'))
        {
            month='December'
        }
    }
   


    return (

        <View style={containerStyle}>
            <TouchableOpacity>
            <ImageBackground style={styles.image}  imageStyle={{ opacity: 0.59 }} source={{ uri: item.imageLocation }} >
                <Text style={styles.date}> {month}</Text>
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