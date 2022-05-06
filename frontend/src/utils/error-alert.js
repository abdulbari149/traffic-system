import { Alert } from "react-native";

export const errorAlert = (error) => {
  Alert.alert(...Object.values(error));
};
