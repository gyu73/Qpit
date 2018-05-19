/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { SocialIcon, Badge, Avatar, Button } from 'react-native-elements';

function HomeScreen(props) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    buttonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      marginTop: 20,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
    secretHintButtonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#FF1493',
      marginTop: 20,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
    normalHintButtonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      marginTop: 20,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
  });
  const secretHints = ['好きな人のイニシャル', '何年何組？', '身近な人？', '好きな人とLINEしてる？', '好きな人のあだ名は？', '出会いのきっかけは？'].map((hint, index) => (
    <Button
      key="${hints} ${index}"
      onPress={() => props.navigation.navigate('RegisterSecretHints')}
      title={hint}
      buttonStyle={styles.secretHintButtonStyle}
      color="#ffffff"
      fontWeight="900"
      fontSize="14"
    />
  ));

  const normalHints = ['好きな人はいる？', '部活やってる？', '何の部活？', '髪型はどんな髪型？', '服装はどんなの？', '身長どれくらい？', '性格はどんな性格？', '何歳？', 'どこの学校？', '口癖は？', '好きな食べ物は？', '好きな音楽は？', '趣味は？', '得意科目は？', '苦手科目は？', '喋ったことある？'].map((hint, index) => (
    <Button
      key="${hints} ${index}"
      onPress={() => props.navigation.navigate('RegisterHints')}
      title={hint}
      buttonStyle={styles.normalHintButtonStyle}
      color="#FF69B4"
      fontWeight="900"
      fontSize="14"
    />
  ));
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Avatar
        large
        rounded
        source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
        activeOpacity={0.7}
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>Ryota</Text>
      <Button
        onPress={() => props.navigation.navigate('RegisterHints')}
        title="好きな人を登録する"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize="14"
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>急接近ヒントを記入する！</Text>
      <Text style={{ color: '#ffffff' }}>（最低1個）</Text>
      {secretHints}
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>好きな人のヒントを記入する！</Text>
      <Text style={{ color: '#ffffff' }}>（最低7個）</Text>
      {normalHints}
    </ScrollView>
  );
}

export default HomeScreen;
