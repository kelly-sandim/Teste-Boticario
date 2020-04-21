import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView, TextInput
} from 'react-native'

import EvilIcons from 'react-native-vector-icons/EvilIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import ReplyComponent from './ReplyTweet'
import randomWords from 'random-words'
import TweetList from './TweetList'

const userImage = require('../assets/images/avatar.png');

export default class BoldTweet extends React.Component {

  constructor() {
    super()
    this.state = {
      touched: false,
      tweet: randomWords({min: 18, max: 40}).join(" "),
      retweets:Math.floor((Math.random() * 100) + 1),
      likes:Math.floor((Math.random() * 10) + 1),
      name:"Maverick 😎 ",
      handle:"@Gbxnga",
      time:"1h",
      retweeted:false,
      liked:false,
      retweetedBy:["Sandra", "Hannit","Michael", "Jason", "Queen"][Math.floor(Math.random()*["Sandra", "Hannit","Michael", "Jason", "Queen"].length)]
    }
    this.tweetPressed = this
      .tweetPressed
      .bind(this)

    this.retweet = this.retweet.bind(this)
    this.like = this.like.bind(this)
  }

  tweetPressed(pressed = false) {
    this.setState({touched: pressed})
    
    if (!pressed) this.props.navigation.navigate('Thread')
  }

  retweet(){

    const {retweeted, retweets} = this.state
  

    if (retweeted) 
      this.setState({retweeted: false, retweets: retweets-1})
    

    else this.setState({retweeted: true, retweets: retweets+1})
  }
  like(){
    const {liked, likes} = this.state
  

    if (liked) 
      this.setState({liked: false, likes: likes-1})
    

    else this.setState({liked: true, likes: likes+1})
  }

  render() {

    const {navigation, thekey} = this.props
    const {touched, tweet, retweets, likes, name, handle, time, retweetedBy, retweeted, liked} = this.state

    return (
    <View style={styles.container}>
             
        <ScrollView>
            <TouchableHighlight onPressIn={() => this.tweetPressed(true)} onPressOut={() => this.tweetPressed()}>
                <View style={styles.tweetContainer} >

                    <View style={styles.top} >
                        <View style={styles.topContainer} >
                            <TouchableOpacity
                                style={{borderColor:"blue", borderWidth:0, flex:0.2, alignItems:"center"}}
                                onPress={() => navigation.navigate('Profile')}>
                                <Image
                                source={userImage}
                                style={styles.userPhoto}/>
                            </TouchableOpacity>
                            <View style={styles.userInfoContainer}>
                                <Text style={styles.userName}>Oluyi Gates</Text>
                                <Text style={styles.userHandle}>@oluwapower</Text>
                            </View>
                            <View style={styles.options}>
                                <TouchableOpacity
                                    style={{ padding:10, marginLeft:30}}
                                    onPress={() => navigation.navigate('Profile')}>
                                    <Ionicons
                                        size={20}
                                    name={'ios-arrow-down-outline'}
                                    color="rgb(136, 153, 166)"
                                    />
                                </TouchableOpacity>
                            </View>
                        
                        </View>
                        
                    
                    </View>
                    <View style={styles.middle}>
                        <Text style={{color:"white", fontSize:18}}>{tweet}</Text>
                    </View>
                    <View style={styles.bottom}>
                        <Text style={{color:"rgb(136, 153, 166)"}}>9:06 AM . 17 Jun 18</Text>
                    </View>
                    <View style={styles.tweetActions} >
                        <TouchableOpacity style={styles.commentButton}>
                            <EvilIcons name={'comment'} size={26} color={'rgb(136, 153, 166)'}/>
                        
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.retweet()} style={styles.retweetButton}>
                            <EvilIcons name={'retweet'} size={30} color={(retweeted) ? "rgb(23, 191, 99)":'rgb(136, 153, 166)'}/>
                        
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=> this.like()} style={styles.likeButton}>
                        { liked ? 
                        <Entypo name={'heart'} size={22} style={{marginLeft:2}} color={liked ? "rgb(224, 36, 94)" : 'rgb(136, 153, 166)'}/>
                        :
                        <EvilIcons name={'heart'} size={28} color={liked ? "rgb(224, 36, 94)" : 'rgb(136, 153, 166)'}/>
                        
                        }
                        
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareButton}>
                            <SimpleLineIcons name={'share'} size={23} color={'rgb(136, 153, 166)'}/>
                        
                        </TouchableOpacity>
                    </View>

                </View>
            </TouchableHighlight>
            <TweetList navigation={navigation} number={5}/>
        </ScrollView>
    
        <ReplyComponent/>
    </View>
    )
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(27, 40, 54)"
  },
  tweetContainer: {
    flex: 1,
    padding: 0,
    borderBottomColor: "black",
    flexDirection: "column",
    backgroundColor: "rgb(27, 40, 54)",
    borderBottomWidth: 0.5
  },
  top: {
    flex: 1,
    borderColor: "red",
    padding: 0,
    flexDirection: "row",
    height: 70,
    backgroundColor: "rgb(27, 40, 54)",
    borderWidth: 0
  },
  topContainer: {
    flex: 1,
    borderColor: "yellow",
    height: 70,
    flexDirection: "row",
    justifyContent: "flex-start",
    backgroundColor: "rgb(27, 40, 54)",
    borderWidth: 0
  },
  middle: {
    flex: 1,
    borderColor: "yellow",
    height: "auto",
    backgroundColor: "rgb(27, 40, 54)",
    borderWidth: 0,
    padding: 10
  },
  bottom: {
    flex: 1,
    borderColor: "yellow",
    height: "auto",
    backgroundColor: "rgb(27, 40, 54)",
    borderWidth: 0,
    padding: 10
  },
  userPhoto: {
    width: 50,
    height: 50,
    borderRadius: 50,
    marginTop: 15
  },
  userInfoContainer: {
    justifyContent: "center",
    borderColor: "blue",
    borderWidth: 0,
    flex: 0.5
  },
  userName: { fontWeight: "bold", color: "white" },
  userHandle: { color: "rgb(136, 153, 166)" },
  options: {
    borderColor: "blue",
    borderWidth: 0,
    flex: 0.3,
    alignItems: "flex-end"
  },
  tweetActions: {
    flex: 1,
    borderTopColor: "black",
    height: "auto",
    flexDirection: "row",
    backgroundColor: "rgb(27, 40, 54)",
    borderTopWidth: 0.5,
    padding: 5,
    marginLeft: 10,
    marginRight: 10
  },
  commentButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 0
  },
  retweetButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 0
  },
  likeButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 0
  },
  shareButton: {
    padding: 5,
    flex: 0.25,
    alignItems: "center",
    borderColor: "red",
    borderWidth: 0
  }
});