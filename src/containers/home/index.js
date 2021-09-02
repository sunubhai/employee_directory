// @flow

import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StatusBar, View, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/header';
import { ImageCell } from '../../components/imageCell';
import { getDataAndImage, saveDataAndImage } from '../../utilities/asyncStore';
import colors from '../../themes/colors';
import styles from './styles';

const { height } = Dimensions.get('window');

type Props = {
  navigation: any,
};

function Home(props: Props): any {
  const insets = useSafeAreaInsets();
  const [listData, setListData] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchImageList();
    return () => {};
  }, [search]);

  async function fetchImageList() {
    const dataAndImage = await getDataAndImage();
    // console.log('yes', dataAndImage);
    dataAndImage !== null
      ? search !== ''
        ? setListData(
            JSON.parse(dataAndImage).filter(entry =>
              Object.values(entry).some(
                val => typeof val === 'string' && val.includes(search),
              ),
            ),
          )
        : setListData(JSON.parse(dataAndImage).reverse())
      : fetchData();
  }

  function fetchData() {
    fetch('http://www.mocky.io/v2/5d565297300000680030a986?format=json')
      .then(response => response.json())
      .then(data => {
        setListData(data);
        saveDataAndImage(data);
      });
  }

  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <Header name={'Directory'} />
      <View style={styles.body}>
        <TextInput
          style={styles.search}
          multiline={true}
          placeholder={'Find a employee...'}
          placeholderTextColor={colors.gray8}
          maxLength={250}
          value={search}
          onChangeText={text => setSearch(text)}
        />
        {renderBody()}
      </View>
    </View>
  );
  function renderBody() {
    return (
      <FlatList
        data={listData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => renderImageCell(item, index)}
        keyExtractor={(item, index) => 'option' + item.id}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
    );
  }
  function renderImageCell(item) {
    return (
      <ImageCell
        item={item}
        navigation={props.navigation}
        imageHeight={height / 4}
        navigateTo={'DetailScreen'}
      />
    );
  }
}

export default Home;
