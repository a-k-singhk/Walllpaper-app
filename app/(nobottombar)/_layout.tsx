import { View,Text } from "react-native";
import { Slot } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
export default function bottomlayout(){
    return <View>
    <View style={{backgroundColor:"black"}}>
        <Text style={{color:"white"}}>Go Back</Text>
        </View>
        <Slot/>
    </View> 
}