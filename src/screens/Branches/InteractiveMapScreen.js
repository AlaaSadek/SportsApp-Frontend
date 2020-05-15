import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
const InteractiveMapScreen = ({ marks }) => {
    const mapRegion = {
        latitude: Number(marks[0].latitude),
        longitude: Number(marks[0].longitude),
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    }
    const getMarkers = () => {
        return marks.map(mark => {
            return <Marker
                pinColor="#1D55C5"
                coordinate={{ latitude: Number(mark.latitude), longitude: Number(mark.longitude) }}
                title={mark.place}
                key={mark._id}
            />
        })
    }
    return (
        <View style={styles.container}>
            <MapView
                region={mapRegion}
                
                style={styles.mapView}
            >
                {getMarkers()}
            </MapView>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    },
    mapView: {
        width: '100%',
        height: '100%'
    }

});

export default InteractiveMapScreen;