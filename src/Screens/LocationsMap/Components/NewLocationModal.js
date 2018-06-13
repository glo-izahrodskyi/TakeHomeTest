// @flow
import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text, Button } from 'react-native';
import Modal from 'react-native-modalbox';
import { formatDistance } from '../../../Utils/Utils';
import I18n from '../../../Localization/i18n';
import Colors from '../../../Theme/Colors';

type Props = {
    name: string,
    distance: string,
    onSave: Function,
    onCancel: Function,
};

export default class NewLocationModal extends Component<Props> {
    modalRef: any;

    open() {
        this.modalRef.open();
    }

    close() {
        this.modalRef.close();
    }

    render() {
        const { name, distance, onSave, onCancel } = this.props;
        return (
            <Modal
                style={styles.newLocationModal}
                position={'bottom'}
                backdrop
                ref={element => {
                    this.modalRef = element;
                }}
            >
                {Platform.select({
                    ios: (
                        <View style={styles.newLocationTitleContainerIos}>
                            <Text style={styles.newLocationTitleIos}>{I18n.t('AddLocation')}</Text>
                        </View>
                    ),
                    android: null,
                })}
                <View style={styles.newLocationNameContainer}>
                    <Text style={styles.locationName}>{name}</Text>
                    <Text>{formatDistance(distance)}</Text>
                </View>
                {Platform.select({
                    ios: (
                        <View style={styles.newLocationBtnsContainer}>
                            <Button onPress={onSave} title={I18n.t('SaveLocation')} />
                        </View>
                    ),
                    android: (
                        <View style={styles.newLocationBtnsContainer}>
                            <View style={styles.newLocationButtonAndroid}>
                                <Button onPress={onCancel} title={I18n.t('Cancel').toUpperCase()} />
                            </View>
                            <View style={styles.newLocationButtonAndroid}>
                                <Button onPress={onSave} title={I18n.t('Save').toUpperCase()} />
                            </View>
                        </View>
                    ),
                })}
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    newLocationModal: Platform.select({
        ios: {
            height: 130,
            backgroundColor: Colors.LIGHT_LIGHT_GREY,
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
        },
        android: {
            height: 130,
        },
    }),
    newLocationTitleContainerIos: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    newLocationTitleIos: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    newLocationNameContainer: Platform.select({
        ios: {
            paddingLeft: 10,
            paddingRight: 10,
            flex: 1,
        },
        android: {
            padding: 10,
            flex: 1,
        },
    }),
    locationName: {
        fontSize: 18,
        color: 'black',
        marginBottom: 4,
    },
    newLocationBtnsContainer: Platform.select({
        ios: {
            flex: 1,
        },
        android: {
            padding: 10,
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
        },
    }),
    newLocationButtonAndroid: {
        padding: 10,
        width: 100,
    },
});
