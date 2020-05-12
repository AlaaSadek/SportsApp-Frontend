import React from 'react'
import { StyleSheet } from 'react-native'
import ClassList from './ClassList';
import CancelClassButton from './SideComponents/CancelClassButton';

const CancelableClassList = (props) => {

    return (
        <ClassList {...props} >
            <CancelClassButton />
        </ClassList>
    )
}
const styles = StyleSheet.create({});

export default CancelableClassList;