import React, { useState } from 'react'
import {
  Card, CardImg, CardText, CardHeader, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


export const FeedPost = ({
  userName,
  timeAgo,
  title,
  likes,
  caption,
  thumbnail
}) => {
  return (
    <Card className="feed-card">
        <CardHeader>{userName}<span className="time-ago">{timeAgo}</span></CardHeader>
        <CardBody>
          <CardTitle>{title}</CardTitle>
        </CardBody>
        <CardImg top width="100%" src={thumbnail} alt="Card image cap" />
      <CardBody>
          <CardText>
            <small className="text-muted">
              {caption}
            </small>
          </CardText>
          <Button className="like">♥</Button>
          <small className="text-muted">
            {likes}
          </small>
        </CardBody>
      </Card>
  )
}
