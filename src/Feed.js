import React, { useState } from 'react'
import {
  Card, CardImg, CardText, CardHeader, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import {FeedPost} from './FeedPost'

import './Feed.css'

import play from './play.jpg'

const Feed = props => {
  const data = [
      {
        userName:"Brittany",
        timeAgo:"1h",
        title:"Mary Had a Little Lamb",
        likes: 20,
        caption:"Showing off my vocal range with Marry Had a Little Lamb... ",
        thumbnail: play,
      },
      {
        userName:"Lovely42",
        timeAgo:"1h",
        title:"Spiderman Audition",
        likes:40,
        caption:"Casting my web for spiderman audition",
        thumbnail:play
      },
      {
        userName:"George.1234",
        timeAgo:"3h",
        title:"Power Rangers Theme Song",
        likes:100,
        caption:"Power Rangers Theme, on saxaphone",
        thumbnail:play
      }
  ]

  return (
    <div className="feed">
      {data.map(feedItem => (
        <FeedPost
          {...feedItem}
        />
      ))}
    </div>
  )
}

export default Feed
