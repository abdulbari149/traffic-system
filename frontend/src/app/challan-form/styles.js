import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    padding: 18,
    flex: 1,
  },
  keyboardScrollViewContainer: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  heading: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    lineHeight: 30,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 30,
  },
  textContainer: {
    marginVertical: 30,
  },
  proceedBtn: {
    marginRight: 10,
    fontSize: 16,
    color: "#0038ff",
    fontWeight: "bold",
  },
  challanHomeContainer: {
    height: "100%",
    backgroundColor: "#fff",
    display: "flex",
    alignItems: "center",
    gap: 20,
  },
  challanHomeMain: {
    flex: 0.75,
    marginVertical: "12%",
    marginHorizontal: "10%",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
  challanHomeParagraph: {
    fontSize: 16,
    marginVertical: 15,
    textAlign: "center",
    lineHeight: 25,
  },
})

export const voilationStyles = StyleSheet.create({
  voilationContainer: {
    cursor: "pointer",
    backgroundColor: "rgba(0, 56, 255, 0.05)",
    width: "100%",
    padding: 20,
    alignItems: "center",
    textAlign: "center",
    border: "none",
    borderRadius: 10,
    marginTop: 10,
  },
});
export default styles