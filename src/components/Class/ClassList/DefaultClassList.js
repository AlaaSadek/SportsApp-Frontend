import React from 'react'
import { StyleSheet } from 'react-native'
import ClassList from './ClassList';
import DefaultClassButton from './SideComponents/DefaultClassButton';

const DefaultClassList = (props) => {
    return (
        <ClassList {...props} >
            <DefaultClassButton refresh={props.refresh} />
        </ClassList>
    )
}
const styles = StyleSheet.create({});

export default DefaultClassList;