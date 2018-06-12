// @flow
import React, { Component } from 'react';
import { Platform, StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { formatDistance } from '../../../Utils/Utils';
import Colors from '../../../Theme/Colors';
import Images from '../../../Theme/Images';

type Props = {
    locationData: any,
    onRowPress: Function,
};

export default class LocationsListRow extends Component<Props> {
    render() {
        const item = this.props.locationData;
        return (
            <TouchableOpacity style={styles.item} onPress={() => this.props.onRowPress()}>
                <View style={styles.content}>
                    <View style={styles.nameColumn}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.name}>
                            {item.name}
                        </Text>
                        <Text style={styles.distance}>{`${formatDistance(item.distance)}`}</Text>
                        {Platform.select({
                            ios: (
                                <Image
                                    style={styles.itemImageIos}
                                    source={Images.ChevronRightImage}
                                />
                            ),
                            android: null,
                        })}
                    </View>
                    <View style={styles.descriptionColumn}>
                        <Text numberOfLines={1} ellipsizeMode={'tail'} style={styles.description}>
                            {item.description}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: Colors.DARK_BLUE,
        height: 90,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
    },
    nameColumn: {
        flex: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    itemImageIos: {
        marginTop: -3,
        width: 24,
        height: 24,
        opacity: 0.4,
    },
    name: {
        paddingRight: 10,
        flex: 7,
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    distance: {
        flex: 2,
        color: Colors.LIGHT_GREY,
        fontSize: 14,
    },
    descriptionColumn: {
        flex: 4,
        justifyContent: 'center',
    },
    description: {
        color: Colors.LIGHT_GREY,
        fontSize: 14,
    },
});
