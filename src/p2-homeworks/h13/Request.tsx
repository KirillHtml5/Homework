import React, {ChangeEvent, useState, useCallback} from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './RequestsAPI';
import s from './HW13.module.css'


export const Request = () => {

    const [checked, setChecked] = useState<boolean>(true)
    const [message, setMessage] = useState<string>("")
    const testOnChange = (e: ChangeEvent<HTMLInputElement>) => setChecked(e.currentTarget.checked)

    const onClickHandler = useCallback(() => {
        RequestsAPI.getResponse(checked)
            .then((res) => {
                    console.log('res.data', res.data)
                    setMessage(res.data.errorText)
                }
            )
            .catch((error) => {
                console.log('error', {...error})
                console.log('text', error.res ? error.res.data.errorText : error.message)
                setMessage(error.message)
            })
    }, [checked])

    return (
        <div>
            <div>
                <SuperCheckbox checked={checked}
                               onChangeChecked={setChecked}>some text</SuperCheckbox>
            </div>
            <div className={s.message}>
                {message}
            </div>
            <div>
                <SuperButton onClick={onClickHandler}>post</SuperButton>
            </div>

        </div>
    );
};

