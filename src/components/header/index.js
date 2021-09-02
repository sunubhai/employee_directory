// @flow
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from 'react-native';
import colors from '../../themes/colors';
import { font, fontSize } from '../../themes/fonts';
import SvgImage from '../../themes/svgIcons';

type HeaderProps = {
  color?: string,
  navigation: any,
  leftArrow: boolean,
};
export const Header = ({
  title,
  navigation,
  leftArrow = false,
  navigateTo = '',
  name = '',
}: HeaderProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          if (navigateTo === 'Home') {
            navigation.navigate('Home', { screen: 'Home' });
          } else {
            navigation.goBack();
          }
        }}
        style={styles.backIcon}>
        {leftArrow && (
          <SvgImage
            icon={'leftArrow'}
            width={30}
            height={30}
            color={colors.gray3}
          />
        )}
      </TouchableOpacity>
      <View style={styles.row}>
        <Text style={styles.headerText}>Employee</Text>
        <Text style={styles.headerTextDay}> {name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomColor: colors.gray1,
    borderTopColor: colors.white,
    borderRightColor: colors.white,
    borderLeftColor: colors.white,
    borderWidth: 1,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
  },
  backIcon: {
    position: 'absolute',
    left: 15,
  },
  headerText: {
    fontFamily: font.bold,
    fontSize: fontSize.size24,
    color: colors.gray3,
  },
  headerTextA: {
    fontFamily: font.regular,
    fontSize: fontSize.size24,
    color: colors.gray3,
  },
  headerTextDay: {
    fontFamily: font.bold,
    fontSize: fontSize.size24,
    color: colors.primaryGreen,
  },
  rightButton: {
    position: 'absolute',
    right: 20,
    padding: 10,
    margin: -10,
    paddingTop: Platform.OS === 'ios' ? 30 : 50,
  },
  rightButtonText: {
    fontFamily: font.medium,
    fontSize: fontSize.size15,
    color: colors.lightText,
  },
});
