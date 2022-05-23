import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {changeThemeC} from "./bll/themeReducer";
import s from "./HW12.module.css";

const themes = ['dark', 'red', 'some', 'my'];

function HW12() {
    const theme = 'some'; // useSelector
    const theme1 = useSelector<AppStoreType, string>(store => store.theme.themes)
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
    const onChangeCallback = (theme1: string) => {
        // alert('i want changed')
        dispatch(changeThemeC(theme1))
    }

    return (
        <div className={s[theme1]}>
            <hr/>
            <span className={s[theme1 + '-text']}>
                homeworks 12
            </span>
            <SuperSelect
                options={themes}
                onChangeOption={onChangeCallback}
            />

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>


        </div>
    );
}

export default HW12;
