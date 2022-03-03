import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>ぬゆり</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#888",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
    backgroundColor: '#f1f1f1', 
  },
  textStyle: {
    fontSize: 20,
    color: '#121212',
  },
});

export default Header;
