'use strict';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    weatherContainer: {
        flex: 1,
        backgroundColor: '#FFB600'
    },
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    tempText: {
        fontSize: 48,
        color: '#fff'
    },
    paragraph: {
        fontSize: 20,
        color: '#fff',
        margin: 24,
        fontSize: 18,
        textAlign: 'justify'
    },
    bodyContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 25,
        marginBottom: 40
    },
    title: {
        fontSize: 48,
        color: '#fff'
    },
    subtitle: {
        fontSize: 24,
        color: '#000'
    },
    footer: {
        flex: 1,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0
    },
    tabsIcons: {
        color: '#fff'
    }
});