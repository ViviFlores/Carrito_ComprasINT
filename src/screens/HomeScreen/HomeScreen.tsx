import React, { useState } from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import { TitleComponent } from '../../components/TitleComponent';
import { BodyComponent } from '../../components/BodyComponent';
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../../theme/commons/constants';
import { CardProduct } from './components/CardProduct';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { styles } from '../../theme/appTheme';
import { ModalCar } from './components/ModalCar';

//interface para los objetos Productos
export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
    pathImage: string;
}

//interface para los objetos Carrito
export interface Car {
    id: number;
    name: string;
    price: number;
    quantity: number;
    total: number;
}


export const HomeScreen = () => {
    //arreglo de productos
    const products: Product[] = [
        { id: 1, name: 'Funda de azucar', price: 2.30, stock: 10, pathImage: 'https://sihai.ec/wp-content/uploads/2020/09/A006.png' },
        { id: 2, name: 'Funda de arroz', price: 1.50, stock: 0, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 3, name: 'Funda de papas', price: 1.00, stock: 12, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 4, name: 'Funda de fideos', price: 0.80, stock: 30, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 5, name: 'Funda de sal', price: 0.50, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' },
        { id: 6, name: 'Funda de azucar', price: 2.30, stock: 20, pathImage: 'https://sihai.ec/wp-content/uploads/2020/09/A006.png' },
        { id: 7, name: 'Funda de arroz', price: 1.50, stock: 5, pathImage: 'https://www.pronacafoodservice.com/wp-content/uploads/2018/06/8275-arroz-blanco-vitaminas.jpg' },
        { id: 8, name: 'Funda de papas', price: 1.00, stock: 12, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/65702_G.jpg' },
        { id: 9, name: 'Funda de fideos', price: 0.80, stock: 30, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/77563_G.jpg' },
        { id: 10, name: 'Funda de sal', price: 0.50, stock: 10, pathImage: 'https://www.supermercadosantamaria.com/documents/10180/10504/87990_M.jpg' }
    ];

    //hook useState para gestionar el estado de los productos
    const [productsState, setProductsState] = useState<Product[]>(products);

    //hook useState para gestionar el carrito de compras
    const [car, setCar] = useState<Car[]>([]);

    //hook useState para gestionar el estado del modal
    const [showModal, setShowModal] = useState<boolean>(false);

    //función para actualizar el stock de un producto
    const updateStockProduct = (idProduct: number, quantity: number): void => {
        const newProducts = productsState.map(product => product.id === idProduct
            ? { ...product, stock: product.stock - quantity }
            : product);
        //Actualizar el estado de productsState
        setProductsState(newProducts);
        //llamar a la función para agregar el producto al carrito
        addProductCar(idProduct, quantity);
    }

    //función para agregar un producto al carrito
    const addProductCar = (idProduct: number, quantity: number) => {
        const product = productsState.find(product => product.id === idProduct);
        //Controlar si no existe el producto
        if (!product) return;
        //Crear el objeto producto para agregar al carrito
        const newProductCar: Car = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            total: product.price * quantity
        }
        //Agregar arreglo Car
        setCar([...car, newProductCar]);
        //console.log(car);
    }

    return (
        <View>
            <StatusBar backgroundColor={PRIMARY_COLOR} />
            <View style={styles.headerHome}>
                <TitleComponent title='Productos' />
                <View style={{
                    ...styles.containerIcon,
                    paddingHorizontal: 30
                }}>
                    <Text style={styles.textIconCar}>{car.length}</Text>
                    <Icon name='shopping-cart'
                        size={30}
                        color={SECONDARY_COLOR}
                        onPress={() => setShowModal(!showModal)} />
                </View>
            </View>
            <BodyComponent>
                <FlatList
                    data={productsState}
                    renderItem={({ item }) => <CardProduct product={item} updateStockProduct={updateStockProduct} />}
                    keyExtractor={item => item.id.toString()} />
            </BodyComponent>
            <ModalCar isVisible={showModal}
                car={car}
                setShowModal={() => setShowModal(!showModal)}
                setCar={setCar} />
        </View>
    )
}
