var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
} = React;

var data = {
  "全部区域": {
    "全部区域": ["全部区域"],
    "热门商圈": [
      "虹桥地区",
      "徐家汇地区",
      "淮海路商业区",
      "静安寺地区",
      "上海火车站地区",
      "浦东陆家嘴金融贸易区",
      "四川北路商业区",
      "人民广场地区",
      "南翔、安亭汽车城"
    ],
    "热门行政区": [
      "静安区",
      "徐汇区",
      "长宁区",
      "黄埔区",
      "虹口区",
      "宝山区",
      "闸北区"
    ]
  },
  "地铁沿线":{

  } 
};

//设定内置的属性
//选中项，例如：_type_0_2 表示第一个Tab选中，并且第二个Tab中的第三项选中
var prefixType = '_type_';

//选中项样式，例如：_style_0_2 表示第一个Tab选中，并且第二个Tab中的第三项选中时的样式
var prefixStyle = '_style_';

//默认左侧选中的背景颜色
var defaultBackgroundColor = {backgroundColor:'#fff'};

var MenuList = React.createClass({
  getInitialState: function(){
    var data = this.props.data;
    //左侧选择的index
    var nSelected = this.props.nSelected;
    //头部选择的index
    var tabSelected = this.props.tabSelected;
    var obj = {};
    var kIndex = 0;
    for(var k in data){
      var childData = data[k];
      var cIndex = 0;
      for(var c in childData){
        var type = prefixType + k + '_' + c;
        var style = prefixStyle + k + '_' + c;
        obj[type] = false;
        obj[style] = {};
        //设定默认选中项
        if(nSelected === cIndex && tabSelected === kIndex){
          obj[type] = true;
          obj[style] = defaultBackgroundColor;
        }
        cIndex++;
      }
      kIndex++;
    }
    obj.tabSelected = tabSelected;
    console.log(obj);
    return obj;
  },
  render: function(){
    var header = this.renderlHeader();
    var left = this.renderLeft();
    var right = this.renderRight();
    return (
      <View style={styles.container}>
        <View style={[styles.row, styles.header]}>
          {header}
        </View>
        <View style={[styles.row, styles.flex_1]}>
          <ScrollView style={[styles.flex_1, styles.left_pannel]}>
            {left}
          </ScrollView>
          <ScrollView style={[styles.flex_1, styles.right_pannel]}>
            {right}
          </ScrollView>
          
        </View>
      </View>
    );
  },

  //渲染头部TabBar
  renderlHeader: function(){
    var data = this.props.data;
    var tabSelected = this.props.tabSelected;
    var header = [];
    var tabIndex = 0;
    for(var i in data){
      var tabStyle = null;
      if(tabIndex === tabSelected){
        tabStyle=[styles.header_text, styles.active_blue];
      }else{
        tabStyle = [styles.header_text];
      }
      header.push(
        <View style={[styles.flex_1, styles.center]}>
          <Text style={tabStyle}>{i}</Text>
        </View>
      );
      tabIndex ++;
    }
    return header;
  },

  //渲染左侧
  renderLeft: function(){
    var data = this.props.data;
    var tabSelected = this.props.tabSelected;
    var leftPannel = [];
    var index = 0;
    for(var i in data){
      if(index === tabSelected){
        for(var k in data[i]){
          var style = this.state[prefixStyle + i + '_' + k];
          leftPannel.push(<Text onPress={this.showRight.bind(this, i, k)} style={[styles.left_row, style]}>  {k}</Text>);
        }
        break;
      }
      index ++;
    }
    return leftPannel;
  },
  //渲染右边，二级菜单
  renderRight: function(){
    var data = this.props.data;
    var tabSelected = this.props.tabSelected;
    var nSelected = this.props.nSelected;
    var index = 0;
    var rightPannel = [];
    for(var i in data){
      if(tabSelected === index ){
        for(var k in data[i]){
          if(this.state[prefixType + i + '_' + k]){
            for(var j in data[i][k]){
              rightPannel.push(<Text style={styles.left_row}>{data[i][k][j]}</Text>);
            }
            break;
          }
        }
      }
      index ++;
    }
    return rightPannel;
  },
  //点击左侧，展示右侧二级菜单
  showRight: function(tabIndex, nIndex){
    var obj = {};
    for(var k in this.state){
      //将prefixType或者prefixStyle类型全部置false
      if(k.indexOf(prefixType) > -1){
        var obj = {};
        obj[k] = false;
        this.setState(obj);
      }
      if(k.indexOf(prefixStyle) > -1){
        var obj = {};
        obj[k] = {};
        this.setState(obj);
      }
    }
    obj[prefixType + tabIndex + '_' + nIndex] = true;
    obj[prefixStyle + tabIndex + '_' + nIndex] = defaultBackgroundColor;
    this.setState(obj);
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
        <MenuList data={data} nSelected={1} tabSelected={0}/>
      </View>
    );
  }
});


AppRegistry.registerComponent('catapp', () => App);




