/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';



// eslint-disable-next-line prettier/prettier
import {
  Image,
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.box}>
          <View style={styles.profileImage}>
            <Image
              style={styles.profileLogo}
              source={{
                uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1.jpeg',
              }}
            />
          </View>
          <View style={styles.profile}>
            <Text style={styles.profileName}>The Octocat</Text>
            <Text style={styles.profileName}>octocat</Text>
            <Text style={styles.profileName}>Joind 25 jan 2024</Text>
          </View>
        </View>
        <View>
          <Text style={styles.discription}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur cumque reiciendis qui animi voluptatum asperiores iure repudiandae enim consequuntur voluptatem.
          </Text>
        </View>
        <View style={styles.followingCard}>
          <View style={styles.repos}>
            <Text style={styles.textH}>Repos</Text>
            <Text style={styles.textP}>8</Text>
          </View>
          <View style={styles.repos}>
            <Text style={styles.textH}>Followers</Text>
            <Text style={styles.textP}>3938</Text>
          </View>
          <View style={styles.repos}>
            <Text style={styles.textH}>Following</Text>
            <Text style={styles.textP}>9</Text>
          </View>
        </View>
        <View>
          <View style={styles.addressItem}>
            <Icon name="rocket" size={30} color="#900" />
            <Text style={styles.addressText}>San Francisco</Text>
          </View>
          <View style={styles.addressItem}>
            <Icon name="rocket" size={30} color="#900" />
            <Text style={styles.addressText}>https://github.com/Farvez999</Text>
          </View>
          <View style={styles.addressItem}>
            <Icon name="rocket" size={30} color="#900" />
            <Text style={styles.addressText}>Not Available</Text>
          </View>
          <View style={styles.addressItem}>
            <Icon name="rocket" size={30} color="#900" />
            <Text style={styles.addressText}>@github</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white',
  },
  box: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    color: 'black',
    marginTop: 20,
  },
  profileImage: {
    marginLeft: 20,
  },
  profileLogo: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  profile: {
    padding: 20,
  },

  profileName: {
    // marginLeft: 20,
  },

  discription: {
    padding: 20,
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'Helvetica',
  },

  followingCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#DDDDDD',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },

  repos: {
    alignItems: 'center',
    fontWeight: 'bold',
  },

  textH: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'gray',
  },

  textP: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    marginTop: 10
  },

  addressItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
  },

  addressText: {
    marginLeft: 10,
    color: 'black',
  },

});

export default App;
