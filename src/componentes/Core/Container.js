import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Colors from '../../styles/Colors';

export default Container = ({
  children,
  title,
  actionLabelText,
  actionButtonText,
  onPressActionButton,
}) => {
  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      {children}

      {(actionLabelText || actionButtonText) && (
        <View style={styles.actionContainer}>
          {actionLabelText && (
            <Text style={styles.actionLabel}>{actionLabelText}</Text>
          )}
          {actionButtonText && (
            <TouchableOpacity
              style={styles.actionButton}
              onPress={onPressActionButton}>
              <Icon
                name="insert-chart"
                size={12}
                color={Colors.white}
                style={styles.actionButtonIcon}
              />
              <Text style={styles.actionButtonText}>{actionButtonText}</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.asphalt,
    padding: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 5,
    margin: 5,
  },
  title: {
    marginBottom: 10,
    fontSize: 12,
    color: Colors.white,
  },
  actionContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  actionLabel: {
    flex: 1,
    fontSize: 12,
    color: Colors.white,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButtonIcon: {
    marginRight: 5,
  },
  actionButtonText: {
    fontSize: 12,
    color: Colors.white,
  },
});
