import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
  message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link, useSearchParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import './index.scss'
import { http } from '@/utils'
import { useEffect, useState, useRef } from 'react'


const { Option } = Select

const Publish = () => {

  const [searchParams] = useSearchParams()

  const articleId = searchParams.get('id')

  const [form] = Form.useForm()

  useEffect(() => {
    async function getArticle(){
      const res = await http.get(`/mp/article/${articleId}`)
      const {cover, ...formValue} = res.data
      form.setFieldValue({...formValue, type: cover.type})
      setImageType(cover.type)
      setImageList(cover.images.map(url => ({url})))
    }
    if (articleId){
      getArticle()
    }
  }, [articleId, form])

  const [channels, setChannels] = useState([])

  useEffect(() => {
    async function fetchChannels(){
      const res = await http.get('/channels')
      setChannels(res.data.channels)
    }
    fetchChannels()
  }, [])

  const [imageType, setImageType] = useState(0)

  const onFinish = async (formValue) => {
    const { channel_id, content, title} = formValue
    const formatUrl = (list) => {
      return list.map(item => {
        if(item.response){
          return item.response.data.url
        } else {
          return item.url
        }
      })
    }
    const data = {
      channel_id,
      content,
      title,
      type: imageType,
      cover: {
        type: imageType,
        images: formatUrl(imageList)
      }
    }
    console.log(imageType)
    console.log(imageList.length)
    if (imageType != imageList.length) return message.warning('图片类型和数量不一致')
    if (articleId) {
      await http.put(`/mp/articles/${articleId}?draft=false`, data)
    } else {
      await http.post('/mp/articles?draft=false', data)
    }
    message.success(`${articleId ? '编辑' : '发布'}文章成功`)
  }

  const [imageList, setImageList] = useState([])
  const cacheImageList = useRef([])

  const onUploadChange = (info) => {
      setImageList(info.fileList)
      cacheImageList.current = info.fileList
  }



  const onTypeChange = (e) => {
    console.log(e)
    setImageType(e.target.value)
  }

  const onRadioChange = (e) => {
    const type = e.target.value
    setImageType(type)
    if(type == 1){
      const imgList = cacheImageList.current[0] ? [cacheImageList.current[0]] : []
      setImageList(imgList)
    } else if(type === 3){
      setImageList(cacheImageList.current)
    }
  }
  

  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb items={[
            { title: <Link to={'/'}>首页</Link> },
            { title: `${articleId ? '编辑文章' : '发布文章'}`},
          ]}
          />
        }
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
          form={form}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: '请输入文章标题' }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: '请选择文章频道' }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channels.map(item => (
                <Option key={item.id} value={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: '请输入文章内容' }]}
          >

            <Input placeholder="Basic usage" />
            
          </Form.Item>
          <Form.Item label="封面">
            <Form.Item name="type" onChange={onTypeChange}>
              <Radio.Group onRadioChange={onRadioChange}>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
              {imageType > 0 && 
                  <Upload
                      name="image"
                      listType="picture-card"
                      showUploadList
                      action={'http://geek.itheima.net/v1_0/upload'}
                      onChange={onUploadChange}
                      maxCount={imageType}
                      multiple={imageType > 1}
                      fileList={imageList}
                  >
                    <div style={{ marginTop: 8 }}>
                      <PlusOutlined />
                    </div>
                  </Upload>
                }
          </Form.Item>

          <div className='quill-container'>
            <ReactQuill 
              className='publish-quill' 
              theme="snow" 
              placehplder="请输入文章内容" 
            />
          </div>
          

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit" onClick={onFinish}>
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish