import React,{useState} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CheckboxOutline from '../../../assets/images/svg/CheckboxIcons/checkbox.svg'
import CheckedComponent from '../../../assets/images/svg/CheckboxIcons/checkedComponents.svg'
import CheckBox from 'react-native-check-box'

const CheckboxItem = ({ title,id }) => {
     
    const [isChecked, setChecked] = useState(false);
    const [results,setResults] =useState([])
    //To send to result Screen
    
   
    const resultsArray=(title)=>
    {
        // setResults(title)
        setResults( [...results,{ 
            id:id,
            title }
        ]);
        return results
       
    }
    console.log(results)
    return (
        <View style={styles.mainContainer}>
             
            <CheckBox
                onClick={()=>{
                 setChecked(!isChecked)
                 if(isChecked==false)
                 {
                    resultsArray(title);
                 }
                 
               }}
               
            isChecked={isChecked}
            // checkedImage={  <CheckedComponent height={30} width={50} />}
            // unCheckedImage={ <CheckboxOutline height={30} width={50} /> }
            rightText={title}
            rightTextStyle={styles.rightTextStyle}
        />
        </View>

    )
}
const styles = StyleSheet.create({
    mainContainer: {
        display: "flex",
        flex: 1,
        marginLeft:'4%'
    },
   
    rightTextStyle:{
        fontFamily:'Montserrat_SemiBold',
        fontSize:18,
        alignSelf:'center'
    }
   
});
export default CheckboxItem;