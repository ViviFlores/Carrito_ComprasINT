import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

//Interface para el objeto del formulario
interface FormLogin {
    email: string;
    password: string;
}

//Interface props del StackNavigator
interface Props {
    users: User[];
}

export const LoginScreen = ({ users }: Props) => {
    //hook useState para manejar el estado del formulario
    const [formLogin, setFormLogin] = useState<FormLogin>({
        email: '',
        password: ''
    });

    //hook useState para manejar el estado de la visibilidad de la contraseña
    const [hiddenPassword, setHiddenPassword] = useState<boolean>(true);

    //hook useNavigation para navegar entre pantallas
    const navigation = useNavigation();

    //Función para el cambio de valores del objeto del formulario
    const handleChangeValue = (name: string, value: string): void => {
        //console.log(name, " ", value);
        //actualizar el estado del formulario
        setFormLogin({ ...formLogin, [name]: value }); //email: vflores@gmail.com
        //name: email o password // value: valor del input
    }

    //Función para validar si existe el usuario
    const verifyUser = (): User | undefined => {
        const existUser = users.find(user => user.email === formLogin.email && user.password === formLogin.password);
        return existUser;
    }

    //Función para iniciar sesión
    const handleLogin = (): void => {
        //Validar que el formulario no esté vacío
        if (formLogin.email === '' || formLogin.password === '') {
            //Mensaje alerta
            Alert.alert('Error', 'Todos los campos son obligatorios');
            return; //termina la ejecución de la función
        }
        //Validar si existe el usuario
        if (!verifyUser()) {
            Alert.alert('Error', 'Usuario y/o contraseña incorrectos');
            return;
        }
        //Inicio de sesión exitoso
        navigation.dispatch(CommonActions.navigate({name:'Home'}));
        //console.log(formLogin);
    }

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
                <View style={styles.containerInput}>
                    <InputComponent placeholder='Correo'
                        keyboardType='email-address'
                        handleChangeValue={handleChangeValue}
                        name='email'/>
                    <InputComponent placeholder='Contraseña'
                        keyboardType='default'
                        handleChangeValue={handleChangeValue}
                        name='password'
                        isPassword={hiddenPassword} />
                    <Icon name={(hiddenPassword) ? 'visibility' : 'visibility-off'}
                        size={20}
                        color={PRIMARY_COLOR}
                        style={styles.icon}
                        onPress={() => setHiddenPassword(!hiddenPassword)} />
                </View>
                <ButtonComponent title='Iniciar' handleLogin={handleLogin} />
                <TouchableOpacity
                    onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Register' }))}>
                    <Text style={styles.textRedirect}>
                        No tienes una cuenta? Regístrate ahora
                    </Text>
                </TouchableOpacity>
            </BodyComponent>
        </View>
    )
}
