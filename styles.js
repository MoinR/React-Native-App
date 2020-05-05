import { StyleSheet } from 'react-native';
import { Colors, } from 'react-native/Libraries/NewAppScreen';
/* General styles for componenets  */

export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#007bff',
    },
    headerTitle: {
        color: 'white',
        textAlign: 'center',
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    medText: {
        fontSize: 35,
        marginBottom: 10,
        textAlign: 'center',
    },
    myText: {
        marginTop: 10,
        textAlign: 'center',
        fontSize: 30
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
    inputBtn: {
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        minWidth: '90%',
    },
    loginButtonContainer: {
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        minWidth: '90%'
    },
    loginBtn: {
        borderRadius: 10,
    }
});