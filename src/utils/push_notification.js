import { Notifications } from 'expo';
import { AsyncStorage, Vibration } from 'react-native';
import * as Permissions from 'expo-permissions'
import backendAxios from '../services/backendAxios'
export const registerPushNotification = async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log('prev', previousToken)
    if (previousToken) {
        return;
    }
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
        return;
    }
    console.log('passed')
    let token = await Notifications.getExpoPushTokenAsync();
    console.log('new', token)
    await AsyncStorage.setItem('pushtoken', token);
    const state = await backendAxios.post('account/addpushtoken', { token: token })
    console.log(state)
}


export const listenForNotifications = async () => {

    Notifications.addListener((notification) => {
        Vibration.vibrate();
        console.log(notification)
        console.log(notification.data)
    })
}