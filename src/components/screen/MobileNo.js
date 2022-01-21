import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    TextInput,
} from 'react-native';

import CheckBox from '@react-native-community/checkbox';
import React, { useState, useRef } from 'react';


const MobileNo = ({ navigation }) => {
    const [number, onChangeNumber] = React.useState(null);
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <SafeAreaView style={styles.container}>

            <View >
                <Text style={styles.score}>give us your{'\n'}     mobile number</Text>
                <Text style={styles.score1}>to apply, we need your mobile {'\n'}     number linked to your credit cards</Text>

                <TextInput
                    style={styles.input}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="+919999999999"
                    keyboardType="numeric"
                />
            </View>

            <View style={{ borderTopWidth: 0.5, borderColor: '#585858', margin: 5,top:10 }}>
                <Text style={styles.creditBureau}>you agree to allow CRED to chek your credit{'\n'}information with RBI approved credit bureaus.</Text>
                <Text style={styles.creditBureau1}>we need to check if you are a credit card holder{'\n'}and are above our accepted credit score.{'\n'}threshold. it not impact your credit score</Text>
            </View>

            <View style={styles.checkboxContainer}>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                    style={styles.checkbox}
                />
            </View>


            <View style={styles.scoreHeader}>
                <TouchableOpacity
                    style={styles.members}
                    onPress={() => navigation.replace('PayScreen')}
                >
                    <Text style={styles.members}>Agree and continue</Text>

                </TouchableOpacity>
            </View>

            {/*<View style={styles.scoreHeader}>
        <Text style={styles.members}>7 million members pay their bill on{'\n'}CRED</Text>
        <Image
          source={require('../../assets/images/medal.png')}
          style={styles.medal}
        />
      </View>
      <View style={{ borderTopWidth: 1, borderColor: '#585858', margin: 7 }}>
        <Text style={styles.creditBureau}>contacting RBI approved credit bureau</Text>
      </View>*/}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2F3230',
        flex: 1,
        justifyContent: 'center'
        //width: '100%',
        //height: '100%',
    },
    animation: {
        width: 100,
        height: 100,
    },
    score: {
        color: '#ffffff',
        fontSize: 23,
        fontWeight: '700',
        textAlign: 'center',
        bottom: 90,
        marginRight: 220
    },
    score1: {
        color: '#dcdcdc',//'#585858',
        fontSize: 13,
        fontWeight: '400',
        textAlign: 'center',
        bottom: 120,
        marginRight: 170,
        marginTop: 40
    },
    credit: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        marginTop: 140,
    },
    members: {
        margin: 4,
        color: '#FFFFFF',
        fontWeight: '500',
        alignItems: 'center',
        fontSize: 15

    },
    scoreHeader: {
        // backgroundColor: '#808080',
        borderRadius: 35,
        margin: 50,
        top: 100,
        paddingTop: 4,
        paddingBottom: 5,
        paddingLeft: 50,
        paddingRight: 50,
        backgroundColor: '#808080',
        shadowColor: 'pink',
        shadowOpacity: 0.2,
        elevation: 12,
        shadowRadius: 10,
        shadowOffset: { width: 5, height: 15 },

    },

    creditBureau: {
        color: '#585858',
        top:100,
        marginLeft: 20,
        fontSize: 12
    },
    creditBureau1: {
        color: '#585858',
        top:100,
        marginLeft: 20,
        fontSize: 12
    },
    input: {
        bottom: 100,
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 20,
    },
    checkboxContainer: {
        flexDirection: "row",
        bottom: 20,
        marginLeft: 20
    },
    checkbox: {
        alignSelf: "center",
        height: 20,
        width: 20
    },
})


export default MobileNo;
