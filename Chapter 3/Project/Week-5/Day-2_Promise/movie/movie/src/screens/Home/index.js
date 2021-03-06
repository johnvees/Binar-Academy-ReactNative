import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {ACCESS_TOKEN, BaseUrl, ImageUrl} from '../../helpers/apiAccessTokens';
import {useSelector, useDispatch} from 'react-redux';
import {setMovie} from './redux/action';

export default function App() {
  // const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const [categories, setCategories] = useState('now_playing');
  const listTopTab = useSelector(state => state.home.listTopTab);
  const movie = useSelector(state => state.movie.now_playing);

  const getListMovieLatest = async () => {
    try {
      // setMovies('');
      const result = await axios.get(`${BaseUrl}movie/${categories}`, {
        headers: {Authorization: `Bearer ${ACCESS_TOKEN}`},
      });
      // setMovies(result.data.results);
      dispatch(setMovie(result.data.results));
      console.log(result);
    } catch (error) {
      return <Text>Data Tidak Ada</Text>;
    }
  };

  useEffect(() => {
    getListMovieLatest();
    // dispatch(setMovie());
  }, [categories]);

  const cardMovie = ({item}) => {
    return (
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 20,
            color: 'black',
          }}>
          {item.title}
        </Text>
        <Image
          source={{uri: `${ImageUrl}${item.poster_path}`}}
          style={{
            height: 200,
            resizeMode: 'contain',
            marginBottom: 16,
            borderRadius: 8,
            // backgroundColor: 'white',
          }}
        />
      </View>
    );
  };

  const topTab = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setCategories(item);
        }}>
        <Text style={styles.text}>{item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{backgroundColor: 'white'}}>
      <Text
        style={{
          textAlign: 'center',
          marginVertical: 16,
          fontSize: 24,
          fontWeight: '900',
          color: 'black',
        }}>
        List Movie
      </Text>
      <FlatList
        data={listTopTab}
        keyExtractor={(item, index) => index}
        renderItem={topTab}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      {/* <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCategories('popular');
          }}>
          <Text style={styles.text}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCategories('top_rated');
          }}>
          <Text style={styles.text}>Top Rated</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setCategories('now_playing');
          }}>
          <Text style={styles.text}>Now Playing</Text>
        </TouchableOpacity>
      </View> */}
      <Text
        style={{
          marginBottom: 16,
          marginStart: 16,
          fontSize: 16,
          fontWeight: '900',
          color: 'black',
        }}>
        Sort By: {categories}
      </Text>
      <FlatList
        data={movie}
        keyExtractor={(item, index) => index}
        renderItem={cardMovie}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
  button: {
    backgroundColor: 'aqua',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
});
