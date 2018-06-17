/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose, withHandlers, withProps, lifecycle, withState } from 'recompose';

import Actions from '../../actions/';

function NotEnouchArrowsScreen(props: Props) {
  const styles = StyleSheet.create({
    container: {
      height: '100%',
      backgroundColor: '#FF69B4',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
    },
    buttonStyle: {
      width: 200,
      height: 180,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      marginTop: 80,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
    arrowButtonStyle: {
      width: 180,
      height: 40,
      borderColor: 'transparent',
      borderWidth: 0,
      borderRadius: 30,
      backgroundColor: '#ffffff',
      marginTop: 20,
      marginBottom: 30,
      shadowOffset: { width: 4, height: 4 },
      shadowColor: 'black',
      shadowOpacity: 0.3,
    },
  });
  const last_shoot_time = new Date(props.users.last_shoot_time).getTime();
  const time = Math.floor((14400000 - (props.curTime - last_shoot_time)) / 1000);
  const ss = time % 60;
  const m = Math.floor(time / 60);
  const mm = m % 60;
  const hh = Math.floor(m / 60);
  const z = (num) => {
    const s = `00${String(num)}`;
    return s.substr(s.length - 2, 2);
  };
  return (
    <View style={styles.container}>
      {
        14400000 - (props.curTime - last_shoot_time) >= 0
        ?
          <React.Fragment>
            <Button
              buttonStyle={styles.buttonStyle}
              color="#000000"
              fontWeight="900"
              fontSize="14"
              title="まだ矢を飛ばせないよ！もう少しガマンしてね！ BY 恋のQpit 👼"
            />
            <Text style={{
 color: '#ffffff', marginTop: 40, fontWeight: '900', fontSize: '18',
}}
            >
          矢が回復するまで
            </Text>
            <Text style={{ color: '#ffffff', fontWeight: '900', fontSize: '18' }}>
          残り{z(hh)}：{z(mm)}：{z(ss)}
            </Text>
          </React.Fragment>
        :
          <React.Fragment>
            <Button
              buttonStyle={styles.buttonStyle}
              color="#000000"
              fontWeight="900"
              fontSize="14"
              title="下のボタンを押して矢を回復してね。BY 恋のQpit 👼"
            />
            <Button
              title="矢を回復する"
              buttonStyle={styles.arrowButtonStyle}
              color="#FF69B4"
              fontWeight="900"
              fontSize="14"
              onPress={() => props.handleGetArrowStock()}
            />
          </React.Fragment>
      }
    </View>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  secrethints: state.secret_hints,
  hints: state.normal_hints,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      ...Actions.users,
    },
    dispatch,
  );

const Enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withState('curTime', 'updateCurTime', 0),
  withState('timerID', 'updateTimerID', 0),
  withHandlers({
    handleGetArrowStock: props => () => {
      props.getarrowstock(props.users.id);
      props.navigation.navigate('Tab');
    },
  }),
  lifecycle({
    componentWillMount() {
      this.props.timerID = setInterval(() => {
        const t = new Date().getTime();
        this.props.updateCurTime(() => t);
      }, 1000);
    },
    componentWillUnMount() {
      clearInterval(this.props.timerID);
    },
  }),
);

export default Enhance(NotEnouchArrowsScreen);
