import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../themes/colors';
import { font, fontSize } from '../../themes/fonts';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  row: { flexDirection: 'row' },
  scrollContainer: {
    flex: 1,
    marginBottom: 20,
    paddingHorizontal: 25,
    marginTop: 40,
  },
  bodyView: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  image: {
    width: width / 4,
    height: width / 4,
    borderRadius: 10,
  },
  textView: {
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  name: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: fontSize.veryLarge,
    color: colors.black,
  },
  username: {
    marginLeft: 15,
    fontSize: fontSize.size17,
    color: colors.gray2,
  },
  house: {
    marginLeft: 15,
    fontSize: fontSize.medium,
    color: colors.black,
  },
  normalText: {
    marginLeft: 10,
    fontSize: fontSize.size15,
    color: colors.black,
    marginBottom: 15,
  },
  marginTop: {
    marginTop: 20,
  },
});

export default styles;
