import React from "react";
import { ScrollView } from "react-native";
import AlbumDetail from "./AlbumDetail";
import Artist from "./Artist";
import albumData from "../json/albums";

const Albumlist = () => {
  return (
    <ScrollView>
      <Artist/>
      <AlbumDetail album = {albumData[0]} />
      <AlbumDetail album = {albumData[1]} />
      <AlbumDetail album = {albumData[2]} />
      <AlbumDetail album = {albumData[3]} />
      <AlbumDetail album = {albumData[4]} />
      <AlbumDetail album = {albumData[5]} />
      <AlbumDetail album = {albumData[6]} />
      <AlbumDetail album = {albumData[7]} />
    </ScrollView>
  );
};

export default Albumlist;
