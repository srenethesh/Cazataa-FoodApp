import React from "react";
import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { SafeAreaView,Image,View ,Text, ScrollView, StyleSheet} from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FoodScroll (){
    const data = [
        {
            id:"0",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/w1rrow27w3vb3ur5xbi9",
            name:"McDonald's",
            rating:4.3,
            time:"30-40",
            offer:"50%"
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/ch07avzpos83wrfdfhyh",
            name:"Special Biriyani",
            rating:3.8,
            time:"30-40",
            offer:"60%"
    
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/hiezygiuixjqjogg6w2b",
            name:"Hyderabadi Bawarchi",
            rating:4.1,
            time:"25-35",
            offer:"55%",
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/q391dhemwszg9orhgldh",
            name:"Calofornia Burrito",
            rating:4.5,
            time:"20-30",
            offer:"30%"
        },
        {
            id:"4",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/ei26sjhizcjrk9gmjy5r",
            name:"udupi Utsav",
            rating:4.3,
            time:"30-40",
            offer:"60%"
        }
    ];
    return (
        <View>
        <Text style={styles.Textstyle}>Get Quickly</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {data.map((item , index)=>(
            <Pressable key={index}>
                <ImageBackground imageStyle={{borderRadius:7}} style={styles.ImageStyle} source={{uri:item.image}}>
                    <Text style={styles.ImageText}>{item.offer} OFF</Text>
                </ImageBackground>
                <Text style={styles.TextBottom}>{item.name}</Text>
                <View style={styles.Arrangement}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text style={{marginLeft:3}}>{item.rating}</Text>
                <Text style={{marginLeft:3}}>•</Text>
                <Text style={{marginLeft:3}}>{item.time} mins</Text>
                </View>
            </Pressable>
            ))}
        </ScrollView>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center', marginTop:10}}>
        <Pressable style={styles.TextScroll}>
            <Text> Filter </Text>
            <MaterialCommunityIcons name="filter-variant" size={18} color="black" />
        </Pressable>
        <Pressable style={styles.TextScroll}>
            <Text> Sorting By Rating </Text>
            
        </Pressable>
        <Pressable style={styles.TextScroll}>
            <Text> Sort By Price </Text>
        </Pressable>

        <Pressable style={styles.TextScroll}>
            <Text> Offers </Text>
        </Pressable>

        <Pressable style={styles.TextScroll}>
            <Text> Pure Veg </Text>
        </Pressable>

        <Pressable style={styles.TextScroll}>
            <Text> Rs. 300-Rs. 600 </Text>
        </Pressable>

        <Pressable style={styles.TextScroll}>
            <Text> Less than Rs. 300 </Text>
        </Pressable>
        </View>
        
        </ScrollView>
        
        </View>
        
    )

}
const styles = StyleSheet.create({
    
    Textstyle:{
        margin:10,
        fontSize:17,
        fontWeight:'bold',
    },

    ImageStyle:{
        aspectRatio:5/6,
        height:170,
        margin:10,
    },

    ImageText:{
        position:'absolute',
        bottom:10,
        left:10,
        fontSize:30,
        fontWeight:'500',
        color:'white'
    },

    TextBottom:{
        textAlign:'center',
    },

    Arrangement:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:3,
        marginLeft:10,
        
    },

    TextScroll:{
        marginHorizontal:10, 
        flexDirection:'row', 
        borderWidth:1, 
        borderRadius:20,
        
        justifyContent:'center', 
        padding:10,
        marginTop:10,
    },

})