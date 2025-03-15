import React, { ReactNode } from 'react';
import { Text, useWindowDimensions, View } from 'react-native';
import { styles } from '../theme/appTheme';
 
interface Props{
    children: ReactNode; //ReactNode: permite recibir cualquier tipo de elemento
}

export const BodyComponent = ({children}: Props) => {
    //hook useWindowDimensions: permite obtener las dimensiones de la pantalla
    const { height } = useWindowDimensions();
    return (
        <View style={{
            ...styles.containerBody,
            height: height * 0.88
        }}>
            {children}
        </View>
    )
}
