// @flow
import React from 'react';
import I18n from '../../../Localization/i18n';
import Images from '../../../Theme/Images';
import HeaderButton from './HeaderButton';

export default () => (data: any) => {
    const { navigation } = data;
    const { params = {} } = navigation.state;
    let config;
    if (!params.editMode) {
        config = {
            title: I18n.t('Location'),
            headerRight: (
                <HeaderButton
                    title={I18n.t('Edit')}
                    onPressCallback={params.editDetails}
                    iconSource={Images.EditButtonImage}
                />
            ),
        };
    } else {
        config = {
            title: I18n.t('Location'),
            headerRight: (
                <HeaderButton
                    disabled={params.disabledSave}
                    title={I18n.t('Save')}
                    onPressCallback={params.saveDetails}
                    iconSource={Images.CheckButtonImage}
                />
            ),
            headerLeft: (
                <HeaderButton
                    title={I18n.t('Cancel')}
                    onPressCallback={params.cancelEditing}
                    iconSource={Images.CloseButtonImage}
                />
            ),
        };
    }

    return config;
};
