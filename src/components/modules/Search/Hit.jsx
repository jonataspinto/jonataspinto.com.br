import React from 'react'
import { PostItem } from '../PostItem'

const HitComponent = ({ hit }) => (
  <PostItem
    category={hit.category}
    description={hit.excerpt}
    title={hit.title}
    date={hit.date}
    slug={hit.fields.slug}
    timeToRead={hit.timeToRead}
  />
)

export default HitComponent
