import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';

export const LoginScreen = () => {
    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <TitleComponent title='Iniciar Sesión' />
            <BodyComponent>
                <Text style={styles.titlePrincipal}>
                    Bienvenido de nuevo!
                </Text>
                <Text style={styles.titleSecondary}>
                    Realiza tus compras de manera rápida y segura
                </Text>
                <InputComponent/>
                <InputComponent/>
            </BodyComponent>
        </View>
    )
}
