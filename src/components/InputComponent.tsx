import React, { useRef } from 'react';
import { KeyboardTypeOptions, TextInput } from 'react-native';
import { styles } from '../theme/appTheme';

//interface Propiedades del componente reutilizable
interface Props {
    placeholder: string;
    keyboardType: KeyboardTypeOptions;
    handleChangeValue: (name: string, value: string) => void;
    name: string;
    isPassword?: boolean;  //Propiedad opcional
    //clear?: boolean; //Propiedad opcional
}

export const InputComponent = ({ placeholder, keyboardType, handleChangeValue, name, isPassword = false }: Props) => {
    //const inputRef = useRef<TextInput>(null);

    // if (clear) {
    //     inputRef.current?.clear();
    // }
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            onChangeText={(value) => handleChangeValue(name, value)}
            secureTextEntry={isPassword}
            style={styles.input}
        />
    )
}
