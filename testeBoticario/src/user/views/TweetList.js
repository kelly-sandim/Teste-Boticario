import React, {Component} from 'react'
import {ScrollView, Text, ActivityIndicator, StyleSheet, View} from 'react-native'
import Tweet from './Tweet'
import ListView from "deprecated-react-native-listview"
//import data from './tweets.json'
import axios from "axios"
export default class TweetsList extends Component  {

    constructor(props){
        super(props)


        this.state = {
            dataSource: [],
            data: false
        }
        this.renderRow = this.renderRow.bind(this)
        this.handleScroll = this.handleScroll.bind(this)
    }
    componentDidMount(){
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        })
        axios.get(`https://randomuser.me/api/?results=10`)
        .then(response => {
          console.log(response)
          return response
        })
        .then(json => {
    
          console.log(json)
          const {results} = json.data
          console.log(results)
          this.setState({dataSource: ds.cloneWithRows(results), data: true})
          
        })
        .catch((error) => {
            console.log(` ${error}`)
        });

       console.log(this.props.navigation)
    }
    handleScroll(event) {

        console.log('child', event.nativeEvent.contentOffset.y);
        if (event.nativeEvent.contentOffset.y == 0){
            console.log('youve reachd top sending conrol to arent')
            this.props.shouldScroll()
        }

       }

    renderRow(record){

        return(
            <Tweet navigation={this.props.navigation} {...record} />
        )

    }

    render() {
        return (

            
            <View>
             
                { this.state.data ? 
                    <ListView
                        renderScrollComponent={this.props.renderScrollComponent}
                        
                        dataSource={this.state.dataSource}
                        renderRow={this.renderRow}
                    /> 
                    :             
                    <View style={[styles.container, styles.horizontal]}>                
                        <ActivityIndicator size="small" color="rgb(29, 161, 242)" />
                    </View> 
                }
        
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      alignItems:"center",
      justifyContent: 'center',
      padding: 10
    }
  })