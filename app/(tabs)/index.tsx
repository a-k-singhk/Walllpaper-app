import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text,View } from 'react-native';
const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={LibraryScreen} />
      <Tab.Screen name="Liked" component={LikedScreen} />
      <Tab.Screen name="Suggested" component={SuggestedScreen} />
    </Tab.Navigator>
  );
}

function LibraryScreen(){
   return <View>
      <Text>Library Screen</Text>
   </View>
}


function LikedScreen(){
   return <View>
      <Text>Liked Screen</Text>
   </View>
}

function SuggestedScreen(){
   return <View>
      <Text>Suggested Screen</Text>
   </View>
}