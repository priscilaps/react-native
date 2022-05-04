import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Colors from '../../styles/Colors';

export default BalancePanelLabel = ({currentBalance}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>
      <Text style={styles.value}>$ {currentBalance}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: Colors.white,
  },
  value: {
    fontSize: 36,
    color: Colors.white,
  },
});
