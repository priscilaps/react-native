import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

import BalanceLabel from '../../componentes/BalanceLabel';

import {saveEntry, deleteEntry} from '../../services/Entries';

export default NewEntry = ({navigation}) => {
  const currentBalance = 2065.35;
  const entry = navigation.getParams('entry', {
    id: null,
    amount: '0.00',
    entryAt: new Date(),
  });

  const [amount, setAmount] = useState(`${entry.amount}`);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
    };
    console.log('NewEntry :: save', data);
    saveEntry(data, entry);
    onCLose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onCLose();
  };

  const onCLose = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <BalanceLabel currentBalance={currentBalance} />

      <View>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={text => setAmount(text)}
        />
        <TextInput style={styles.input} />
        <Button title="GPS" />
        <Button title="Camera" />
      </View>

      <View>
        <Button title="Adicionar" onPress={() => isValid() && onSave()} />
        <Button title="Excluir" onPress={onDelete} />
        <Button title="Cancelar" onPress={onCLose} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  input: {
    borderColor: '#000',
    borderWidth: 1,
    marginBottom: 10,
  },
});
