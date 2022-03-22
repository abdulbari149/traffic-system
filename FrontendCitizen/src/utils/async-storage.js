import AsyncStorage from '@react-native-async-storage/async-storage';

export const setAuthToken = async (type, value = '') => {
  const token = value !== '' ? value?.split(' ')[1] : ''
  try {
    const value = await AsyncStorage.setItem(`@${type}_token`, token);
    return value;
  } catch (error) {
    throw new Error('Token was unable to set');
  }
};

export const getAuthToken = async (type) => {
  try {
    const value = await AsyncStorage.getItem(`@${type}_token`);
    return value;
  } catch (error) {
    throw new Error("Auth Token was not found");
  }
};