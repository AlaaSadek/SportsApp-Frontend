import React from 'react'
import { StyleSheet } from 'react-native'
import ClassList from './ClassList';
import RateClassButton from './SideComponents/RateClassButton';

const RateableClassList = (props) => {

    return (
        <ClassList {...props} >
            <RateClassButton refresh={props.refresh}/>
        </ClassList>
    )
}
const styles = StyleSheet.create({});

export default RateableClassList;