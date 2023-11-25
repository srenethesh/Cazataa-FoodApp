import { StyleSheet, Text, View ,Image ,Button, Pressable} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useRoute} from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import FoodItem from './FoodItem';

const MenuScreen = ({navigation}) => {
   
    const route=useRoute();
  return (
    <ScrollView style={{marginTop:40}}>
      <View style={styles.Content}>
      <View>
      <Ionicons onPress={()=>navigation.goBack()} style={{marginLeft:10,marginTop:10}} name="arrow-back" size={30} color="black" />
      </View>
      <View style={styles.inner}>
        <Text style={{fontWeight:'bold' , fontSize:15 }}>{route.params.name}</Text>
        <View style={styles.Arrangement}>
                <MaterialIcons name="stars" size={24} color="green" />
                <Text style={{marginLeft:3}}>{route.params.rating}</Text>
                <Text style={{marginLeft:3}}>•</Text>
                <Text style={{marginLeft:3}}>{route.params.time} mins</Text>
        </View>
        <Text style={{color:'grey'}}>{route.params.cuisines}</Text>
        <View style={{flexDirection:'row' ,marginTop:10}}>
            <Text style={{fontSize:14,fontWeight:'bold'}}>Outlet</Text>
            <Text style={{marginLeft:10,color:'grey'}}>{route.params.address}</Text>
        </View>
        <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Text>22 mins</Text>
              <Text
                style={{ marginLeft: 15, fontSize: 14, fontWeight: "bold" }}
              >
                Home
              </Text>
            </View>
              <Text style={{borderColor:'grey', borderWidth:0.6,height:1,marginTop:10}}></Text>
              <View style={{flexDirection:'row',marginTop:10}}>
                <MaterialCommunityIcons name="bike-fast" size={24} color="orange" />
                <Text style={{marginLeft:10}}> | </Text>
                <Text style={{marginLeft:10, fontWeight:'bold'}}>FREE DELIVERY</Text>
              </View>

      </View>
             
      </View>
      <View>
      <Text style={{fontWeight:'500',  textAlign:'center', marginTop:10}}>MENU</Text>
      <Text style={{borderColor:'grey',  borderWidth:0.6,height:1,marginTop:10}}></Text>
      </View>
      <View>
        <Text style={{fontWeight:"600", fontSize:20, padding:10}}>Continue Searching...</Text>
        </View>
        
        <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Panner 65 </Text>
              <Text style={styles.textAlign}> ₹ 275 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>INDRA GANDHI STATUE</Text>  
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:50 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/druwjzmfmz7qvepq3bkr"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:65}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View> 

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-around' }}>
          <View>
              <Text style={styles.textAlign}> Spl Veg Biryani </Text>
              <Text style={styles.textAlign}> ₹ 250 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>MADAGADIPET</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:70 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/fsitbray4gq1kxcndqqx"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:85}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>

              <View style={styles.cardContainer}>
        <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Chilly Chicken (Boneless) </Text>
              <Text style={styles.textAlign}> ₹ 285 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>ECR ROAD</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:20 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/ry3c3f518z10t4olu4l7"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:35}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View> 

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Chilly Paneer </Text>
              <Text style={styles.textAlign}> ₹ 225 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>INDRA GANDHI STATUE</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:50 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/byonwwb8mzxyqluxlqpq"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:65}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Chicken 65 </Text>
              <Text style={styles.textAlign}> ₹ 120 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>INDRA GANDHI STATUE</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:50 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/x0jegvlf4h7wrgaaqdqi"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:65}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Chicken Fried Rice </Text>
              <Text style={styles.textAlign}> ₹ 80 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index}name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>INDRA GANDHI STATUE</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:50 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/akmx533z73jjbq8avy6v"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:65}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Egg Fried Rice </Text>
              <Text style={styles.textAlign}> ₹ 75 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>RAJIV GANDHI STATUE</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:50 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/lv6jl9qdscekjmwkxm9l"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:65}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Veg Fried Rice </Text>
              <Text style={styles.textAlign}> ₹ 70 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>VILLIANUR</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:60 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pycpbzawueci1dvhmkr3"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:75}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>

      <View style={styles.cardContainer}>
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
          <View>
              <Text style={styles.textAlign}> Jeera Rice </Text>
              <Text style={styles.textAlign}> ₹ 90 </Text>
              <View style={{flexDirection:'row', padding:5}}>
              {[1,2,3,4].map((index)=><AntDesign key={index} name="star" size={20} color="gold" />)}
              <Text>(3.9)</Text>
              </View>
              <Text style={{color:"grey", fontSize:12 , padding:5}}>ECR ROAD</Text>
              </View>
              <View style={{flexDirection:'column',display:'flex'}}>
              <Image style={{marginLeft:60 ,borderRadius:20}} source={{height:100,width:100 ,uri:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/xukq8swrwct8usmg4cjv"}} />
              <Pressable style={{width:70,borderWidth:1,borderRadius:20,marginLeft:75}}><View><Text style={{margin:5,fontSize:14,fontWeight:'600'}}>Add Cart</Text></View></Pressable>
              </View>
      </View>
      </View>
    </ScrollView >
  )
}

export default MenuScreen

const styles = StyleSheet.create({
    Content:{
        height:300,
        backgroundColor:"#B0C4DE",
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    inner:{
        height:200,
        
        backgroundColor:'white',
        marginHorizontal:20,
        marginVertical:5,
        padding:10,
        borderRadius:10,
    },

    Arrangement:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:3,
    },
    cardContainer:{
      backgroundColor: '#FAFAFA',
      borderRadius: 10,
      elevation: 3,
      shadowColor: '#000',
      shadowOpacity: 0.2,
      shadowOffset: { width: 1, height: 1 },
      margin: 10,
      padding: 10,

  },
  textAlign:{
    padding:3,
  },
  button:{
    width:70,
    borderWidth:1,
    borderRadius:20,
    marginLeft:65
    
  }
})