import React, { Component } from "react";
import {
  Animated,
  View,
  ListView,
  ScrollView,
  Text,
  Dimensions, Image, StyleSheet
} from "react-native";
const { height, width } = Dimensions.get("window");
import {createStackNavigator} from 'react-navigation'

//import data from './Tweet/tweets.json'
import Tweet from './Tweet'

import { Button, Card } from "react-native-elements";
import { StackNavigator, NavigationActions } from "react-navigation";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const userImage = {
  uri:
    "https://pbs.twimg.com/profile_images/951903664809050114/Grfd40ih_400x400.jpg"
};
const userBannerImage = {
  uri: "https://pbs.twimg.com/profile_banners/320086859/1518817459/1500x500"
};

const IMG_SRC = {
  uri: "https://pbs.twimg.com/profile_banners/320086859/1518817459/1500x500"
};
const IMG_HEIGHT = 100;
const NAVBAR_HEIGHT = 64;
const SCREEN_HEIGHT = Dimensions.get("window").height;

import TweetList from './TweetList'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  renderRoww(rowData) {
    console.log(rowData);
    return (
      <View
        style={{
          width: width,
          height: 60,
          borderWidth: 1,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Text>{rowData}</Text>
      </View>
    );
  }
  renderRow(record){

    return(
        <Tweet navigation={this.props.navigation} {...record} />
    )

}
  render() {
    var headMov = this.state.scrollY.interpolate({
      inputRange: [0, 380, 381],
      outputRange: [0, -380, -380]
    });
    var hamovY = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -20, -20]
    });
    var hamovX = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [0, -120, -120]
    });
    var imgOp = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [1, 0, 0]
    });
    var misMovY = this.state.scrollY.interpolate({
      inputRange: [0, 180, 181],
      outputRange: [-50, 50, 50]
    });
    var headColor = this.state.scrollY.interpolate({
      inputRange: [0, 20, 40, 60, 800],
      outputRange: ["rgb(27, 40, 54)","rgb(27, 40, 54)","rgb(27, 40, 54)","rgb(27, 40, 54)", "rgb(27, 40, 54)"]
    });
    var headColor2 = this.state.scrollY.interpolate({
        inputRange: [0, 20, 40, 60, 800],
        outputRange: ["transparent","transparent","transparent","red", "red"]
      });
      var displayColor = this.state.scrollY.interpolate({
        inputRange: [0, 20, 40, 60, 800],
        outputRange: ["transparent","transparent","transparent","white", "white"]
      });
    var harot = this.state.scrollY.interpolate({
      inputRange: [0, 100],
      outputRange: ["0deg", "360deg"]
    });
    return (
      <View style={styles.container}>

        <Animated.View style={[styles.header, {backgroundColor: headColor2}]}>
          <Button icon={{ name: 'arrow-back', type: 'material', size:30, style: { color: "white", } }}
                  buttonStyle={styles.backButton} onPress={() => this.props.navigation.navigate('Home')}/>

          <Animated.Text style={[styles.headerName, {color:displayColor}]}>Maverick 😎</Animated.Text>
          <SimpleLineIcons size={20} name="options-vertical" style={styles.menuIcon}/>
        </Animated.View>

        <TweetList
        navigation={this.props.navigation}
        renderScrollComponent={this.renderScroll.bind(this)}
        />

        <Animated.View style={[styles.topContainer, {transform: [ { translateY: hamovY }, { translateX: hamovX }, { rotate: harot } ]}]}>
          </Animated.View>
              <Animated.View style={[styles.banner, {backgroundColor: headColor,transform: [{ translateY: headMov }]}]}>
                <View style={styles.topBannerContainer}>
                  <View style={styles.bannerImageContainer}>
                    <Image style={[StyleSheet.absoluteFill,{resizeMode:"cover"}]} source={userBannerImage}/>
                  </View>
                  <View style={styles.info}>
                    <View style={styles.infoTop}>
                      <Image
                          onPress={() => this.props.navigation.navigate('DrawerClose')}
                          source={userImage}
                          style={styles.userPhoto}/>
                    
                      <Button
                        buttonStyle={styles.editProfileButton}
                        onPress={() => navigation.dispatch(NavigationActions.back())}
                        title="Edit Profile"
                        textStyle={styles.editProfileButtonText}
                      />                     
                    </View>
                    <View style={styles.nameAndHandle}>
                        <Text style={styles.name}>Maverick 😎</Text>
                        <Text style={styles.handle}>@Gbenga</Text>
                    </View>
                    <View style={styles.bio}>
                      <Text style={{
                          color: "white"
                        }}>Software Architect | CTO @betagrade & 360NEEDS GROUP Software Architect | CTO @betagrade & 360NEEDS GROUP</Text>
                    </View>
                    <View style={styles.cityAndLinkContainer}>
                      <SimpleLineIcons
                      name={'location-pin'}
                      size={14}
                      color={'rgb(136, 153, 166)'}>
                        <Text style={styles.city}> Lagos, Nigeria</Text>
                      </SimpleLineIcons>
                      <Ionicons
                      name={'ios-link-outline'}
                      size={18}
                      style={{marginLeft:15}}
                      color={'rgb(136, 153, 166)'}>                     
                        <Text style={styles.link}> medium.com/@gbenga</Text>
                      </Ionicons>
                    </View>
                    <View style={styles.dobContainer}>
                        <MaterialCommunityIcons
                        name={'airballoon'}
                        size={14}     
                        color={'rgb(136, 153, 166)'}/>
                        <Text style={styles.dob}>Born on June 21</Text>
                    </View>
                    <View style={styles.followingAndFollowersContainer}>
                        <View style={styles.followingContainer}>
                          <Text style={styles.followingCount}>970</Text>
                          <Text style={styles.followingText}>Following</Text>
                        </View>
                        <View style={styles.followersContainer}>
                          <Text style={styles.followersCount}>1,325  </Text>
                          <Text style={styles.followersText}> Followers</Text>
                        </View>
                    </View>
                  </View>

                </View>
        </Animated.View>
      </View>
    );
  }
  _handleScroll(e) {
    // console.log(e.nativeEvent.contentOffset.y, "jvjhvhm");
  }

  renderScroll(props) {
    return (
      <Animated.ScrollView
        {...props}
        scrollEventThrottle={16}
        contentContainerStyle={{
          paddingTop: 330
        }}
        // Declarative API for animations ->
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: this.state.scrollY } }
            }
          ],
          { listener: this._handleScroll.bind(this) },
          {
            useNativeDriver: true // <- Native Driver used for animated events
          }
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(20, 29, 38)"
  },
  header: {
    minHeight: 60,
    flex: 0.1,
    borderColor: "red",
    borderWidth: 0,
    zIndex: 1000000000
  },
  backButton: {
    backgroundColor: "transparent",
    position: "absolute",
    top: -5,
    left: -10,
    padding: 20,
    paddingLeft: 15
  },
  headerName: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 0,
    left: 50,
    padding: 20,
    paddingLeft: 15,
    fontWeight: "bold"
  },
  menuIcon: {
    color: "white",
    position: "absolute",
    top: 20,
    right: 20
  },
  topContainer: {
    top: -height + 100,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "yellow",
    width: 100,
    alignSelf: "center"
  },
  banner: {
    position: "absolute",
    height: 380,
    borderColor: "red",
    borderWidth: 0,
    width: width,
    top: 0,
    justifyContent: "flex-end",
    flexDirection: "column"
  },
  topBannerContainer: {
    flex: 1,
    borderColor: "yellow",
    borderWidth: 0
  },
  bannerImageContainer: {
    flex: 0.25,
    borderColor: "red",
    borderWidth: 0
  },
  info: {
    flex: 0.75,
    borderColor: "blue",
    flexDirection: "column",
    borderWidth: 0
  },
  infoTop: {
    borderColor: "red",
    flexDirection: "row",
    borderWidth: 0,
    justifyContent: "space-between",
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15
  },
  editProfileButton: {
    backgroundColor: "transparent",
    borderColor: "rgb(29, 161, 242)",
    borderWidth: 1,
    borderRadius: 25,
    padding: 6,
    width: 100
  },
  editProfileButtonText: {
    color: "rgb(136, 153, 166)",
    fontWeight: "bold",
    backgroundColor: "transparent",
    fontSize: 14
  },
  nameAndHandle: {
    borderColor: "red",
    flexDirection: "column",
    borderWidth: 0,
    justifyContent: "space-between",
    paddingLeft: 15
  },
  name: { color: "white", fontWeight: "bold", fontSize: 18 },
  handle: { color: "rgb(136, 153, 166)", fontWeight: "bold", fontSize: 14 },
  bio: {
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 5,
    paddingLeft: 15
  },
  cityAndLinkContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    paddingLeft: 15
  },
  city: { color: "rgb(29, 161, 242)", fontSize: 14, marginLeft: 15 },
  link: { color: "rgb(29, 161, 242)", fontSize: 14, marginLeft: 15 },
  dobContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    paddingLeft: 15
  },
  dob: { color: "rgb(136, 153, 166)", fontSize: 14, marginLeft: 10 },
  followingAndFollowersContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    paddingLeft: 15
  },
  followingContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginRight: 15
  },
  followingCount: { color: "white", fontWeight: "bold" },
  followingText: {
    color: "rgb(136, 153, 166)",
    fontWeight: "300",
    marginLeft: 5
  },
  followersContainer: { flexDirection: "row" },
  followersCount: { color: "white", fontWeight: "bold" },
  followersText: {
    color: "rgb(136, 153, 166)",
    fontWeight: "300",
    marginLeft: 0
  },
  userPhoto: {
    width: 70,
    height: 70,
    borderRadius: 55,
    zIndex: 1000000000000,
    borderWidth: 0,
    borderColor: "black",
    resizeMode: "cover"
  }
});