import React,{useState} from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import CheckboxOutline from '../../../assets/images/svg/CheckboxIcons/checkbox.svg'
import CheckedComponent from '../../../assets/images/svg/CheckboxIcons/checkcomp.svg'
import CheckBox from 'react-native-check-box'
import { connect } from 'react-redux'
import { addAction, deleteAction } from '../../store/categoriesArray/reducer'

const mapStateToProps = state => ({
    counter: state
  })
  
  const mapDispatchToProps = {
    addAction,
    deleteAction
  }

const CheckboxItem = ({ title,id,props }) => {
     
    const [isChecked, setChecked] = useState(false);
    const [results,setResults] =useState([])
   
   
    // const addItem=(title)=>
    // {
    //     // setResults(title)
    //     setResults( [...results,{ 
    //         id:id,
    //         title }
    //     ]);
       
    // }

 
    console.log(results)
    return (
        <View style={styles.mainContainer}>
             
            <CheckBox
                onClick={()=>{
                    isChecked ? setChecked(false) :  setChecked(true) 
                    
                //  if(isChecked==false)
                //  {
                //     props.onAddItem
                //  }
                //  else props.DeleteItem
                //  else removeItem(title)
                 
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
export default connect(mapStateToProps, mapDispatchToProps)(CheckboxItem)