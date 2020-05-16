import { Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import * as Permissions from 'expo-permissions'
import backendAxios from '../services/backendAxios'

export default async () => {
    let previousToken = await AsyncStorage.getItem('pushtoken');
    console.log('prev', previousToken)
    if (previousToken) {
        return;
    }
    let { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (status !== 'granted') {
        return;
    }

    let token = await Notifications.getExpoPushTokenAsync();

    console.log('new', token)
    await AsyncStorage.setItem('pushtoken', token);
    const state = await backendAxios.post('account/addpushtoken')
    console.log(state)
}