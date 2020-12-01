import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Button} from 'react-native-paper';
import {MobileNavigation} from '../../../components/';
import styles from './mybooking.style.js';
import {TicketBackgroundSmall} from '../../../assets';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icons from 'react-native-vector-icons/Feather';
import {useSelector, useDispatch} from 'react-redux';
import {GetMyBooking} from '../../../redux/actions/MyBooking';
import moment from 'moment';

function MyBooking({navigation}) {
  const {data} = useSelector((s) => s.MyBooking);
  const {token} = useSelector((s) => s.Auth);
  const [loading, setLoading] = useState(true);
  // const {username, city} = data;
  const dispatch = useDispatch();

  React.useEffect(() => {
    const callbackHandler = (err) => {
      setLoading(false);
      if (err) return false;
      // console.log(data);
      // console.log('data');
    };
    dispatch(GetMyBooking(token, callbackHandler));
  }, []);

  const AppBar = () => (
    <View style={[styles.appBar]}>
      <Text style={[styles.appBarTitle]}>My Booking</Text>

      <View style={[styles.appBarRight]}>
        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            name="mail"
            size={28}
            style={{marginHorizontal: 10}}
            color="#595959"
          />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.6}>
          <Icons
            name="bell"
            size={28}
            style={{marginHorizontal: 10}}
            color="#595959"
          />
        </TouchableOpacity>
      </View>
    </View>
  );

  function formatDateView(param) {
    const dateString = param;
    const dateObj = new Date(dateString);
    const momentObj = moment(dateObj);
    const momentString = momentObj.format('dddd, D MMMM YYYY');

    return momentString;
  }

  const renderItem = ({item}) => {
    const bertujuan = item.destination.substring(0,3)    
    const berasal = item.from.substring(0,3)    
    return (
      <>
        <View style={styles.makeColumn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('DetailBooking', {id: item.id})}
            style={styles.boxTicket}>
            <View style={styles.ineerCardPos}>
              <View>
                <Text style={styles.dateTicket}>
                  {formatDateView(item.departure_at)}
                </Text>
              </View>

              <View
                style={{flexDirection: 'row', marginTop: 10, marginBottom: 6}}>
                <View>
                  <Text style={styles.destinationText}>{berasal}</Text>
                </View>
                <View style={{marginHorizontal: 20}}>
                  <Icon name="plane-departure" size={25} color="#979797" />
                </View>

                <View>
                  <Text style={styles.destinationText}>{bertujuan}</Text>
                </View>
              </View>

              <View>
                <Text style={styles.planeText}>
                  Garuda Indonesia, {item.terminal}-{item.gate}
                </Text>
              </View>
            </View>

            <View style={styles.horizontalLine}></View>

            <View style={styles.statusPostion}>
              <View style={{marginVertical: 20}}>
                <Text style={styles.textStatus}>Status</Text>
              </View>

              <View style={{marginVertical: 20}}>
                <View style={styles.boxStatus}>
                  <Text style={styles.statusDesc}>Waiting for payment</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  };
  return (
    <View style={{backgroundColor: '#FFFFFF'}}>
      <AppBar />

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default MyBooking;
