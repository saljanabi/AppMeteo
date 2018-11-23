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
        justifyContent: 'center',
        margin: 0,
        padding: 0
    },
    Icon: {
        color: '#fff',
        fontSize: 35,
    },
    Title: {
        flex: .3,
        fontSize: 35,
        color: '#fff'
    },
    paragraph: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 1,
        marginTop: 0
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