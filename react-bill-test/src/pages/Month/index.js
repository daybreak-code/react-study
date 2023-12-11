import { NavBar, DatePicker } from 'antd-mobile'
import { useEffect, useMemo, useState } from 'react'
import './index.scss'
import classNames from 'classnames'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const Month = () => {
  // 按月做数据的分组
  const billList = useSelector(state => state.bill.billList)
  // 控制弹框的打开和关闭
  const monthGroup = useMemo(() => {
    return billList
  }, [billList])

  useEffect(() => {
    const nowDate = new Date();
    dayjs(nowDate).format('YYYY-MM')
  }, [])

  console.log(monthGroup)
  const [currentMonthList, setMonthList] = useState([])
  
  const [dateVisiable, setDateVisible] = useState(false)
  const [currentDate, setCurrentDate] = useState(() => {
    return dayjs(new Date()).format('YYYY-MM')
  })
  const onConfirm = (date) => {
    setDateVisible(false)
    //console.log(date)
    const formatDate = dayjs(date).format('YYYY-MM')
    setMonthList(monthGroup[formatDate])
    setCurrentDate(formatDate)
  }
  return (
    <div className="monthlyBill">
      <NavBar className="nav" backArrow={false}>
        月度收支
      </NavBar>
      <div className="content">
        <div className="header">
          {/* 时间切换区域 */}
          <div className="date" onClickCapture={() => setDateVisible(true)}>
            <span className="text">
              {currentDate + ''} | 3月账单
            </span>
            {/*根据当前弹框打开的状态控制 expand 类名是否存在 */}
            <span className={classNames('arrow', dateVisiable && 'expand')}></span>
          </div>
          {/* 统计区域 */}
          <div className='twoLineOverview'>
            <div className="item">
              <span className="money">{100}</span>
              <span className="type">支出</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">收入</span>
            </div>
            <div className="item">
              <span className="money">{200}</span>
              <span className="type">结余</span>
            </div>
          </div>
          {/* 时间选择器 */}
          <DatePicker
            className="kaDate"
            title="记账日期"
            precision="month"
            visible={dateVisiable}
            onCancel={() => setDateVisible(false)}
            onConfirm={onConfirm}
            onClose={() => setDateVisible(false)}
            max={new Date()}
          />
        </div>
      </div>
    </div >
  )
}

export default Month