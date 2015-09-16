var React = require('react-native');
var MenuList = require('./../tab');

var data = {
  "Language": {
    "All": ["All"],
    "Web Front End": [
      "HTML",
      "CSS",
      "JavaScript"
    ],
    "Server": [
      "Node.js",
      "PHP",
      "Python",
      "Ruby"
    ]
  },
  "Tool":{
    "All": ["All"],
    "Apple": ["Xcode"],
    "Other": ["Sublime Text", "WebStrom",]
  }
};


var App = React.createClass({
  render: function(){
    return (
      <View style={{marginTop:25}}>
        <MenuList data={data} nSelected={1} tabSelected={0} click={this.onPress}/>
      </View>
    );
  },
  onPress: function(val){
    alert(val);
  }
});


AppRegistry.registerComponent('app', () => App);