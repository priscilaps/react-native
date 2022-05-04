import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

import Colors from '../../styles/Colors';

export default BalancePanel = ({onNewEntryPress}) => {
  const currentBalance = 2064.34;

  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>
        <BalancePanelLabel currentBalance={currentBalance} />
        <BalancePanelChart />
      </LinearGradient>
      <TouchableOpacity style={styles.button} onPress={onNewEntryPress}>
        <Icon name="add" size={30} color={Colors.white} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginBottom: -20,
    zIndex: 100,
  },
  panel: {
    //flex: 1,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: Colors.green,
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: -25,
    marginRight: 10,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    shadowColor: Colors.black,
  },
});
