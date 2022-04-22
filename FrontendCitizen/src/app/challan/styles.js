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
    marginBottom: 14,
  },
  challanContainer: {
    padding: 15,
  },
  challanDetailText: {
    textDecorationLine: "underline",
    color: "#000",
    fontSize: 16,
    padding: 0,
  },
  fineText: {
    backgroundColor: "#FBAAAA",
    width: 40,
    padding: 2,
    textAlign: "center",
    alignSelf: "flex-end",
    color: "#0C0C0C",
  },
  detailsContainer: {
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: "white",
  },
  detailsTop: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  accordinContainer: {
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingVertical: 15,
    borderBottomColor: "#afafaf",
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
  },
  accordinButton: {
    backgroundColor: "#F2F2F2",
    borderRadius: 60,
    width: 35,
    height: 35,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  accordin: {
    display: "flex",
    justifyContent: "space-between",
    alignContent: "space-between",
    flexDirection: "row",
  },
	accordinLabelContainer: {
		width: "40%"
	},
	accordinValueContainer: {},
	accordinValue: {
		paddingVertical: 6,
		fontSize: 15
	},
  accordinLabel: { fontWeight: "bold", fontSize: 17, paddingVertical: 6 },
});

export default styles;
