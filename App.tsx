/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React , {useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  BackHandler
} from 'react-native';

import { StackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

type Props = StackScreenProps<RootStackParamList, 'App4'>;

const App: React.FC<Props> = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.heading}>MicroFrontend - {route.params.file}</Text>
      <Text style={styles.heading}>Card Details Info:</Text>
        <View style={styles.card}>
              <View style={styles.cardInside}>
                  <Text style={styles.title}>Card Number : </Text>
                  <Text style={styles.subTitle}>4019**********9965</Text>
              </View>
              <View style={styles.cardInside}>
                  <Text style={styles.title}>Expiration Date : </Text>
                  <Text style={styles.subTitle}>03/29</Text>
              </View>
              <View style={styles.cardInside}>
                  <Text style={styles.title}>CVV : </Text>
                  <Text style={styles.subTitle}>***</Text>
              </View>
        </View>

        <View style={styles.card}>
              <View style={styles.cardInside}>
                  <Text style={styles.title}>Card Number : </Text>
                  <Text style={styles.subTitle}>4019**********9966</Text>
              </View>
              <View style={styles.cardInside}>
                  <Text style={styles.title}>Expiration Date : </Text>
                  <Text style={styles.subTitle}>02/42</Text>
              </View>
              <View style={styles.cardInside}>
                  <Text style={styles.title}>CVV : </Text>
                  <Text style={styles.subTitle}>***</Text>
              </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF8DD',
  },
  scrollContainer: {
    height: '100%',
  },
  card: {
    margin:15,
    backgroundColor: '#c2bdf0',
    borderRadius: 15,
    padding: 26,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,  // for Android
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subTitle:{
    fontSize: 14,
    fontWeight: 'normal',
    marginTop:4
  },
  heading:{
    fontWeight:'bold',
    fontSize:25,
    justifyContent:'center',
    marginBottom:20,
    color:'black',
    marginTop:15,
    marginStart:15
  },
  cardInside:{
    flexDirection:'row'
  }
});

export default App;
