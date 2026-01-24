import { ActivityIndicator, View, StyleSheet, Modal } from "react-native";

export const ProgressTrackerLoadingView = () => {
  return (
    <Modal transparent={true}>
      <View style={loadingStyle.body}>
        <ActivityIndicator size={52} color="red"></ActivityIndicator>
      </View>
    </Modal>
  );
};

const loadingStyle = StyleSheet.create({
  body: {
    position: "absolute",
    backgroundColor: "#000000BF",
    height: "100%",
    width: "100%",
    justifyContent: "center",
  },
});
