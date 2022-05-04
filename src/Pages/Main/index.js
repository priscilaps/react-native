import React from 'react';
import {View, StyleSheet} from 'react-native';

import BalancePanel from '../../componentes/BalancePanel';
import EntrySummary from '../../componentes/EntrySummary';
import EntryList from '../../componentes/EntryList';

import Colors from '../../styles/Colors';

export default Main = ({navigation}) => {
  return (
    <View style={styles.container}>
      <BalancePanel
        onNewEntryPress={entry =>
          navigation.navigate('NewEntry', {entry: entry})
        }
      />
      <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
      <EntryList
        onEntryPress={entry => navigation.navigate('NewEntry', {entry: entry})}
        onPressActionButton={() => navigation.navigate('Report')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.background,
  },
});
