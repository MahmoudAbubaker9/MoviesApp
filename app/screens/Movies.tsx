import { useState , useEffect } from "react";
import { View, StyleSheet, Text, StatusBar , FlatList} from 'react-native';


interface MoviesList {
    MoviesData: {
        movies: Array<DataType>
    }
}

interface DataType {
    id: number,
    title: string,
    releaseYear: number
}

function Movies() {
    const [movies, setMovies] = useState<MoviesList>({
        MoviesData: {movies: []}

    })
    // const [error, setError] = useState({})
  

    useEffect(() => {
        fetch('https://reactnative.dev/movies.json')
        .then(response => response.json())
        .then((res) => {setMovies({
            MoviesData: res})})
        .catch(res => console.error(Error))
      }, [])

    //   console.log('====================================');
    //   console.log(movies.MoviesData);
    //   console.log('====================================');
  

return (
    <View style={styles.container}>

    <Text style={styles.title}>List Of Movies</Text>
   
      <FlatList
        data={movies.MoviesData.movies}
        renderItem={({ item }) => (         
            <View >
            <Text style={styles.Text}>Movie Name : {item.title}<nav></nav>Release Year : {item.releaseYear}</Text><Text></Text>
            </View>
        )}
      />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    Text: {
      backgroundColor: '#6495ED',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        fontSize: 40,
        
    },
  });

export default Movies;