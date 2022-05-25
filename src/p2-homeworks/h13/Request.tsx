import React, {ChangeEvent, useState} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './RequestsAPI';

function Request() {

    const [checked, setChecked] = useState<boolean>(true)
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const onClickHandler = async () => {
        const res = await RequestsAPI.getResponse(checked)
    }

    return (
        <div>
            <div>
                <SuperCheckbox checked={checked}
                               onChangeChecked={setChecked}>some text</SuperCheckbox>
            </div>

            <div>
                <SuperButton onClick={onClickHandler}>post</SuperButton>
            </div>

        </div>
    );
};

export default Request;