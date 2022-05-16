import { Box } from "native-base";
import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useGetProfilePicQuery } from "src/api";
import { useNavigation } from "@react-navigation/native";
import { WARDEN_PROFILE_SCREEN, AUTH_HOME_SCREEN } from "src/routes";
import { useDispatch, useSelector }from "react-redux"
import { setProfilePic, setWardenAuth, setLogin, setToken } from "src/app/auth/slice"
import { setAuthToken } from "../utils/async-storage"
const Logout = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  async function logout(){
    dispatch(setWardenAuth({ data: {} }))
    dispatch(setLogin(false))
    dispatch(setToken({ data: "" }))
    await setAuthToken("login")
    await setAuthToken("password")
    navigation.navigate(AUTH_HOME_SCREEN)
  }
  return (
    <View style={styles.dialogContainer}>
      <Box style={styles.triangle}></Box>
      <Pressable
        style={styles.dialogItem}
        onPress={() => navigation.navigate(WARDEN_PROFILE_SCREEN)}
      >
        <AntDesign name="user" size={16} style={styles.dialogIcon} />
        <Text style={styles.dialogText}>Profile</Text>
      </Pressable>
      <Pressable style={styles.dialogItem} onPress={logout}>
        <AntDesign name="logout" size={16} style={styles.dialogIcon} />
        <Text style={styles.dialogText}>Logout</Text>
      </Pressable>
    </View>
  );
};

const Header = ({ screenName }) => {
  const [showMenu, setShowMenu] = useState(false);
  useEffect(() => {
    setShowMenu(false);
  }, []);
  const handlePress = () => {
    setShowMenu((prevMenu) => !prevMenu);
  };
  const dispatch = useDispatch()
  const [image, setImage] = useState("");
  const wardenId = useSelector(state => state.auth.warden.id)
  const { data, error, isSuccess } = useGetProfilePicQuery(wardenId);
  useEffect(() => {
    if (isSuccess) {
      console.log({ data })
      setImage(data.url);
      dispatch(setProfilePic({ data }))
    }
  }, [isSuccess]);

  return (
    <View style={styles.headerContainer}>
      <Text>Logo</Text>
      <Text
        numberOfLines={1}
        adjustsFontSizeToFit
        style={styles.pageNavigationText}
      >
        {screenName}
      </Text>
      <Pressable onPress={handlePress} style={styles.profile}>
        {image !== "" ? <Image
          source={{
            uri: `http://10.0.2.2:5000:5000/api/image/warden/file/${image}`,
            method: "GET",
          }}
          style={{ width: 50, height: 50, borderRadius: 100000 }}
        />: null}
      </Pressable>
      {showMenu && <Logout />}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  pageNavigationText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#000",
  },
  profile: {
    borderColor: "#0038FF",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 25,
  },
  dialogContainer: {
    position: "absolute",
    width: 110,
    backgroundColor: "#f4f4f3",
    top: 82,
    right: 15,
    elevation: 3,
    zIndex: 100,
  },
  triangle: {
    transform: [{ rotate: "45deg" }],
    height: 10,
    width: 10,
    position: "absolute",
    backgroundColor: "#f4f4f3",
    top: -5,
    right: 15,
  },
  dialogItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    fontSize: 14,
  },
  dialogText: { color: "black", fontSize: 15 },
  dialogIcon: { paddingRight: 10, color: "black" },
});

export default Header;
