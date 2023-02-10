import { Card, CardContent, Typography } from '@mui/material'
import React, { forwardRef } from 'react'
import './Message.css'

const Message = forwardRef(({ username, message }, ref) => {

    const isUser = (username === message.username);

    return (
        <div ref={ref} className={isUser ? "message_user" : "message_guest"}>
            <Card className={isUser ? "message_userCard" : "message_guestCard"}>
                <CardContent>
                    <Typography
                        variant="h5"
                        component="h2"
                    >
                        
                        {!isUser ? `${message.username} :`: ``} {message.text}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
})

export default Message