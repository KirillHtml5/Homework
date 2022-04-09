import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {loadingAC} from './bll/loadingReducer';
import {AppStoreType} from './bll/store';
import s from './HW10.module.css'

function HW10() {

    const isLoad = useSelector<AppStoreType, boolean>(state => state.loading.isLoad)
    const dispatch = useDispatch()
    // useSelector, useDispatch


    const setLoading = () => {
        // dispatch
        dispatch(loadingAC(true))
        // setTimeout
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 4000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoad
                ? (
                    <div className={s.main}>
                        <div className={s.preloader}></div>
                    </div>
                ) : (
                    <div className={s.main}>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
