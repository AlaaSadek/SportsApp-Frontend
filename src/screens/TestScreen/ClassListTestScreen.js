import React from "react";
import { View, Text } from "react-native";
import ClassList from "../../components/Class/ClassList/ClassList";

const tempClasses = [
  { name: 'Toning Class', level: 'Beginners', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: true },
  { name: 'Yoga Class', level: 'Advanced', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', liked: false },
  { name: 'Weight Lifting Class', level: 'Intermediate', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: true },
  { name: 'Stretching Class', level: 'Intermediate', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', liked: false },
  { name: 'Zumba Class', level: 'Beginners', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: true },
  { name: 'Toning Class', level: 'Beginners', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: false },
  { name: 'Yoga Class', level: 'Advanced', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', liked: true },
  { name: 'Weight Lifting Class', level: 'Intermediate', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: false },
  { name: 'Stretching Class', level: 'Intermediate', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', liked: false },
  { name: 'Zumba Class', level: 'Beginners', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: true, place: 'alex', date: 'bokra isa' },
  { name: 'Weight Lifting Class', level: 'Intermediate', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: true },
  { name: 'Stretching Class', level: 'Intermediate', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', liked: false },
  { name: 'Zumba Class', level: 'Beginners', img: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', liked: true },
]
const ClassListTestScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>With header :</Text>
        <ClassList classes={tempClasses} header="Popular Classes" />
      </View>
      <View style={{ width: '100%', borderWidth: 3, marginVertical: 5 }}></View>
      <View style={{ flex: 1 }}>
        <Text>Without header :</Text>
        <ClassList  classes={tempClasses} />
      </View>
    </View>
  );
};

export default ClassListTestScreen;
