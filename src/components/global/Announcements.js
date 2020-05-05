import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Dimensions, FlatList, Animated,SafeAreaView } from 'react-native'
import AnnouncementItem from './announcementItem'
import Carousel from 'react-native-snap-carousel';

const { width, heigth } = Dimensions.get('window')


const Announcements = () => {
    // const Announcements = ({ data })
    const announcementData =
        [{
                date: '10 May', 
                url: 'https://i.ibb.co/hYjK44F/anise-aroma-art-bazaar-277253.jpg',
                offer: "New Offer",
                id: 0,
        },
        {
                date: 'June', 
                url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
                offer: "Free month",
                id: 1
        },
        {
                date: 'July', 
                url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
                offer: "2 free sessions",
                id: 2
        },
        {
            date: 'Nov', 
            url: 'https://i.ibb.co/JtS24qP/food-inside-bowl-1854037.jpg',
            offer: "2 free sessions",
            id: 3
    },
    {
        date: 'December', 
        url: 'https://i.ibb.co/JxykVBt/flat-lay-photography-of-vegetable-salad-on-plate-1640777.jpg',
        offer: "2 free sessions",
        id: 2
},
    ]
    
    if (announcementData && announcementData.length) {
        return (
            
            <View >
                <Carousel
                enableSnap={true}
                loop={true}
                loopClonesPerSide={6}
                  layout={"default"}
                  data={announcementData}
                  sliderWidth={width}
                  itemWidth={width*0.76}
                  enableMomentum={false}
                  autoplay={true}
                  autoplayDelay={3000}
                  renderItem={({ item ,index}) => {
                    return (
                        <View >
                    <AnnouncementItem item={item} style={{height:400}} />
                    </View>
                    )
                }}
                 
                />
                

            </View>
           
        )
    }

    console.log('Please provide Images')
    return null
}


export default Announcements