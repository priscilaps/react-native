import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Svg, {Circle, Rect} from 'react-native-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';

export default EntryListItem = ({
  entry,
  isFirstItem,
  isLastItem,
  onEntryPress,
}) => {
  const bulletLineY = isFirstItem ? 25 : 0;
  const bulletLineHeight = isLastItem ? 30 : 50;
  const showBulletLine = !(isFirstItem && isLastItem);

  // const bulletColor = entry.category.color || Colors.white;
  const bulletColor = Colors.blue;
  return (
    <TouchableOpacity onPress={() => onEntryPress && onEntryPress(entry)}>
      <View style={styles.container}>
        <View style={styles.bullet}>
          <Svg height="50" width="30">
            {showBulletLine && (
              <Rect
                x="9"
                y={bulletLineY}
                width="1.5"
                height={bulletLineHeight}
                fill={Colors.background}
              />
            )}
            <Circle
              cx="10"
              cy="25"
              r={8}
              stroke={Colors.background}
              strokeWidth="1.5"
              fill={bulletColor}
            />
          </Svg>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>
            {entry.description} Descrição
          </Text>
          <View style={styles.details}>
            <Icon
              name="access-time"
              size={12}
              color={Colors.white}
              style={styles.entryAtIcon}
            />
            <Text style={styles.entryAtText}>{entry.entryAt.toString()}</Text>
            {entry.address && (
              <>
                <Icon
                  name="location-pin"
                  size={12}
                  color={Colors.white}
                  style={styles.addressIcon}
                />
                <Text style={styles.addressText}>{entry.address}</Text>
              </>
            )}
          </View>
        </View>
        <View style={styles.amount}>
          <Text style={styles.amountText}>${entry.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  bullet: {},
  description: {
    flex: 1,
    justifyContent: 'center',
  },
  descriptionText: {
    fontSize: 14,
    color: Colors.white,
  },
  details: {
    flexDirection: 'row',
  },
  entryAtIcon: {
    marginTop: 3,
    marginRight: 3,
    color: Colors.metal,
  },
  entryAtText: {
    color: Colors.metal,
  },
  addressIcon: {
    color: Colors.metal,
    marginTop: 3,
    marginRight: 3,
    marginLeft: 25,
  },
  addressText: {
    color: Colors.metal,
  },
  amount: {
    justifyContent: 'center',
  },
  amountText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
