import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, SafeAreaView, TouchableOpacity, ActivityIndicator, Button } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Color from '../lib/Color';
import moment from 'moment';
//import localisation from 'moment/locale/fr';
import { withNavigation } from 'react-navigation';

const PlacementDetails = ({ placement, navigation }) => {
  moment.locale('fr'); 

 
  //console.log(moment(placement.date).locale('fr').format("dddd, MMMM Do YYYY, h:mm:ss a"));
  return (

    <View style={styles.itemTopContainer}>

      <View style={styles.itemSubContainer}>

        <View style={styles.itemContentContainer}>
          <View style={styles.itemImageContainer}>
            {placement.shop.logo ? <Image
              style={styles.itemImage}
              source={{ uri: placement.shop.logo }}
            /> : null}
          </View>
          <View style={{ flex: 1, marginLeft: 30 }}>

            <Text style={{ fontSize: 17, color: Color.SecondaryText, fontWeight: "bold" }}>{placement.shop.shop_title}</Text>
            <Text style={{ fontSize: 12, color: Color.Primary }}>{moment(placement.date).format('LLLL')}</Text>
            <Text style={{ fontSize: 13, color: '#707070' }}>{placement.shop.placement_count} placement</Text>

          </View>

        </View>
      </View>
    </View>

  )
}


const styles = StyleSheet.create({

  container: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginBottom: 3,
    padding: 5,
    marginLeft: 5,
    marginRight: 5
  },


  topContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 20,
  },
  subContainer: {
    marginBottom: 15,
  },
  heading: {
    color: Color.Primary,
    fontSize: 16,
    marginBottom: 20,
  },
  locationBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ACACAC',
    borderRadius: wp('50%'),
    padding: 12,
    height: 42,
  },
  locationBarText: {
    color: '#ACACAC',
    fontSize: 15,
    marginLeft: 10,
  },
  itemTopContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 140,
    marginTop: 15,

  },
  itemSubContainer: {
    padding: 5,
    marginLeft: 5,
    marginRight: 5,
    width: wp("85%"),
    height: '100%',
    backgroundColor: '#FFF0F0',
    borderRadius: 20,
  },
  itemContentContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: "relative",
    paddingLeft: wp("15%")
  },
  itemImageContainer: {
    position: 'absolute',
    left: wp("0"),
  },
  itemImage: {
    width: 80,
    height: 80,
    borderColor: Color.Primary,
  },
  itemButton: {
    height: 32,
    minWidth: 72,
    borderRadius: wp('50%'),
    backgroundColor: '#F38E93',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withNavigation(PlacementDetails);