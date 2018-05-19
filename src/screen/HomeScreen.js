/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Avatar, Button } from 'react-native-elements';

type Props = {
  navigation: {
    navigate: func
  }
}

function HomeScreen(props: Props) {
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

  const secretHints = [
    { title_jp: '好きな人のイニシャル', title_en: 'like_person_initial' },
    { title_jp: '何年何組？', title_en: 'class' },
    { title_jp: '身近な人？', title_en: 'familiar' },
    { title_jp: '好きな人とLINEしてる？', title_en: 'contact_line' },
    { title_jp: '好きな人のあだ名は？', title_en: 'like_person_nickname' },
    { title_jp: '出会いのきっかけは？', title_en: 'first_meeting' },
  ];

  const secretHintsComponents = secretHints.map((hint, index) => (
    <Button
      key="${hints} ${index}"
      onPress={() => props.navigation.navigate('RegisterSecretHints', { hint })}
      title={hint.title_jp}
      buttonStyle={styles.secretHintButtonStyle}
      color="#ffffff"
      fontWeight="900"
      fontSize="14"
    />
  ));

  const normalHints = [
    { title_jp: '好きな人はいる？', title_en: 'has_like_person' },
    { title_jp: '部活やってる？', title_en: 'belongs_to_club' },
    { title_jp: '何の部活？', title_en: 'club' },
    { title_jp: '髪型はどんな髪型？', title_en: 'hair_style' },
    { title_jp: '服装はどんなの？', title_en: 'clothing' },
    { title_jp: '身長どれくらい？', title_en: 'height' },
    { title_jp: 'どんな性格？', title_en: 'personality' },
    { title_jp: '何歳？', title_en: 'age' },
    { title_jp: 'どこの学校？', title_en: 'school' },
    { title_jp: 'どこの会社？', title_en: 'company' },
    { title_jp: '口癖は？', title_en: 'favorite_phrase' },
    { title_jp: '好きな食べ物は？', title_en: 'like_food' },
    { title_jp: '好きな音楽は？', title_en: 'like_music' },
    { title_jp: '趣味は？', title_en: 'hobby' },
    { title_jp: '得意科目は？', title_en: 'like_subject' },
    { title_jp: '苦手科目は？', title_en: 'hate_subject' },
    { title_jp: '喋ったことある？', title_en: 'has_spoken' },
  ];

  const normalHintsComponents = normalHints.map((hint, index) => (
    <Button
      key="${hint.title_jp} ${index}"
      onPress={() => props.navigation.navigate('RegisterHints', { hint })}
      title={hint.title_jp}
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
        onPress={() => props.navigation.navigate('RegisterLikePerson')}
        title="好きな人を登録する"
        buttonStyle={styles.buttonStyle}
        color="#FF69B4"
        fontWeight="900"
        fontSize="14"
      />
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>急接近ヒントを記入する！</Text>
      <Text style={{ color: '#ffffff' }}>（最低1個）</Text>
      {secretHintsComponents}
      <Text style={{ paddingTop: 20, color: '#ffffff' }}>好きな人のヒントを記入する！</Text>
      <Text style={{ color: '#ffffff' }}>（最低7個）</Text>
      {normalHintsComponents}
    </ScrollView>
  );
}

export default HomeScreen;
