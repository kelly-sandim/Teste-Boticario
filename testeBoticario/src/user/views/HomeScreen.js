import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, 
        Platform, 
        StyleSheet, 
        Text, 
        FlatList,
        TouchableHighlight,
        TouchableOpacity, 
        View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Body,
  Content,
  Left,
  Title,
  Thumbnail,
  Col,
  Row,
  Grid,
  Icon,
  Spinner,
  Fab,
  Button,
  Footer,
  Input,
  Right
} from "native-base";

import { connect } from "react-redux";


import { MonoText } from '../../../components/StyledText';

export default function HomeScreen() {
  return (
    <Container>
        {this.props.newTweetModalOpen && Platform.OS === "android" ? null : (
          <Header style={styles.topMargin}>
            <Left>
              <Thumbnail small source={{ uri: this.props.user.avatar }} />
            </Left>
            <Body>
              <Title style={{ color: "#121212" }}>Home</Title>
            </Body>
            <Right>
              <Button transparent onPress={this.openModal.bind(this)}>
                <Icon name="md-create" style={{ color: "#4286f4" }} />
              </Button>
            </Right>
          </Header>
        )}

        <Modal
          ref={"newTweetModal"}
          backdrop={true}
          style={styles.modal}
          isOpen={this.props.newTweetModalOpen}
          onClosed={this.closeModal.bind(this)}
        >
          <View
            style={{
              alignSelf: "flex-start",
              alignItems: "center",
              flexDirection: "row",
              padding: 5,
              paddingRight: 10
            }}
          >
            <Button transparent onPress={this.closeModal.bind(this)}>
              <Icon name="close" style={{ color: "black", fontSize: 32 }} />
            </Button>
            <View style={{ flex: 1 }} />
            <Thumbnail
              small
              source={{
                uri:
                  "https://i1.wallpaperscraft.ru/image/betmen_art_minimalizm_107658_300x240.jpg"
              }}
            />
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%"
            }}
          >
            <Input
              style={{
                flex: 1,
                width: "100%",
                fontSize: 24,
                alignContent: "flex-start",
                justifyContent: "flex-start",
                textAlignVertical: "top",
                margin: 5
              }}
              multiline
              placeholder="What's happening?"
              onChangeText={tweet => this.setState({ newTweetContent: tweet })}
            />
          </View>
          <View style={styles.modalFooter}>
            <Button transparent small>
              <Icon name="ios-image" />
            </Button>
            <Button transparent small>
              <Icon name="ios-pin" />
            </Button>
            <Button transparent small>
              <Icon name="ios-stats-outline" />
            </Button>

            <View style={{ flex: 1 }} />
            {this.props.tweetPosted === "ongoing" ? <Spinner /> : null}
            <Button
              rounded
              style={{ color: "#4286f4", height: 40, width: 94 }}
              onPress={this.postTweet.bind(this)}
            >
              <Text style={{ color: "white" }}>Tweet</Text>
            </Button>
          </View>
        </Modal>
        <Content style={{ backgroundColor: "white" }}>
          {this.props.fetchingTweets ? (
            <View
              contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Spinner color="blue" />
            </View>
          ) : (
            <View style={{ justifyContent: "flex-start" }}>
              <FlatList
                data={this.props.tweets}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => (
                  <View style={styles.tweet}>
                    <TouchableHighlight
                      onPress={this._profileClick.bind(this, item.user)}
                      underlayColor="white"
                      activeOpacity={0.75}
                    >
                      <View style={{ flex: 1, flexDirection: "row" }}>
                        <Thumbnail source={{ uri: item.user.avatar }} />
                        <View
                          style={{
                            flexDirection: "column",
                            justifyContent: "flex-start"
                          }}
                        >
                          <Text
                            style={{
                              paddingLeft: 15,
                              fontWeight: "bold",
                              fontSize: 20
                            }}
                          >
                            {item.user.name}
                          </Text>

                          <Text
                            style={{
                              paddingLeft: 15,
                              color: "#aaa",
                              fontSize: 16
                            }}
                          >
                            {"@" + item.user.username}
                          </Text>
                        </View>
                      </View>
                    </TouchableHighlight>
                    <Text style={styles.tweetText}>{item.tweetContent}</Text>
                    <View style={styles.tweetFooter}>
                      <View style={styles.footerIcons}>
                        <Button
                          transparent
                          dark
                          onPress={this._tweetDetails.bind(this, item)}
                        >
                          <Icon name="ios-text-outline" />
                          <Text style={styles.badgeCount}>{item.replies}</Text>
                        </Button>
                      </View>
                      <View style={styles.footerIcons}>
                        <Button transparent dark>
                          <Icon name="ios-repeat" />
                          <Text style={styles.badgeCount}>{item.retweets}</Text>
                        </Button>
                      </View>
                      <View style={styles.footerIcons}>
                        <Button transparent dark>
                          <Icon name="ios-heart-outline" />
                          <Text style={styles.badgeCount}>{item.likes}</Text>
                        </Button>
                      </View>
                      <View style={styles.footerIcons}>
                        <Button transparent dark>
                          <Icon name="ios-mail-outline" />
                        </Button>
                      </View>
                    </View>
                  </View>
                )}
              />
              {this.state.newTweetModalOpen ? null : (
                <Fab
                  position="bottomRight"
                  style={{ backgroundColor: "#4286f4", zIndex: -1 }}
                  onPress={this.openModal.bind(this)}
                  ref={"FAB"}
                >
                  <Icon name="md-create" />
                </Fab>
              )}
            </View>
          )}
        </Content>

        {/* <View tabLabel="Search">
          <Text>Search</Text>
        </View>
        <View tabLabel="Messages">
          <Text>Messages</Text>
        </View> */}
      </Container>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use useful development
        tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
