import { StyleSheet, Text, View } from 'react-native'
import React from 'react';

//form validation
import * as yup from 'yup';


const PasswordSchema = yup.object().shape({
    password: yup.number()
        .min(2, 'Too Short')
        .max(50, 'Too Long')
        .required('Required'),
})

export default function App() {
    const [password, setPassword] = React.useState('');
    const [isPasswordGenerated, setIsPasswordGenerated] = React.useState(false);
    const [lowerCase, setLowerCase] = React.useState(true);
    const [upperCase, setUpperCase] = React.useState(false);
    const [number, setNumber] = React.useState(false);
    const [symbol, setSymbol] = React.useState(false);

    const generatePasswordString = (passwordLength: number) => {
        //
        let characters = ''
        const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
        const digitsChars = '0123456789';
        const symbolsChars = '!@#$%^&*()_+';

        if (upperCase) characters += upperCaseChars
        if (lowerCase) characters += lowerCaseChars
        if (number) characters += digitsChars
        if (symbol) characters += symbolsChars
        const ResultPassword = createPassword(characters, passwordLength);
        setPassword(ResultPassword);
        setIsPasswordGenerated(true);
    }
    const createPassword = (characters: string, passwordLength: number) => {

        let result = ''
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characters.length)
            result += characters.charAt(characterIndex)
        }
        return result
    }

    const resetPassword = () => {
        setPassword('')
        setLowerCase(true)
        setUpperCase(false)
        setNumber(false)
        setSymbol(false)
    }

    return (
        <View>
            <Text>App</Text>
        </View>
    )
}

const styles = StyleSheet.create({})