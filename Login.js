import React from 'react';
import { TextInput, View, Text, Image, Button } from 'react-native';
// import  { Button } from 'react-native-elements'; 

export default class LoginScreen extends React.Component {
    state = {
        username: '',
        password: '',
        loginMsg: ''
    }
    
    /* Handling inputs   */
    getUsername = username => {
        this.setState({ username });
    }

    getPassword = password => {
        this.setState({ password });
    }
    /* Authentication request */ 
    authUser = async (username, password) => {
        try {
            const resp = await fetch('http://10.0.2.2:9799/login', {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const respData = await resp.json();
            console.log(respData);
            if (respData.status !== 'Success') {
                this.setState({ loginMsg: 'invalid data provided ' });
                return false;
            }
            else {
                return true;
            }
        }
        catch (e) {
            this.setState({ loginMsg: 'Error occured please try again later' })
            return false;
        }
    }
    login = async () => {
        const isValidUser = await this.authUser(this.state.username, this.state.password);
        if (isValidUser) {
            alert('Login success.. ');
            this.props.navigation.navigate('profile', {username : this.state.username});
        }
        // this.props.navigation.navigate('profile', { username: 'Moin' });
    }
    render() {
        return (
            <View style={styles.container}>

                <Text> {this.state.loginMsg} </Text>
                <Image style={styles.tinyLogo} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />
                <Text style={styles.myText}> Login  </Text>
                <TextInput placeholder="Username" value={this.state.username} style={styles.inputBtn} onChangeText={this.getUsername} />
                <TextInput placeholder="Password" value={this.state.password} style={styles.inputBtn} secureTextEntry onChangeText={this.getPassword} />
                <View style={styles.loginButtonContainer}>
                    <Button title="Login" type="outline" style={styles.loginBtn} onPress={this.login} />
                </View>
            </View>
        )
    }

}
const styles = {
    myText: {
        fontSize: 35,
        marginBottom: 10,
        textAlign: 'center',
    },
    tinyLogo: {
        marginBottom: 10,
        width: 120,
        height: 120,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
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



}