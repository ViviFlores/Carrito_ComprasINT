import React, { useState } from 'react';
import { Alert, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { TitleComponent } from '../components/TitleComponent';
import { PRIMARY_COLOR } from '../theme/commons/constants';
import { BodyComponent } from '../components/BodyComponent';
import { styles } from '../theme/appTheme';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { CommonActions, useNavigation } from '@react-navigation/native';
import { User } from '../navigator/StackNavigator';

////Interface para el objeto del formulario
interface FormRegister {
  name: string;
  email: string;
  password: string;
}

//Interface props del StackNavigator
interface Props {
  users: User[];
  addUser: (user: User) => void; //agregar nuevos usuarios
}

export const RegisterScreen = ({ users, addUser }: Props) => {

  //hook useState para manejar el estado del formulario
  const [formRegister, setFormRegister] = useState<FormRegister>({
    name: '',
    email: '',
    password: ''
  });

  //hook useNavigation para navegar entre pantallas
  const navigation = useNavigation();

  //Función para el cambio de valores del objeto del formulario
  const handleChangeValue = (name: string, value: string): void => {
    setFormRegister({ ...formRegister, [name]: value })
  }

  //Función para verificar que el usuario no exista
  const verifyUser = (): User | undefined => {
    const existUser = users.find(user => user.email === formRegister.email);
    return existUser;
  }

  //Función para limpiar campos del formulario
  // const clearFields = () => {
  //   setFormRegister({
  //     name: '',
  //     email: '',
  //     password: ''
  //   })
  // }

  //Función para registrar el usuario
  const handleRegister = () => {
    //Validar que el formulario no esté vacío
    if (formRegister.name === '' || formRegister.email === '' || formRegister.password === '') {
      //Mensaje alerta
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return; //termina la ejecución de la función
    }
    //Validar si existe el usuario
    if (verifyUser()) {
      formRegister.name = '';
      //Mensaje alerta
      Alert.alert('Error', 'El usuario ya se encuentra registrado');
      const bandera = true;
      return; //termina la ejecución de la función
    }

    //Agregar un nuevo usuario
    //Crear objeto
    const newUser: User = {
      id: users.length + 1,
      name: formRegister.name,
      email: formRegister.email,
      password: formRegister.password
    }
    addUser(newUser);
    Alert.alert('Exitoso', 'Usuario registrado correctamente');
    //console.log(formRegister);
    navigation.goBack(); //regresar a la pantalla anterior
  }

  return (
    <View>
      <StatusBar backgroundColor={PRIMARY_COLOR} />
      <TitleComponent title='Regístrate' />
      <BodyComponent>
        <Text style={styles.titlePrincipal}>
          Bienvenido de nuevo!
        </Text>
        <Text style={styles.titleSecondary}>
          Realiza tus compras de manera rápida y segura
        </Text>
        <View style={styles.containerInput}>
          <InputComponent placeholder='Nombre'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='name' />
          <InputComponent placeholder='Correo'
            keyboardType='email-address'
            handleChangeValue={handleChangeValue}
            name='email' />
          <InputComponent placeholder='Contraseña'
            keyboardType='default'
            handleChangeValue={handleChangeValue}
            name='password' />
        </View>
        <ButtonComponent title='Registrar' handleLogin={handleRegister} />
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.navigate({ name: 'Login' }))}>
          <Text style={styles.textRedirect}>
            Ya tienes una cuenta? Inicia sesión ahora
          </Text>
        </TouchableOpacity>
      </BodyComponent>
    </View>
  )
}
