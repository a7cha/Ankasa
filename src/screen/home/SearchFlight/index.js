import React,{useEffect, Fragment, useState, useRef} from 'react';
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  Pressable,
  Modal,
  TouchableOpacity,
  Keyboard,
  ToastAndroid,
  BackHandler,
  TouchcableOpacity,
  StatusBar,
  Picker,
  TouchableNativeFeedback,
  TouchableHighlight
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  IconButton,
  Paragraph,
  Portal,
  Title,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Feather';
import {useDispatch} from 'react-redux';
import {RectButton} from 'react-native-gesture-handler';
import styles from './searchflight.style.js'
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import DatePicker from 'react-native-date-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import moment from "moment";





const style = StyleSheet.create({
  jumbotron: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    backgroundColor: 'rgba(0, 0, 0, 0.81)',
    width: '100%',
    height: 280,
    marginBottom: 50,
  },
});

const SearchFlight = (props) => {
const todayMoment = moment()
const tomorrow = new Date()

  const dispatch = useDispatch();
  const [roundTrip, setRoundTrip] = useState(false)
  const [child, setChild] = useState(0)
  const [adult, setAdult] = useState(1)
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')
  const [classSuite, setClassSuite] = useState(['Economy', 'Business', 'FirstClass'])
  const [date, setDate] = useState(new Date())
  const [departDate ,setDepartDate] = useState(todayMoment)
  const [returnDate, setReturnDate] = useState(todayMoment.clone().add(1,'days'))
  const [asalVisible, setAsalVisible] = useState(false)
  const [tujuanVisible, setTujuanVisible] = useState(false)
  const [tujuan, setTujuan] = useState('')
  const [asal, setAsal] = useState('')


  const refRBSheetDepart = useRef();
  const refRBSheetReturn = useRef();

let controller;


      function formatDateView(param){
        const dateString = param
        const dateObj = new Date(dateString);
        const momentObj = moment(dateObj);
        const momentString = momentObj.format('dddd, D MMMM YYYY')        

        return momentString
      }    
      const departDateView = formatDateView(departDate);
      const returnDateView = formatDateView(returnDate);

  useEffect(() => {
      StatusBar.setBarStyle("light-content");
      if (Platform.OS === "android") {
        StatusBar.setBackgroundColor("rgba(0,0,0,0)");
        StatusBar.setTranslucent(true);
      }



    return () => {      
        console.log(tujuanVisible)
    };              

  }, )

const onPress = () => {

}

var radio_props = [
  {label: 'Economy', value: 'economy' },
  {label: 'Business', value: 'business' },
  {label: 'First Class', value: 'firstClass' }
];

  return (
<Fragment>
    
    <ScrollView style={{backgroundColor: '#fff'}}>      

      <View style={{backgroundColor: '#fff'}}>
        <View style={style.jumbotron}>
          <Image
            source={require('../../../assets/illustration/destinasi.png')}
            style={{
              width: '100%',
              height: 280,
              resizeMode: 'cover',
              position: 'absolute',
              opacity: 0.5,
              borderBottomLeftRadius: 30,
              borderBottomRightRadius: 30,
            }}
          />
          <View style={{padding: 15, marginTop : 10}}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Image
                  style={{left: 15, top: 20}}
                  source={require('../../../assets/illustration/btnback.png')}
                />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Image
                  style={{position: 'absolute', right: '0%', top: 20}}
                  source={require('../../../assets/illustration/fullScreen.png')}
                />
              </View>
            </View>
            <View style={{marginVertical: 15}}>
              <Text
                style={{
                  top: 90,
                  fontFamily: 'Poppins-SemiBold',
                  left: '2%',
                  fontSize: 24,
                  fontFamily: 'Poppins-Bold',
                  color: '#fff',
                }}>
                Destinations
              </Text>
            </View>
          </View>
        </View>
        <View style={{position: 'absolute', width: '96%', height: 100, padding: 15, top: 210, left: '2%', }}> 
          <View style={{backgroundColor: '#fff', elevation: 5, borderRadius: 12, width: '100%', height: 100, }}> 

            <TouchableOpacity onPress={() => setTujuanVisible(true)}>
              <View>
              <Text style={{position: 'absolute', left: 20, top: 20, fontSize: 12, fontFamily: 'Lato-Regular', color: '#979797', }}>
                From
              </Text>
              <Text style={{position: 'absolute', left: 20, top: 40, fontSize: 20, fontFamily: 'Poppins-SemiBold', color: '#000000', }}>
                Medan 
             </Text>
              <Text style={{position: 'absolute', left: 20, top: 70, fontSize: 12, fontFamily: 'Lato-Regular', color: '#979797', }}>
                Indonesia
              </Text>
            </View> 
            </TouchableOpacity>

            <Image
              source={require('../../../assets/illustration/switch2.png')}
              style={{position: 'absolute', left: '50%', top: '50%'}}
            />

            <Text style={{position: 'absolute', top: 20, right: '0%', fontSize: 12, right: 20, fontFamily: 'Lato-Regular', color: '#979797', }}>
              To
            </Text>

            <Text style={{position: 'absolute', top: 40, fontSize: 20, right: '0%', right: 20, fontFamily: 'Poppins-SemiBold', color: '#000000', }}> 
              Tokyo
            </Text>

            <Text style={{position: 'absolute', top: 70, fontSize: 12, right: '0%', right: 20, fontFamily: 'Lato-Regular', color: '#979797', }}> 
              Japan
            </Text>

          </View>
        </View>

      <View  style={{flexDirection: 'row', marginTop :20, justifyContent : 'space-between', marginHorizontal : 25}}>
            <Button style={roundTrip ?  styles.buttonActive : styles.buttonNonActive} onPress={() => setRoundTrip(true)}>                            
                <Text style={roundTrip ?  styles.textButtonActive : styles.textButtonNonActive} >
                  One Way                
                </Text>              
            </Button>

            <Button style={!roundTrip ?  styles.buttonActive : styles.buttonNonActive} onPress={() => setRoundTrip(false)}>                            
                <Text style={!roundTrip ?  styles.textButtonActive : styles.textButtonNonActive} >
                  Round trip                
                </Text>              
            </Button>            
        </View>

        { roundTrip ? 
          (
            <>
            <View style={{marginHorizontal : 25, marginTop :20}}>
              <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
                Departure
              </Text>
            </View>

            <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
              <TouchableOpacity onPress={() => refRBSheetDepart.current.open()} >
                <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000000', padding: 10, borderRadius: 6, borderColor: '#DDDDDD', borderWidth: 1, marginLeft: 20, marginRight: 20, }}> 
                  {departDateView}
                </Text>
                <Image
                  style={{position: 'absolute', right: '0%', top: 15, right: 30}}
                  source={require('../../../assets/illustration/iconright.png')}
                />
              </TouchableOpacity>
            </View>            
            </>
          ) 
          : 
          (
            <>
            <View style={{marginHorizontal : 25, marginTop :20}}>
              <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
                Departure
              </Text>
            </View>

            <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
              <TouchableOpacity onPress={() => refRBSheetDepart.current.open()}>
                <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000000', padding: 10, borderRadius: 6, borderColor: '#DDDDDD', borderWidth: 1, marginLeft: 20, marginRight: 20, }}> 
                  {departDateView}
                </Text>
                <Image
                  style={{position: 'absolute', right: '0%', top: 15, right: 30}}
                  source={require('../../../assets/illustration/iconright.png')}
                />
              </TouchableOpacity>
            </View>            

            <View style={{marginHorizontal : 25, marginTop :20}}>
              <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
                Return Date
              </Text>
            </View>

            <View style={{flex: 1, padding: 15, backgroundColor: '#fff'}}>
              <TouchableOpacity onPress={() => refRBSheetReturn.current.open()}>
                <Text style={{fontFamily: 'Poppins-SemiBold', color: '#000000', padding: 10, borderRadius: 6, borderColor: '#DDDDDD', borderWidth: 1, marginLeft: 20, marginRight: 20, }}> 
                  {returnDateView}
                </Text>
                <Image
                  style={{position: 'absolute', right: '0%', top: 15, right: 30}}
                  source={require('../../../assets/illustration/iconright.png')}
                />
              </TouchableOpacity>
            </View>   
            </  >                     
          )

        }


        <View style={{flex: 1, marginHorizontal : 25}}>
          <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
            How many person?
          </Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent : 'space-between', marginHorizontal : 35, position : 'relative', marginTop : 15}}>
      

          <DropDownPicker
              items={[
                  {label: '', value:  0 , icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14,color: '#000000'}}>0 Child</Text>},
                  {label: '', value: 1, icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14, color: '#000000'}}>1 Child</Text>},
                  {label: '', value: 2, icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14, color: '#000000'}}>2 Child</Text>},
              ]}
              defaultValue={child}
              containerStyle={{height: 50, width : 160}}
              dropDownStyle={{backgroundColor: '#ffffff'}}
              itemStyle={{
                  justifyContent: 'flex-start'
              }}
              arrowColor = '#2395FF'
              onChangeItem={item => setChild(item.value)}
          />


          <DropDownPicker
                  items={[
                      {label: '', value: 1, icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14, color: '#000000'}}>1 Adult</Text>},
                      {label: '', value: 2, icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14, color: '#000000'}}>2 Adult</Text>},
                      {label: '', value: 3, icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14, color: '#000000'}}>3 Adult</Text>},
                      {label: '', value: 4, icon: () => <Text style={{fontFamily : 'Lato-Bold', fontSize : 14, color: '#000000'}}>4 Adult</Text>},
                  ]}
                  defaultValue={adult}
                  containerStyle={{height: 50, width : 160}}
                  dropDownStyle={{backgroundColor: '#ffffff'}}
                  itemStyle={{
                      justifyContent: 'flex-start'
                  }}
                  arrowColor = '#2395FF'
                  
                  onChangeItem={item => setAdult(item.value)}
              />      





        </View>

        <View style={{marginTop : 20, marginHorizontal : 25}}>
          <Text style={{fontFamily: 'Poppins-Light', color: '#6B6B6B'}}>
            Which class do you want?
          </Text>
        </View>

        <View styles={{marginTop: 50, marginHorizontal : 25}}>

        <RadioForm
          radio_props={radio_props}
          initial={0}
          style={{flexDirection : 'row', justifyContent : 'space-between',  marginHorizontal : 35, marginVertical : 20}}
          formHorizontal={true}
          labelHorizontal={true}
          buttonColor={'#2395FF'}
          animation={true}
          buttonStyle={{color : 'black'}}
          buttonSize={12}
          labelStyle={{fontFamily: 'Lato-Bold', fontSize : 14, color : '#000000', marginRight : 15}}
          buttonOuterSize={25}          
          onPress={(value) => setClassSuite(value)}
        />

        </View>

      <RBSheet
        ref={refRBSheetDepart}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
      <View style={{alignItems : 'center'}}>
        <DatePicker
          mode  ={'date'}
          date={departDate}
          onDateChange={setDepartDate}
        />  
      </View>      
      </RBSheet>

      <RBSheet
        ref={refRBSheetReturn}
        closeOnDragDown={true}
        closeOnPressMask={false}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: "#000"
          }
        }}
      >
      <View style={{alignItems : 'center'}}>
        <DatePicker
          mode  ={'date'}
          date={returnDate}
          onDateChange={setReturnDate}
        />  
      </View>      
      </RBSheet>

      <Modal animationType='slide' visible={tujuanVisible}>
        <View>
          <Text>ini visible</Text>
        </View>
      </Modal>



        <View style={{flex: 1, padding: 15}}>
          <TouchableOpacity>
            <Text
              style={{

                fontFamily: 'Poppins-SemiBold',
                color: '#fff',
                backgroundColor: '#2395FF',
                padding: 10,
                borderRadius: 10,
                borderColor: '#DDDDDD',
                borderWidth: 1,
                marginLeft: 20,
                marginRight: 20,
                textAlign: 'center',
              }}>
              SEARCH FLIGHT
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  </Fragment>    
  );
};

export default SearchFlight;
