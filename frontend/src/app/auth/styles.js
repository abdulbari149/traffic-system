import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bgimage: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    alignSelf: "center",
    marginBottom: 35,
    marginTop: 25,
    borderRadius: 20,
  },
  loginContainer: {
    flex: 1,
    height: "48%",
    zIndex: 100,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 40,
    alignItems: "center",
  },
  loginHeading: {
    fontFamily: "Segoe UI",
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },

  loginButton: {
    margin: 15,
    backgroundColor: "#0038FF",
    width: "50%",
    alignSelf: "center",
    borderRadius: 20,
    margin: 20,
  },
  loginButtonText: {
    fontSize: 20,
    color: "white",
  },
  ghostButton: {
    marginTop: -15,
    width: "60%",
    alignSelf: "center",
  },
  ghostButtonText: {
    fontSize: 15,
    color: "#0038FF",
    fontWeight: "bold",
  },
  homeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6497F7",
    paddingVertical: 60,
    width: "100%"
  },
  headerImage: {
    alignSelf: "center",
    marginBottom: 40,
  },
  homeHeaderContainer: {
    backgroundColor: "white",
    width: "170%",
    height: "60%",
    marginTop: -50,
    borderTopLeftRadius: 260,
    borderTopRightRadius: 260,
    paddingTop: 10,
  },
  loginIntroHeader: {
    fontFamily: "Segoe UI",
    color: "#000000",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  loginIntroSubtitle: {
    textAlign: "center",
  },
  wrapper: {
    position: "absolute",
    flex: 1,
    height: "100%",
    width: "150%",
    top: 0,
    left: 0,
    zIndex: 200,
    backgroundColor: "#f8f8f8",
    opacity: .4,
    
  },
  signUpContainer: {
    height: "100%",
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    position: "relative"
  },
  passwordContainer: {
    position: "relative",
    backgroundColor: "#6497F7",
    flex: 1,
    alignItems: "center",
    overflowX: "hidden"
  },
  passwordImageBox: {
    backgroundColor: "#6497F7",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  passwordScreenText: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 32,
    textTransform: "capitalize",
  },
  passwordImage: {
    width: 120,
    height: 130,
  },
  passwordScreenSubTitle: {
    color: "white",
    margin: 35,
    fontSize: 16,
    textAlign: "center",
  },
  passwordFormContainer: {
    backgroundColor: "white",
    width: "170%",
    marginTop: -50,
    borderTopLeftRadius: 260,
    borderTopRightRadius: 260,
    paddingTop: 10,
    alignItems: "center",
  }

});

export const profilePicStyles = StyleSheet.create({
  profilePicContainer:{
    flex: 1,
    height: "100%",
    display: "flex",
    backgroundColor: "white",
    alignItems: "center",
  },
  text: {
    width: 300,
    textAlign: "center",
    fontSize: 16,
  },
  textBtn: {
    fontWeight: "bold",
    fontSize: 16,
    letterSpacing: .5,
    textTransform: "capitalize",
    textDecorationLine: "underline"
  }
})

export const keypadStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centerAlignment: {
    justifyContent: "center",
    alignItems: "center",
  },
  enterView: {
    alignSelf: "center",
    flexDirection: "row",
    flex:1.5,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  flatcontainer: {
    flex: 6,
  },
  flatlist: {
    alignSelf: "center",
  },
  icon: {
    height: 24,
    width: 24,
  },
  round: {
    width: 60,
    height: 60,
    backgroundColor: "#B0C0F9",
    borderRadius: 30,
    margin: 10,
  },
  instruction: {
    marginHorizontal: 30,
    textAlign: "center",
    color: "gray",
    fontSize: 14,
  },
  close: {
    marginTop: 30,
    marginLeft: 15,
  },
  digit: {
    fontSize: 24,
  },
  digitView: {
    flexDirection: "column",
    alignItems: "center",
  },
  redSpace: {
    height: 2,
    width: 40,
    marginHorizontal: 5,
  },
  textView: {
    marginBottom: 10,
  },
  deleteIcon: {
    height: 20,
    width: 20,
  },
});



export const idCardStyles = StyleSheet.create({
  container: {
    borderStyle: "dashed",
    borderColor: "#0038FF",
    borderWidth: 3,
    borderRadius: 10,
   
    marginTop: 25,
  },
  cardLeft: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: 150,
  },
  cardTitle: {
    textTransform: "capitalize",
    fontSize: 20,
    color: "#0038FF",
    fontWeight: "bold",
    paddingBottom: 6,
    letterSpacing: 0.5,
    marginBottom: 10,
  },
  cardSubtitle: {
    marginBottom: 10,
  },
  imageContainer: {
    width: "100%",
  }
})
export default styles;
