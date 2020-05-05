import React from 'react';
import { View, Text } from 'react-native';

export default class ProfileScreen extends React.Component {
    state = {
        username: ''
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.midFont}> Hello {this.props.route.params.username} this is your profile profile page </Text>
            </View>
        )
    }

}
const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    midFont: {
        fontSize: 20
    }
}