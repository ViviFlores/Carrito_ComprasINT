import { StyleSheet } from "react-native";
import { INPUT_COLOR, SECONDARY_COLOR } from "./commons/constants";

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
    }
})