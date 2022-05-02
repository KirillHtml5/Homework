import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import s from './common/c7-SuperRange/SuperRange.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(30)
    const [value2, setValue2] = useState<number>(70)

    let onChangeRange = (value1: number, value2: number) => {
        setValue1(value1)
        setValue2(value2)
    }


    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                <span className={s.value}>{value1}</span>
                <SuperRange value={value1} onChangeRange={(value: number) => {
                    setValue1(value)
                }}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span className={s.value}>{value1}</span>
                <SuperDoubleRange value1={value1} value2={value2} onChangeRange={onChangeRange}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span className={s.value}>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
