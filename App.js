import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Header from './components/Header'
import TodoItem from './components/TodoItem'

export default function App() {
  const [ todos, setTodos ] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'find some jobs', key: '2' },
    { text: 'play some guitar', key: '3' },
  ])

  const clickHandler = (id) => {
    console.log(id)
    setTodos((prevTodos)=> {
      return( prevTodos.filter((todo) => todo.key != id))
    })
  }
  return (
    <View style={styles.container}>
      {/* header */}
      <Header />
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={ ({ item }) => (
              <TodoItem item={item} clickHandler={clickHandler}/>
            )}
            />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
