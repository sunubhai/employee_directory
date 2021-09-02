// @flow

import React from 'react';
import {
  Dimensions,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Header } from '../../components/header';
import { ImageCell } from '../../components/imageCell';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../../themes/colors';

const { height } = Dimensions.get('window');

type Props = {
  navigation: any,
  route: any,
};

function DetailScreen(props: Props): any {
  const insets = useSafeAreaInsets();
  const data = props.route.params.item;
  return (
    <View style={[styles.mainContainer, { paddingTop: insets.top + 10 }]}>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor={'transparent'}
      />
      <Header leftArrow={true} navigation={props.navigation} name={'List'} />
      <View style={styles.scrollContainer}>{renderBody()}</View>
    </View>
  );
  function renderBody() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          <Image
            style={[styles.image]}
            resizeMode={'contain'}
            source={{
              uri: data.profile_image,
            }}
          />
          <View style={styles.textView}>
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.username}>{data.username}</Text>
            <View>
              <Text style={styles.house}>{data.address.suite}</Text>
              <Text style={styles.location}>
                {data.address.street + ', ' + data.address.city}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.marginTop}>
          <View style={styles.row}>
            <Icon size={20} name={'envelope'} color={colors.primaryGreen} />
            <Text style={styles.normalText}> {data.email}</Text>
          </View>
          <View style={styles.row}>
            <Icon size={20} name={'phone'} color={colors.primaryGreen} />
            <Text style={styles.normalText}> {data.phone}</Text>
          </View>

          {data.company && (
            <>
              <View style={styles.row}>
                <Icon size={20} name={'building'} color={colors.primaryGreen} />
                <Text style={styles.normalText}> {data.company.name}</Text>
              </View>
              <View style={styles.row}>
                <Icon size={20} name={'cube'} color={colors.primaryGreen} />
                <Text style={styles.normalText}>
                  {' '}
                  {data.company.catchPhrase}
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    );
  }
}

export default DetailScreen;
