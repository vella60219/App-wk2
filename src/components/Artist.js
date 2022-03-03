import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Artist = () => {
  return (
    
    <View style={styles.cardContainerStyle}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: "https://pbs.twimg.com/profile_images/1338761654629146624/Z1wMbyZv_400x400.jpg"
          }}
        />
        <View style={styles.headerContentStyle}>
          <Text style={styles.textA}>ぬゆり</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textA: {
    fontSize:25,
    color:'#111',
    fontWeight:'600',
    alignSelf:'center'
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardContainerStyle: {
    elevation: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 75,
    marginBottom: 10,
    //backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 2,
  },
  imageStyle: {
    height: 125,
    width: 125,
    alignSelf: 'center',
    borderRadius:100,
  },
  
});

export default Artist;