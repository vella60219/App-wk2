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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 4,
    backgroundColor: "rgba(255,255,255,0.1)", 
  },
  textStyle: {
    fontSize: 20,
    color: '#111',
  },
});

export default Header;
