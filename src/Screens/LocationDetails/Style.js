import { StyleSheet } from 'react-native';
import Colors from '../../Theme/Colors';

export default StyleSheet.create({
    containerEdit: {
        flex: 1,
        backgroundColor: Colors.LIGHT_LIGHT_GREY,
    },
    containerPreview: {
        flex: 1,
        backgroundColor: Colors.LIGHT_LIGHT_GREY,
    },
    nameEdit: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 18,
        fontWeight: 'bold',
    },
    descriptionEdit: {
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 14,
    },
    previewName: {
        paddingLeft: 10,
        color: 'black',
        paddingRight: 10,
        paddingTop: 15,
        fontSize: 18,
        fontWeight: 'bold',
    },
    distance: {
        paddingLeft: 10,
        paddingRight: 10,
        color: Colors.LIGHT_GREY,
        fontSize: 14,
    },
    description: {
        padding: 10,
        color: 'black',
        paddingTop: 15,
        fontSize: 14,
    },
});
