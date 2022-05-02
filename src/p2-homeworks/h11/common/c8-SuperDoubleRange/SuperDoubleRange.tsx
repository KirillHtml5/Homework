import {makeStyles, Slider} from '@mui/material'
import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes, useState} from 'react'
import s from '../c7-SuperRange/SuperRange.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange: (value1: number, value2: number) => void;
    value1: number;
    value2: number;
    // min, max, step, disable, ...
}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {

        onChange, value1, value2,
        onChangeRange,

        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки


    const handleChange = (event: Event, value: number | number[]) => {
        if (Array.isArray(value)) {
            onChangeRange(value[0], value[1])
        }
    };

    return (
        <div className={s.slider}>
            <Slider

                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                value={[value1, value2]}
                onChange={handleChange}

            />
        </div>
    )
}

export default SuperDoubleRange
