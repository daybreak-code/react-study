import { useSelector,useDispatch } from "react-redux"


const View = () => {
    // 获取仓库数据
    const dispatch = useDispatch();

    const changeNum = () => {
        dispatch({type: 'add1'})
    }

    const {num,sarr} = useSelector((state:RootState) => ({
        num:state.handleNum.num,
        sarr:state.handleArr.sarr
    
    }))

    return (
        <div className='home'>
            <p>这是Page1页面</p>
            <p>{num}</p>
            <button onClick={changeNum}>点击按钮</button>
            <p>{sarr}</p>
        </div>
    )
}

export default View