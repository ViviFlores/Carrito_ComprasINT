import { StyleSheet } from "react-native";
import { INPUT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR } from "./commons/constants";

export const styles = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
    },
    containerBody: {
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 45,
        paddingTop: 40
    },
    titlePrincipal: {
        fontSize: 17,
        fontWeight: 'bold',
    },
    titleSecondary: {
        fontSize: 15,
        marginTop: 10
    },
    input: {
        backgroundColor: INPUT_COLOR,
        borderRadius: 5,
        paddingHorizontal: 20,
        marginVertical: 7
    },
    containerInput: {
        marginVertical: 10
    },
    containerButton: {
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius: 5
    },
    textButton: {
        color: SECONDARY_COLOR,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold'
    },
    icon: {
        position: 'absolute',
        bottom: 17,
        right: 10
    },
    textRedirect: {
        marginTop: 20,
        color: PRIMARY_COLOR,
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    containerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: SECONDARY_COLOR,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 1,
        marginBottom: 13
    },
    titleProduct: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    imageProduct: {
        width: 70,
        height: 70
    },
    containerIcon: {
        flex: 1,
        alignItems: 'flex-end'
    },
    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    contentModal: {
        padding: 20,
        backgroundColor: SECONDARY_COLOR,
        borderRadius: 10
    },
    headerModal: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        padding: 10
    },
    titleModal: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    imageModal: {
        width: 200,
        height: 200
    },
    containerImage: {
        alignItems: 'center'
    },
    containerQuantity: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonQuantity: {
        height: 50,
        width: 50,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 15
    },
    buttonTextQuantity: {
        color: SECONDARY_COLOR,
        fontSize: 20,
        fontWeight: 'bold'
    },
    textQuantity: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonAddCar: {
        backgroundColor: PRIMARY_COLOR,
        alignItems: 'center',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop: 10
    },
    buttonTextAddCar: {
        color: SECONDARY_COLOR,
        fontWeight: 'bold'
    },
    textStock: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        color: 'red'
    },
    headerHome: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textIconCar: {
        backgroundColor: SECONDARY_COLOR,
        paddingHorizontal: 5,
        borderRadius: 20,
        fontSize: 12,
        fontWeight: 'bold'
    },
    headerTable: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerDescription: {
        flexDirection: 'row',
    },
    textHeaderTable: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#000"
    },
    containerTotal:{
        marginVertical:10,
        alignItems:'flex-end',
        paddingHorizontal:10
    },
    textTotal:{
        fontSize: 16,
        fontWeight:'bold'
    }
})