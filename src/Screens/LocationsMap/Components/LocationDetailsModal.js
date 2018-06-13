// @flow
import React, { Component } from 'react';
import { StyleSheet, Platform, TouchableOpacity, View, Text, Button } from 'react-native';
import Modal from 'react-native-modalbox';
import { formatDistance } from '../../../Utils/Utils';
import I18n from '../../../Localization/i18n';
import Colors from '../../../Theme/Colors';

type Props = {
    name: string,
    distance: string,
    onDetails: Function,
};

export default class LocationDetailsModal extends Component<Props> {
    modalRef: any;

    open() {
        this.modalRef.open();
    }

    close() {
        this.modalRef.close();
    }

    render() {
        const { name, distance, onDetails } = this.props;
        return (
            <Modal
                style={Platform.select({
                    ios: styles.lotionDetailsModalIos,
                    android: styles.lotionDetailsModalAndroid,
                })}
                position={'bottom'}
                backdrop
                ref={element => {
                    this.modalRef = element;
                }}
            >
                <TouchableOpacity onPress={onDetails}>
                    <View style={styles.locationNameContainer}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.locationName}>
                            {name}
                        </Text>
                        <Text>{formatDistance(distance)}</Text>
                    </View>
                </TouchableOpacity>
                {Platform.select({
                    ios: (
                        <View style={styles.flex1}>
                            <Button onPress={onDetails} title={I18n.t('Details')} />
                        </View>
                    ),
                    android: null,
                })}
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    flex1: {
        flex: 1,
    },
    lotionDetailsModalIos: {
        height: 110,
        backgroundColor: Colors.LIGHT_LIGHT_GREY,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
    },
    lotionDetailsModalAndroid: {
        height: 80,
    },
    locationNameContainer: {
        padding: 10,
    },
    locationName: {
        fontSize: 18,
        color: 'black',
        marginBottom: 4,
    },
});
