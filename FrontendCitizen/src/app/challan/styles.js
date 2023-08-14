import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  challanCard: {
    maxWidth: "100%",
    height: 160,
    borderRadius: 6,
    backgroundColor: "#F2F2F2",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 15,
    elevation: 5,
    marginBottom: 14
  },
  challanContainer: {
    padding: 15
  },
  challanDetailText: {
    textDecorationLine: "underline",
    color: "#000",
    fontSize: 16,
    padding: 0
  },
  fineText: {
    backgroundColor: "#FBAAAA",
    width: 40,
    padding: 2,
    textAlign: "center",
    alignSelf: "flex-end",
    color: "#0C0C0C"
  },
  detailsContainer: {
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "white",
    minHeight: "100%"
  },
  detailsTop: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row"
  },
  accordionContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "#afafaf",
    borderBottomStyle: "solid",
    borderBottomWidth: 2
  },
  accordionButton: {
    backgroundColor: "#F2F2F2",
    borderRadius: 60,
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  accordion: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between"
  },
  accordionItem: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    elevation: 3,
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 5,
  },
  accordionValue: {
    fontSize: 14,
    width: "60%"
  },
  accordionLabel: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#383838",
    width: "40%",
    letterSpacing: .4,
  },
  headerStatus: {
    padding: 6,
    paddingHorizontal: 12,
    color: "white",
    borderRadius: 12,
    width: 100,
    alignItems: "center",
    position: "absolute", 
    right: -20,
  },
  headerStatusText: { color: "white", width: "100%", textAlign: "center" }
});

export default styles;
