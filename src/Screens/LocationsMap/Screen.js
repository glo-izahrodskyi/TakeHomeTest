// @flow
import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import MapView from 'react-native-maps';
import styles from './Style';

type Props = {};
export class LocationsMap extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <MapView style={styles.map} showsUserLocation />
            </View>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationsMap);
