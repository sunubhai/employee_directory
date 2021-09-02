// @flow
import * as React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../themes/images';
import styles from './styles';

type ImageCellProps = {
  navigation: any,
  navigateTo: string,
};
export const ImageCell = ({ item, navigation }: ImageCellProps) => {
  function getTextPlaceHolder(name) {
    if (name !== undefined && name.trim() !== '' && name !== null) {
      let matches = name.match(/\b(\w)/g);
      if (matches !== null) {
        if (matches.length > 1) {
          return matches[0].concat(matches[1]);
        }
      }
      return name[0];
    } else {
      return '';
    }
  }

  return (
    <TouchableOpacity
      style={styles.listItemView}
      onPress={() => {
        navigation.navigate('DetailScreen', { item });
      }}>
      <View style={[styles.imageBorder]}>
        {item.profile_image !== null ? (
          <Image
            style={[styles.cellView]}
            resizeMode={'contain'}
            source={{
              uri: item.profile_image,
            }}
          />
        ) : (
          <Text style={[styles.avatarText]}>
            {getTextPlaceHolder(item.name)}
          </Text>
        )}
      </View>

      <View style={styles.textView}>
        <Text style={styles.name}>{item.name}</Text>
        {item.company && (
          <Text style={styles.company}>{item.company.name}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};
