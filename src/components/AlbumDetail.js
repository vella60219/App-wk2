import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const AlbumDetail = (props) => {
  const { title, album, image } = props.album;
  return (
    <View style={styles.cardContainerStyle}>
      <View style={[styles.cardSectionStyle, styles.cardImg]}>
        <Image
          style={styles.imageStyle}
          source={{
            uri: image
          }}
        />
      </View>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
        <View style={styles.headerContentStyle}>
          <Text style={styles.textA}>{title}</Text>
          <Text style={styles.textB}>{album}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImg:{
    shadowColor: "#000",
    shadowOffset: { width: 8, height: 5 },
    shadowOpacity: 0.4,
  },
  textA: {
    fontSize:25,
    color:'#111',
    fontWeight:'600',
    
  },
  textB: {
    fontSize:10,
    marginTop:10,
    color: '#777'
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5,
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardContainerStyle: {
    // borderWidth: 1,
    // borderRadius: 2,
    // borderColor: "#ddd",
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
    elevation: 1,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    //backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 2,
  },
  cardSectionStyle: {
    padding: 10,
    
  },
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    paddingTop: 5,
    paddingBottom: 20,
    width:'100%',
  },
  imageStyle: {
    height: 300,
    width: 300,
    alignSelf: 'center',
    borderRadius:5,
  },
  
});

export default AlbumDetail;