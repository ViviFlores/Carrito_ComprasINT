import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Product } from '../HomeScreen';
import { styles } from '../../../theme/appTheme';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { PRIMARY_COLOR } from '../../../theme/commons/constants';
import { ModalProduct } from './ModalProduct';

//interface para las propiedades del componente
interface Props {
    product: Product;
    updateStockProduct: (idProduct: number, quantity: number) => void;
}

export const CardProduct = ({ product, updateStockProduct }: Props) => {
    //hook para manejar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <View style={styles.containerCard}>
                <Image source={{
                    uri: product.pathImage
                }}
                    style={styles.imageProduct} />
                <View>
                    <Text style={styles.titleProduct}>{product.name}</Text>
                    <Text>Precio: ${product.price.toFixed(2)}</Text>
                </View>
                <View style={styles.containerIcon}>
                    <Icon name='add-shopping-cart'
                        size={30}
                        color={PRIMARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <ModalProduct isVisible={showModal}
                setShowModal={() => setShowModal(!showModal)}
                product={product}
                updateStockProduct={updateStockProduct} />
        </View>
    )
}
