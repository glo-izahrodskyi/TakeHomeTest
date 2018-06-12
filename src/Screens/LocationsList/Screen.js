// @flow
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from '../../Localization/i18n';

type Props = {};
export class LocationsList extends Component<Props> {
    render() {
        return (
            <View>
                <Text>{I18n.t('LocationsMap')}</Text>
            </View>
        );
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(LocationsList);
