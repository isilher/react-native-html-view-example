import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'

const HTML_CONTENT = '<h1>Header 1</h1><br>Aenean eu leo quam. <b>Pellentesque ornare sem lacinia quam venenatis <span class="wysiwyg-color-orange">vestibulum</span>.</b> Cras mattis <i>consectetur purus sit amet fermentum.</i> Nulla vitae elit libero, a pharetra augue. <u>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</u>&#65279; Maecenas sed diam eget risus varius blandit sit amet non magna.<br><br><ol><li>First</li><li>Second</li><li>Third</li><li>Fourth</li></ol><h2>&#65279;Header 2</h2><div><br></div>Cras mattis consectetur purus sit amet fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam eget risus varius blandit sit amet non magna.<br><br><ul><li>Lorem</li><li>Ipsum</li><li>Sed</li></ul><h3>&#65279;Header 3</h3><div><br></div><div>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec sed odio dui. Donec id elit non mi porta gravida at eget metus.</div><div><br></div><div>Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Nullam id dolor id nibh ultricies vehicula ut id elit. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</div>'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Text style={styles.mainTitle}>
          HTML View Example
        </Text>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <HTMLView
            value={HTML_CONTENT}
            // stylesheet={styles}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'lightblue',
  },
  scrollContainer: {
    padding: 30,
    paddingTop: 10,
  },
  mainTitle: {
    fontSize: 20,
    margin: 30,
    marginBottom: 10,
  },
})

export default App
