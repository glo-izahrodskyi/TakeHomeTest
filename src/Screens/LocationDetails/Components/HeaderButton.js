// @flow
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Button,
    TouchableNativeFeedback,
    View,
    Image,
    I18nManager,
} from 'react-native';

type Props = {
    disabled: boolean,
    iconSource: any,
    onPressCallback: Function,
    title: string,
    borderless: boolean,
    pressColor: string,
};

export default class HeaderButton extends Component<Props> {
    static defaultProps = {
        disabled: false,
        borderless: true,
        pressColor: 'rgba(0, 0, 0, .32)',
    };

    renderIos() {
        const { disabled, title, onPressCallback } = this.props;

        return (
            <Button
                disabled={disabled}
                title={title}
                onPress={() => onPressCallback && onPressCallback()}
            />
        );
    }

    renderAndroid() {
        const { disabled, iconSource, onPressCallback } = this.props;

        return (
            <TouchableNativeFeedback
                disabled={disabled}
                onPress={() => !disabled && onPressCallback && onPressCallback()}
                background={TouchableNativeFeedback.Ripple(
                    this.props.pressColor,
                    this.props.borderless,
                )}
            >
                <View style={styles.container}>
                    <Image
                        style={[styles.icon, disabled ? styles.iconDisabled : {}]}
                        source={iconSource}
                    />
                </View>
            </TouchableNativeFeedback>
        );
    }

    render() {
        return Platform.select({
            ios: this.renderIos(),
            android: this.renderAndroid(),
        });
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    icon: {
        height: 24,
        width: 24,
        margin: 16,
        resizeMode: 'contain',
        transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
    },
    iconDisabled: {
        opacity: 0.3,
    },
});
