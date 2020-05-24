import React from "react";
import { StyleSheet, Text, View, Image, TouchableHighlight } from "react-native";

export default class User extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
          firstName: this.props.firstName,
          lastName: this.props.lastName,
          avatar: this.props.avatar,
        };
    }

  render(){
    return( 
      <TouchableHighlight onPress={() => {
        this.props.onPress(this.state)
      }}>
        <View style={classes.loader}> 
          <Text>{this.state.firstName}</Text>
          <Text>{this.state.lastName}</Text>
          <Image
            style={classes.avatar}
            source={this.state.avatar}
            />
        </View>
      </TouchableHighlight>
    )
  }

}
const classes = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
   avatar: {
    width: 100,
    height: 100,
  },
});
