import React, { useEffect, useState } from 'react'
import { View, Dimensions } from 'react-native'
import AnnouncementItem from './announcementItem'
import Carousel from 'react-native-snap-carousel';
import { getAllAnnouncements } from '../../services/getAllAnnouncements'
const { width } = Dimensions.get('window')

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([])
  useEffect(() => {
    getAllAnnouncements().then((result) => {
      // Object.entries(result);
      setAnnouncements(result);
    });
  }, []);
  return (

    <View >
      <Carousel
        enableSnap={true}
        loop={true}
        loopClonesPerSide={6}
        layout={"default"}
        data={announcements}
        sliderWidth={width}
        itemWidth={width * 0.76}
        enableMomentum={false}
        autoplay={true}
        autoplayDelay={3000}
        renderItem={({ item, index }) => {
          return (
            <View >
              <AnnouncementItem item={item} style={{ height: 400 }} />
            </View>
          )
        }}
      />
    </View>

  )
}



export default Announcements