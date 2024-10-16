import { View,Text,Button } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context"
import { DownloadPicture } from "@/components/BottomSheet";
export default function account(){
   const [pictureOpen,setPictureOpen]=useState(false);
   return <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
    <Text> Accout Page </Text>
    <Button title="Open Bottom Sheet" onPress={()=>{
      setPictureOpen(true);
    }}></Button>
    {pictureOpen && <DownloadPicture onClose={()=>setPictureOpen(false)}/>}
    </View>
   </SafeAreaView>
}