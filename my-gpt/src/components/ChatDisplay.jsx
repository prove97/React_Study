import React from 'react'
import styled from 'styled-components';
import {LoadingOutlined} from '@ant-design/icons';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Card } from 'antd';


const ChatDisplay = ({chatDataList, isLoading}) => {
    return (
        <ChatContainer>
            {
                chatDataList.map((chat, index) => (
                    <div key={index}>
                        <Space>
                            <Avatar size={40}>나</Avatar>
                            <Card
                                style={{
                                    width:300,
                                }}
                                bodyStyle={{
                                    padding:"12px"
                                }}>
                                {chat.question}
                            </Card>
                        </Space>
                        <RequestArea>
                            <Space>
                                <Card>
                                    {chat.message}
                                </Card>
                                <Avatar 
                                    size={40}
                                    src={"https://www.k-health.com/news/photo/202306/65884_71441_1839.jpg"}
                                />
                            </Space>

                        </RequestArea>
                    </div>
                ))
            }
            {isLoading && 
            <div>
                AI 응답 작성중...
                <LoadingOutlined />
            </div>
            }
        </ChatContainer>
    )
}

export default ChatDisplay

const RequestArea = styled.div`
    float: right ;
    text-align: right;
`

const ChatContainer = styled.div`
    display: flex;
    flex-direction: column;
`
