import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text,TextInput,Searchbar,Image, View, ScrollView, TouchableOpacity, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ScrollfoodImage from './ScrollfoodImage';
import FoodScroll from './FoodScroll';
import MenuItem from './MenuItem';


export default function Content(){

    
    const navigation= useNavigation();
    return(
        <ScrollView>
        <SafeAreaView>
        <FoodScroll />  
            <ScrollfoodImage />
            
            <MenuItem />
            <View >
                <Text style={styles.textAlign}>Recommended Items</Text>
            </View>
            
            <View style={styles.cartDetail}>
            <TouchableOpacity onPress={() => navigation.navigate("Productdetails1")}>
            <View style={styles.image}>
                <View style={styles.cardContainer}>

                <Image 
                source={{
                    width:100,
                    height:100,
                    uri:"http://www.designindaba.com/sites/default/files/node/news/23566/sonic-burger.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Burger
                </Text>
                
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Productdetails2")}>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:100,
                    height:100,
                    uri:"http://knowyourtown.co.in/wp-content/uploads/2020/03/pizza-transparent-background-17.png"}}
                />
                <Text style={styles.priceTag}>
                    Pizza
                </Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>


            <View style={styles.cartDetail}>
            
            <TouchableOpacity onPress={() => navigation.navigate("Productdetails3")}>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:100,
                    height:100,
                    uri:"https://biryanipotofmobile.com/wp-content/uploads/2020/01/Biryani-1.jpg"}}
                />
                <Text style={styles.priceTag}>
                    Briyani
                </Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Productdetails4")}>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:100,
                    height:100,
                    uri:"https://tse3.mm.bing.net/th?id=OIP.LCHXOwU6Cji_TqoWDFarHwHaE8&pid=Api&P=0&h=180"}}
                />
                <Text style={styles.priceTag}>
                    Pasta
                </Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.cartDetail}>

            <TouchableOpacity onPress={() => navigation.navigate("Productdetails5")}>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:100,
                    height:100,
                    uri:"https://tse3.mm.bing.net/th?id=OIP.SQGbY6w3xSsnM7uGoPWzKQHaFK&pid=Api&P=0&h=180"}}
                />
                <Text style={styles.priceTag}>
                    Pure Veg
                </Text>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Productdetails6")}>
            <View style={styles.image}>
            <View style={styles.cardContainer}>
                <Image 
                source={{
                    width:100,
                    height:100,
                    uri:"https://i1.wp.com/www.evergreendishes.com/wp-content/uploads/2019/10/Dosa-1.jpg?fit=4288%2C2848&ssl=1"}}
                />
                <Text style={styles.priceTag}>
                    Dosa
                </Text>
                </View>
            </View>
            </TouchableOpacity>
            </View>

            <StatusBar style="auto" />
        </SafeAreaView>
        </ScrollView>
    )
}
const styles= StyleSheet.create({
    textAlign:{
        fontSize:20,
        marginTop:20,
        fontWeight:'500',
        marginLeft:20,    
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
    priceTag:{
        textAlign:'center'
    },

    cartDetail:{
        flexDirection:'row',
        justifyContent: 'space-around'
    },

});