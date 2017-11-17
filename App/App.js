import React, { Component } from 'react'
import { View, Text, ScrollView, StatusBar, StyleSheet } from 'react-native'
import HTMLView from 'react-native-htmlview'

const HTML_CONTENT = '<div class="trumbowyg-editor" contenteditable="true" dir="ltr" style="height: 71px;"><h1>Bob</h1><p>This is <strong>Bob</strong>. Read his story about Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. <strong>Morbi leo risus,<u> porta ac <em>consectetur</em></u> ac, vestibulum at eros.</strong> Vestibulum id ligula porta felis euismod semper.</p><p><em>Praesent commodo</em> cursus magna, vel scelerisque nisl consectetur et. <u>Sed posuere consectetur est at lobortis</u>. Maecenas sed diam eget risus varius blandit sit amet non magna. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.</p><h2><span style="color: inherit; font-family: inherit; font-size: 30px;">con:</span></h2><ul><li>Donec ullamcorper nulla non metus auctor fringilla. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Curabitur blandit tempus porttitor.</li><li>Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</li></ul><h2>pros:</h2><ol><li>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</li><li>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Vestibulum id ligula porta felis euismod semper. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</li></ol><h3>Tiny title</h3><p>The rest.</p></div>'

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
            // RootComponent={Text}
            // stylesheet={styles}
            // addLineBreaks={false}
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
