import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import Container from '../Core/Container';
import EntryListItem from '../EntryList/EntryListItem';

import {getEntries} from '../../services/Entries';

export default EntryList = ({onEntryPress, onPressActionButton}) => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries();
      setEntries(data);
    };

    loadEntries();

    console.log('Entrylist :: useEffect');
  }, []);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver +"
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <EntryListItem
            entry={item}
            isFirstItem={index === 0}
            isLastItem={index === entries.length - 1}
            onEntryPress={onEntryPress}
          />
        )}
      />
    </Container>
  );
};
