var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var MenuList = React.createClass({
  getInitialState: function(){
    return {
      wholeArea: false,
      hotBusiness: true,
      hotDistrict: false,
      wholeAreaFFF:{},
      hotBusinessFFF:{backgroundColor:'#fff'},
      hotDistrictFFF:{}
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.header]}>
          <View style={[styles.flex_1, styles.center]}>
            <Text style={[styles.header_text, styles.active_blue]}>全部区域</Text>
          </View>
          <View style={[styles.flex_1, styles.center]}>
            <Text style={[styles.header_text]}>地铁沿线</Text>
          </View>
        </View>
        <View style={[styles.row, styles.flex_1]}>
          <ScrollView style={[styles.flex_1, styles.left_pannel]}>
            <Text onPress={this.wholeArea} style={[styles.left_row, this.state.wholeAreaFFF]}>  全部区域</Text>
            <Text onPress={this.hotBusiness} style={[styles.left_row, this.state.hotBusinessFFF]}>  热门商圈</Text>
            <Text onPress={this.hotDistrict} style={[styles.left_row, this.state.hotDistrictFFF]}>  热门行政区</Text>
          </ScrollView>

          {
            this.state.wholeArea ?
            <ScrollView style={[styles.flex_1, styles.right_pannel]}>
              <Text style={styles.left_row}>全部区域</Text>
            </ScrollView>
            : null
          }


          {
            this.state.hotBusiness ?
            <ScrollView style={[styles.flex_1, styles.right_pannel]}>
              <Text onPress={this.} style={styles.left_row}>虹桥地区</Text>
              <Text style={styles.left_row}>徐家汇地区</Text>
              <Text style={styles.left_row}>淮海路商业区</Text>
              <Text style={styles.left_row}>静安寺地区</Text>
              <Text style={styles.left_row}>上海火车站地区</Text>
              <Text style={styles.left_row}>浦东陆家嘴金融贸易区</Text>
              <Text style={styles.left_row}>四川北路商业区</Text>
              <Text style={styles.left_row}>人民广场地区</Text>
              <Text style={styles.left_row}>南翔、安亭汽车城</Text>
            </ScrollView>
            : null
          }

          {
            this.state.hotDistrict ?
            <ScrollView style={[styles.flex_1, styles.right_pannel]}>
              <Text style={styles.left_row}>静安区</Text>
              <Text style={styles.left_row}>徐汇区</Text>
              <Text style={styles.left_row}>长宁区</Text>
              <Text style={styles.left_row}>黄埔区</Text>
              <Text style={styles.left_row}>虹口区</Text>
              <Text style={styles.left_row}>宝山区</Text>
              <Text style={styles.left_row}>闸北区</Text>
            </ScrollView>
            : null
          }
          
        </View>
      </View>
    );
  },

  wholeArea: function(){
    this.setState({
      wholeArea: true,
      hotBusiness: false,
      hotDistrict: false,
      wholeAreaFFF:{backgroundColor:'#fff'},
      hotBusinessFFF:{},
      hotDistrictFFF:{}
    });
  },

  hotBusiness: function(){
    this.setState({
      wholeArea: false,
      hotBusiness: true,
      hotDistrict: false,
      wholeAreaFFF:{},
      hotBusinessFFF:{backgroundColor:'#fff'},
      hotDistrictFFF:{}
    });
  },

  hotDistrict: function(){
    this.setState({
      wholeArea: false,
      hotBusiness: false,
      hotDistrict: true,
      wholeAreaFFF:{},
      hotBusinessFFF:{},
      hotDistrictFFF:{backgroundColor:'#fff'}
    });
  }
});

var styles = StyleSheet.create({
  container:{
    height:240,
    flex:1,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderColor:'#ddd'
  },
  row:{
    flexDirection: 'row'
  },
  flex_1:{
    flex:1
  },
  header:{
    height:35,
    borderBottomWidth:1,
    borderColor:'#DFDFDF',
    backgroundColor:'#F5F5F5'
  },
  header_text:{
    color:'#7B7B7B',
    fontSize:15
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  },
  left_pannel:{
    backgroundColor:'#F2F2F2',
  },
  left_row:{
    height:30,
    lineHeight:20,
    fontSize:14,
    color:'#7C7C7C',
  },
  right_pannel:{
    marginLeft:10
  },
  active_blue:{
    color: '#00B7EB'
  },
  active_fff:{
    backgroundColor:'#fff'
  }
});

var App = React.createClass({
  render: function(){
    return (
      <View style={{marginTop:25}}>
        <MenuList/>
      </View>
    );
  }
});


AppRegistry.registerComponent('catapp', () => App);




