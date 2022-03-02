import React from "react";
import { StyleSheet, StatusBar, SafeAreaView, View } from "react-native";
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

const App = () => {
  return (
    <View style={styles.a}>
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <Header />
      <AlbumList />
    </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  a:{
    flex: 1,
    color: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    color: '#ffffff',
  },
});

export default App;
