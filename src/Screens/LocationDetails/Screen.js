// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { TextField } from 'react-native-material-textfield';
import { updateLocation, addLocation } from './Redux/Actions/LocationActions';
import { formatDistance } from '../../Utils/Utils';
import styles from './Style';
import I18n from '../../Localization/i18n';
import HeaderConfig from './Components/HeaderConfig';

type Props = {
    addLocation: Function,
    updateLocation: Function,
    navigation: any,
};

type State = {
    name: string,
    description: string,
    distance: string,
    editMode: boolean,
    isNew: boolean,
};

export class LocationDetails extends Component<Props, State> {
    static navigationOptions = HeaderConfig();

    constructor(props: Props) {
        super(props);
        const { location, editMode, isNew } = props.navigation.state.params;
        this.state = {
            editMode,
            name: location.name,
            description: location.description,
            distance: location.distance,
            isNew,
        };
    }

    cancelEditing() {
        if (this.state.isNew) {
            this.props.navigation.goBack();
            return;
        }
        const { location } = this.props.navigation.state.params;
        this.setState({
            editMode: false,
            name: location.name,
            description: location.description,
        });
        this.props.navigation.setParams({ editMode: false });
    }

    componentDidMount() {
        this.props.navigation.setParams({
            editDetails: () => this.editDetais(),
            cancelEditing: () => this.cancelEditing(),
            saveDetails: () => this.saveDetails(),
        });
    }

    saveDetails() {
        const currentLocation = this.props.navigation.state.params.location;
        const updatedLocation = {
            ...currentLocation,
            name: this.state.name,
            description: this.state.description,
        };
        this.props.navigation.setParams({
            editMode: false,
            location: { ...updatedLocation },
        });

        if (this.state.isNew) {
            this.props.addLocation(updatedLocation);
            this.setState({ editMode: false, isNew: false });
        } else {
            this.props.updateLocation(updatedLocation);
            this.setState({ editMode: false });
        }
    }

    editDetais() {
        this.setState({ editMode: true });
        this.props.navigation.setParams({ editMode: true });
    }

    renderEditDetails() {
        const { name, description } = this.state;
        return (
            <View style={styles.containerEdit}>
                <TextField
                    placeholder={I18n.t('Name')}
                    style={styles.nameEdit}
                    onChangeText={value => {
                        this.props.navigation.setParams({
                            disabledSave: !value.length,
                        });
                        this.setState({ name: value });
                    }}
                    value={name}
                />
                <TextField
                    placeholder={I18n.t('Description')}
                    style={styles.descriptionEdit}
                    onChangeText={value => this.setState({ description: value })}
                    value={description}
                    multiline
                />
            </View>
        );
    }

    renderPreviewDetails() {
        const { name, description, distance } = this.state;
        return (
            <View style={styles.containerPreview}>
                <Text style={styles.previewName}>{name}</Text>
                <Text style={styles.distance}>{formatDistance(distance)}</Text>
                <Text style={styles.description}>{description || I18n.t('LocationHasNoNote')}</Text>
            </View>
        );
    }

    render() {
        return this.state.editMode ? this.renderEditDetails() : this.renderPreviewDetails();
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {
    updateLocation,
    addLocation,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationDetails);
