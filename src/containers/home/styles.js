import { Dimensions, StyleSheet } from 'react-native';
import colors from '../../themes/colors';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
    // paddingBottom: 20,
  },
  body: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 30,
    paddingHorizontal: 25,
  },
  search: {
    alignItems: 'center',
    height: 40,
    borderRadius: 5,
    borderColor: colors.gray1,
    borderWidth: 1,
    marginBottom: 20,
  },
  image: {
    width: '100%',
  },
  line: {
    height: 1,
    backgroundColor: colors.gray1,
    marginVertical: 20,
  },
});

export default styles;
