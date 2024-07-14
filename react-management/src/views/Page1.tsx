import { useSelector,useDispatch } from "react-redux"
import numStatus from "../store/NumStatus/index"


const View = () => {
    // 获取仓库数据
    const dispatch = useDispatch();
    const changeNum = () => {
        dispatch(numStatus.asyncActions.asyncAdd1)
    }
    const changeNum2 = () => {
        dispatch({type: 'add2', val: 200})
    }
    const {num,sarr} = useSelector((state:RootState) => ({
        num:state.handleNum.num,
        sarr:state.handleArr.sarr
    }))

    return (
        <div className='home'>
            <p>这是Page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>异步点击</button>
            <button onClick={changeNum2}>同步点击</button>
            <p>{sarr}</p>
        </div>
    )
}

export default View