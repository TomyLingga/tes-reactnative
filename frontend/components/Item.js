import { TouchableOpacity, View, StyleSheet } from 'react-native'
import { PaperProvider,Button,Avatar,Searchbar,Divider,Text, Appbar } from 'react-native-paper'
import PriaPicture from "../../assets/images/pria.png"

const Item = ({name,jenjang,gender,phone,alamat,hobi,navigation}) => (
    <TouchableOpacity style={{borderWidth:0.5}} onPress={() => {navigation.navigate('Detail',{name:name,jenjang:jenjang,gender:gender,phone:phone,alamat:alamat,hobi:hobi})}}>
        <View style={styles.item}>
            <Avatar.Image size={50} source={PriaPicture} />
            <View style={{flexDirection: 'column', width: '90%'}}>
                <View style={{marginLeft: 10, flexDirection: 'row', width: '95%', justifyContent: 'space-between'}}>
                    <Text variant='titleSmall'>{name}</Text>
                    <Text variant='bodySmall'>{jenjang}</Text>
                </View>
                <View style={{marginLeft: 10, flexDirection: 'row', width: '95%', justifyContent: 'space-between'}}>
                    <Text variant='bodySmall'>{gender}</Text>
                    <Text variant='bodySmall'>{phone}</Text>
                </View>
            </View>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#CEDEBD',
        padding: 10,
        width: '100%',
        alignItems: 'center',
        flexDirection: 'row',
        height: 80,
    
        
    }
})

export default Item;