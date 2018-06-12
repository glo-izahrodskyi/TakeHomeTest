// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from './Style';
import getLocations from './Redux/LocationsSelector';
import { regionContainingPoints } from '../../Utils/Utils';

type Props = {
    locations: [],
};

type State = {
    initedRegion: boolean,
    mapReady: boolean,
};
export class LocationsMap extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            initedRegion: false,
            mapReady: false,
        };
    }

    getInitialRegion() {
        const { locations } = this.props;
        const points = locations.map(location => ({
            latitude: location.lat,
            longitude: location.lng,
        }));
        let initialRegion;
        if (points.length && !this.state.initedRegion && this.state.mapReady) {
            initialRegion = regionContainingPoints(points);
            this.setState({ initedRegion: true });
        } else {
            initialRegion = null;
        }
        return initialRegion;
    }

    render() {
        const { locations } = this.props;
        return (
            <View style={styles.container}>
                <MapView
                    style={styles.map}
                    showsUserLocation
                    onMapReady={() => {
                        this.setState({ mapReady: true });
                    }}
                    region={this.getInitialRegion()}
                >
                    {locations.map(location => (
                        <Marker
                            key={location.id}
                            coordinate={{
                                latitude: location.lat,
                                longitude: location.lng,
                            }}
                            title={location.name}
                            description={location.name}
                        >
                            <Callout tooltip>
                                <Text />
                            </Callout>
                        </Marker>
                    ))}
                </MapView>
            </View>
        );
    }
}

const mapStateToProps = state => ({ locations: getLocations(state) });

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationsMap);
