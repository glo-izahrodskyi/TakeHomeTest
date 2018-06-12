// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationView from '../Components/TabsRouter';

type Props = {};
export class RootComponent extends Component<Props> {
    render() {
        return <NavigationView />;
    }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(RootComponent);
