import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import { font, fontSize } from '../../themes/fonts';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  cellView: {
    width: width / 6,
    height: width / 6,
    borderRadius: 50,
  },
  avatarText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '100',
    fontSize: fontSize.ultraLarge,
  },
  imageBorder: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 50,
    width: width / 6 + 10,
    height: width / 6 + 10,
    borderColor: colors.primaryGreen,
    backgroundColor: colors.gray2,
  },
  listItemView: {
    flexDirection: 'row',
  },
  textView: {
    paddingVertical: 5,
    justifyContent: 'center',
  },
  name: {
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: fontSize.size17,
    color: colors.black,
  },
  company: {
    marginTop: 10,
    marginLeft: 10,
    fontSize: fontSize.size15,
    color: colors.black,
  },
});

export default styles;
