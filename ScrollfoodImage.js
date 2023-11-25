import { SafeAreaView,View,Text, ScrollView, Image ,StyleSheet} from "react-native";
import React from "react";


export default function ScrollfoodImage(){
    const types = [
        {
            id:"0",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/rwnkrdtnusqdkyjssahq",
            name:"Biriyani",
        },
        {
            id:"1",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/qwrkgxefwzjergtzowsc",
            name:"Dessert"
        },
        {
            id:"2",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/uckbx3rr87jhakb81mbs",
            name:"Burger"
        },
        {
            id:"3",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/z9xmu9pb65lcbt3wepud",
            name:"Salad",

        },
        {
            id:"4",
            image:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_112,h_112,c_fill/m7osxfhdon2opecztidb",
            name:"Sandwiches"
        }
    
    ]
    return (
        <View>
            
            <Text style={{marginLeft:10, fontWeight:'bold', marginTop:10}}>What's on your mind?</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator = {false}>
            {types.map((item,index)=>(
                <View style={styles.Content} key={index}>
                    <Image source={{uri:item.image}}
                        style={styles.Images}
                    
                    />
                    <Text style={styles.TextAlign}>{item.name}</Text>
                </View>
            ))}
            </ScrollView>
        </View>
    )
}

const styles =StyleSheet.create({
    Content:{
        margin:10,
        marginTop:10,
    },
    Images:{
        width:60,
        height:60,
        borderRadius:30,
    },
    TextAlign:{
        textAlign:'center',
        marginTop:6,

    }
})