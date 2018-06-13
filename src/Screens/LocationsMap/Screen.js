// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import MapView, { Marker, Callout } from 'react-native-maps';
import styles from './Style';
import getLocations from './Redux/LocationsSelector';
import { regionContainingPoints } from '../../Utils/Utils';
import LocationDetailsModal from './Components/LocationDetailsModal';

type Props = {
    locations: [],
    navigation: any,
};

type State = {
    initedRegion: boolean,
    mapReady: boolean,
    selectedLocation: any,
};
export class LocationsMap extends Component<Props, State> {
    locationDetailsModal: any;
    constructor(props: Props) {
        super(props);
        this.state = {
            initedRegion: false,
            mapReady: false,
            selectedLocation: {},
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

    onPressOnMarker(selectedLocation: any) {
        this.setState({ selectedLocation });
        this.locationDetailsModal.open();
    }

    openDetailsScreen = () => {
        const { selectedLocation } = this.state;
        this.locationDetailsModal.close();
        this.props.navigation.navigate('Details', { location: selectedLocation, editMode: false });
    };

    render() {
        const { locations } = this.props;
        const { selectedLocation } = this.state;
        return (
            <View style={styles.container}>
                <LocationDetailsModal
                    name={selectedLocation.name}
                    distance={selectedLocation.distance}
                    onDetails={this.openDetailsScreen}
                    ref={element => {
                        this.locationDetailsModal = element;
                    }}
                />
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
                            onPress={() => {
                                this.onPressOnMarker(location);
                            }}
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
