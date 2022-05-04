import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

export default EntrySummaryList = ({entriesGrouped}) => {
  return (
    <View>
      <FlatList
        data={entriesGrouped}
        renderItem={({item}) => (
          <Text>
            {item.description}: ${item.amount}
          </Text>
        )}></FlatList>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
