import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from './src/helpers/apiAccessTokens';

export default function App() {
  const [ListMovie, setListMovie] = useState([]);

  // useEffect(() => {
  //   getLatestMovieList();
  // }, []);

  const getPopularMovieList = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/top_rated`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getTopRatedMovieList = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/popular`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const getNowPlayingMovieList = async () => {
    try {
      const results = await axios.get(`${BaseUrl}movie/now_playing`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });

      setListMovie(results.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  const cardMovie = ({item}) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{height: 200, resizeMode: 'contain'}}
        />
      </View>
    );
  };

  return (
    <View>
      <Text>List Movie</Text>
      <TouchableOpacity onPress={getPopularMovieList}>
        <Text>Popular</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getNowPlayingMovieList}>
        <Text>Now Playing</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={getTopRatedMovieList}>
        <Text>Top Rated</Text>
      </TouchableOpacity>
      <FlatList
        data={ListMovie}
        keyExtractor={(item, index) => index}
        renderItem={cardMovie}
      />
    </View>
  );
}
