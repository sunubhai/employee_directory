/**
 * @format
 * @flow
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveDataAndImage = async (data: string) => {
  if (data != null && data !== '') {
    try {
      AsyncStorage.setItem('DataCollection', JSON.stringify(data));
    } catch (error) {}
  }
};

export const getDataAndImage = async () => {
  try {
    const myArray = await AsyncStorage.getItem('DataCollection');
    if (myArray !== null) {
      return myArray;
    } else {
      return null;
    }
  } catch (error) {
    return [''];
  }
};
