import React from "react";
import { View, Text } from "react-native";
import CancelableClassList from "../../components/Class/ClassList/CancelableClassList";
import DefaultClassList from "../../components/Class/ClassList/DefaultClassList";
import RateableClassList from "../../components/Class/ClassList/RateableClassList";


const tempClasses = [
  { _id: '123213', name: 'Toning Class', level: 'Beginners', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: true },
  { name: 'Yoga Class', level: 'Advanced', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', isLiked: false },
  { name: 'Weight Lifting Class', level: 'Intermediate', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: true },
  { name: 'Stretching Class', level: 'Intermediate', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', isLiked: false },
  { name: 'Zumba Class', level: 'Beginners', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: true },
  { name: 'Toning Class', level: 'Beginners', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: false },
  { name: 'Yoga Class', level: 'Advanced', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', isLiked: true },
  { name: 'Weight Lifting Class', level: 'Intermediate', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: false },
  { name: 'Stretching Class', level: 'Intermediate', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', isLiked: false },
  { name: 'Zumba Class', level: 'Beginners', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: true, place: 'alex', date: 'bokra isa' },
  { name: 'Weight Lifting Class', level: 'Intermediate', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: true },
  { name: 'Stretching Class', level: 'Intermediate', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-1000x500.jpg', isLiked: false },
  { name: 'Zumba Class', level: 'Beginners', imageURL: 'https://www.womenfitness.net/wp/wp-content/uploads/2017/05/yoga-class.jpg', isLiked: true },
  {
    "numberOfLikes": 0,
    "_id": "5eb9728f5571241068a76f6d",
    "name": "yoga",
    "description": "desc",
    "date": "2017-07-21T17:32:28.000Z",
    "level": "beginner",
    "place": "new cairo",
    "type": "physical",
    "imageURL": "https://sports-app-bucket.s3.amazonaws.com/windows-65XlfcMjdto-unsplash-1589211776611.jpg",
    "isLiked": false
  }
]
const ClassListTestScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Text>With header :</Text>
        <DefaultClassList classes={tempClasses} header="Popular Classes" />
      </View>
      <View style={{ width: '100%', borderWidth: 3, marginVertical: 5 }}></View>
      <View style={{ flex: 1 }}>
        <Text>Without header :</Text>
        <CancelableClassList classes={tempClasses} />
      </View>
      <View style={{ width: '100%', borderWidth: 3, marginVertical: 5 }}></View>
      <View style={{ flex: 1 }}>
        <Text>Without header :</Text>
        <RateableClassList classes={tempClasses} />
      </View>
    </View>
  );
};

export default ClassListTestScreen;
