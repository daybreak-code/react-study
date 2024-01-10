import { Link } from "react-router-dom"
import { Card, Breadcrumb, Form, Button, Radio, DatePicker, Select} from 'antd'
import { Table, Tag, Space, Popconfirm} from 'antd'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import img404 from '@/assets/error.png'
import locale from "antd/es/date-picker/locale/en_US"
import { useEffect, useState } from "react"
import { http } from "@/utils"

const { Option } = Select
const { RangePicker } = DatePicker

const Article = () => {

    const delArticle = async (data) => {
      await http.delete(`/mp/articles/${data.id}`)
      setParams({
        page: 1,
        per_page: 10
      })
    }

    const columns = [
      {
        title: '封面',
        dataIndex: 'cover',
        width: 120,
        render: cover => {
          return <img src={cover.images[0] || img404} width={80} height={60} alt="" />
        }
      },
      {
        title: '标题',
        dataIndex: 'title',
        width: 220
      },
      {
        title: '状态',
        dataIndex: 'status',
        render: data => <Tag color="green">审核通过</Tag>
      },
      {
        title: '发布时间',
        dataIndex: 'pubdate'
      },
      {
        title: '阅读数',
        dataIndex: 'read_count'
      },
      {
        title: '评论数',
        dataIndex: 'comment_count'
      },
      {
        title: '点赞数',
        dataIndex: 'like_count'
      },
      {
        title: '操作',
        render: data => {
          return (
            <Space size="middle">
              <Button type="primary" shape="circle" icon={<EditOutlined />} />
              <Popconfirm
                title="确认删除该条文章吗?"
                onConfirm={() => delArticle(data)}
                okText="确认"
                cancelText="取消"
              >
                <Button
                  type="primary"
                  danger
                  shape="circle"
                  icon={<DeleteOutlined />}
                />
              </Popconfirm>
            </Space>
          )
        }
      }

    ]
    
    const data = [
      {
        id: '8218',
        comment_count: 0,
        cover: {
          images: [],
        },
        like_count: 0,
        pubdate: '2019-03-11 09:00:00',
        read_count: 2,
        status: 2,
        title: 'wkwebview离线化加载h5资源解决方案'
      }
    ]

    const [channels, setChannels] = useState([])
    
    const [article, setArticleList] = useState({
      list: [],
      count: 0
    })

    const [params, setParams] = useState({
      page: 1,
      per_page: 4,
      begin_pubdate: null,
      end_pubdate: null,
      status: null,
      channel_id: null
    })

    const [list, setList] = useState([])
    const [count, setCount] = useState(0)

    function getArticleListAPI(){
      const res = {
        data: {
          results: []
        }
      }
      return res
    }

    async function getList (reqData = {}){
      const res = await getArticleListAPI(reqData)
      setList(res.data.results)
      setCount(res.data.total_count)
    }

    const onFinish = async (formValue) => {
      console.log(formValue)
      const {channel_id, date, status} = formValue
      const reqData = {
        status,
        channel_id,
        begin_pubdate: date[0].format('YYYY-MM-DD'),
        end_pubdate: data[1].format('YYYY-MM-DD')
      }
      getList(reqData)
    }

    useEffect(() => {
      async function fetchArticleList() {
        const res = await http.get('/mp/articles', {params})
        const {results, total_count} = res.data
        setArticleList({
          list: results,
          count: total_count
        })
        fetchArticleList()
      }
    }, [params])

    useEffect(() => {
      async function fetchChannels(){
        const res = await http.get('/channels')
        setChannels(res.data.channels)
      }
      fetchChannels()
    }, [])

    useEffect(() => {
      getList()
    }, [])

    const pageChange = (page) => {
      setParams({
        ...params,
        page
      })
    }

    return (
      <div>
        <Card
          title={
            <Breadcrumb items={[
              { title: <Link to={'/'}>首页</Link> },
              { title: '文章列表' },
            ]} />
          }
          style={{ marginBottom: 20 }}
        >
          <Form initialValues={{ status: '' }} onFinish={onFinish}>
            <Form.Item label="状态" name="status">
              <Radio.Group>
                <Radio value={''}>全部</Radio>
                <Radio value={0}>草稿</Radio>
                <Radio value={2}>审核通过</Radio>
              </Radio.Group>
            </Form.Item>

            <Form.Item label="频道" name="channel_id">
              <Select
                placeholder="请选择文章频道"
                defaultValue="lucy"
                style={{ width: 120 }}
              >
                {channels.map(item => {
                  <Option key={item.id} value={item.id}>
                    {item.name}
                  </Option>
                })}
              </Select>
            </Form.Item>

            <Form.Item label="日期" name="date">
              {/* 传入locale属性 控制中文显示*/}
              <RangePicker locale={locale}></RangePicker>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ marginLeft: 40 }}>
                筛选
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card title={`根据筛选条件共查询到 ${article.count} 条结果：`}>
          <Table rowKey="id" columns={columns} dataSource={data} pagination={{
            current: params.page,
            pageSize: params.per_page,
            onChange: pageChange,
            total: article.count
          }} />
        </Card>
      </div>
    )
  }

export default Article