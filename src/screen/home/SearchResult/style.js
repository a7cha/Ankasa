import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    jumbotron: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        backgroundColor: '#2395FF',
        width: '100%',
        height: '75%',
        marginBottom: 50,
    },
    container: {
        padding: 60,
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#E6E6E6',
    },
    image: {
        // resizeMode: 'cover',
        // opacity: 1,
        left: '-0.47%',
        right: '17.33%',
        top: '0%',
        bottom: '71.55%',
    },
    padding: {
        marginRight: '5%',
        right: 0,
        marginTop: 30,
        position: 'absolute',
        width: '55%',
        height : '16%',
        borderRadius: 6,
        padding: '2%',

        backgroundColor: '#fff',
        opacity: 0.4,
    },
    jpn: {
        fontFamily: 'Poppins-SemiBold',
        marginTop: 20,
        left: '40%',
        color: '#000000',
        fontSize: 28,
        position: 'absolute',
    },
    filterImage: {
        right: '0%',
        // right: 30,
        right: '8%',
        position: 'absolute',
        marginTop: 20,
    },
    getData: {
        position: 'absolute',
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
        marginRight: '5%',
        lineHeight : 40,
        right: 0,
        marginTop: 30,
    },
    airplane: {
        position: 'absolute',
        left: '10%',
        fontFamily: 'Poppins-SemiBold',
        fontSize: 16,
        marginTop: 85,
    },
    time2: {
        position: 'absolute',
        left: '10%',
        fontSize: 12,
        marginTop: 60,
    },
    fromText: {
        position: 'absolute',
        marginTop: 130,
        marginLeft: '8%',
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Lato-Regular',
    },
    medanText: {
        position: 'absolute',
        marginTop: 150,
        marginLeft: '8%',
        fontSize: 16,
        color: '#fff',
        fontFamily: 'Poppins-SemiBold',
    },
    idn: {
        fontFamily: 'Poppins-SemiBold',
        marginTop: 20,
        left: '10%',
        color: '#000000',
        fontSize: 28,
        position: 'absolute',
    },
    time: {
        position: 'absolute',
        left: '40%',
        fontSize: 12,
        marginTop: 60,
    },
    indonesiaText: {
        position: 'absolute',
        marginTop: 180,
        marginLeft: '8%',
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Lato-Regular',
    },
    toText: {
        position: 'absolute',
        marginTop: 130,
        marginLeft: '10%',
        fontSize: 12,
        right: '0%',
        color: '#fff',
        fontFamily: 'Lato-Regular',
    },
    tokyoText: {
        position: 'absolute',
        marginTop: 150,
        marginLeft: '10%',
        fontSize: 16,
        color: '#fff',
        right: '0%',
        fontFamily: 'Poppins-SemiBold',
    },
    japanText: {
        position: 'absolute',
        marginTop: 180,
        marginLeft: '10%',
        right: '0%',
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Lato-Regular',
    },
    passenger: {
        fontFamily: 'Lato-Regular',
        left: '8%',
        fontSize: 12,
        top: 20,
    },
    child: {
        fontFamily: 'Lato-Regular',
        left: '8%',
        fontSize: 16,
        top: 30,
    },
    class: {
        fontFamily: 'Lato-Regular',
        left: '8%',
        fontSize: 12,
        top: 20,
    },
    flight: {
        fontFamily: 'Poppins-Light',
        left: 30,
        color: '#979797',
        marginTop: 20,
        width: '50%',
    },
    economy: {
        fontFamily: 'Lato-Regular',
        left: '8%',
        fontSize: 16,
        top: 30,
    },
    filterText: {
        fontFamily: 'Poppins-Semibold',
        color: '#000000',
        right: '0%',
        marginLeft: '20%',
        position: 'absolute',
        marginTop: 20,
    },
    price: {
        position: 'absolute',
        marginRight: '6%',
        right: '0%',
        fontSize: 12,
        marginTop: 90,
        color: '#2395FF',
        fontFamily: 'Poppins-SemiBold',
    },
    gate: {
        position: 'absolute',
        marginRight: '6%',
        right: '0%',
        fontSize: 12,
        marginTop: 60,
    },
    terminal: {
        fontFamily: 'Poppins-Semibold',
        color: '#9F9F9F',
        right: '0%',
        marginLeft: '15%',
        position: 'absolute',
        marginTop: 20,
    },

    //modal
    modalContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height/2 + 50,
        padding: 10,
        position: 'absolute',
        bottom: -20,
        backgroundColor: '#E6E6E6',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
    },
    scrollTit: {
        width: 80,
        height: 6,
        marginTop: 15,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#2395FF',
    },
    modalFade: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor: '#fff',
        opacity: 0.5,
    },
    textModal: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    buttonInput: {
        backgroundColor: '#2395FF',
        borderRadius: 10,
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        height: 50,
        marginVertical: 15,
        justifyContent: 'center',
        // alignSelf: 'center',
    },
    textModals: {
        padding: 5,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },
    textModalTitle: {
        fontSize: 20,
        marginLeft: 5,
        marginVertical: 10,
        fontWeight: 'bold',
    },
    viewList: {
        marginTop: 10,
    },
    buttonModal: {
        // padding: 5,
        backgroundColor: '#2395FF',
        borderRadius: 10,
        width: Dimensions.get('window').width / 2 - 15,
        alignItems: 'center',
        height: 50,
        justifyContent: 'center',
        marginVertical: 5,
    },
    inputModal: {
        flexDirection: 'row',
        backgroundColor: '#2395FF',
        borderRadius: 10,
        width: Dimensions.get('window').width - 20,
        alignContent: 'space-around',
        height: 50,
        justifyContent: 'space-around',
        marginVertical: 5,
    },
    inputText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 16,
    },
    modalsCard: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'space-around',
        flexWrap: 'wrap',
    },
});

export default styles;