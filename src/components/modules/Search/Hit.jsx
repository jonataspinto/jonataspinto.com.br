import React from 'react';
import { number, shape, string } from 'prop-types';
import { PostItem } from '../PostItem';

const HitComponent = ({ hit }) => (
  <PostItem
    category={hit.category}
    description={hit.excerpt}
    title={hit.title}
    date={hit.date}
    slug={hit.fields.slug}
    timeToRead={hit.timeToRead}
  />
);

HitComponent.propTypes = {
  hit: shape({
    category: string,
    excerpt: string,
    title: string,
    date: string,
    fields: shape({
      slug: string,
    }),
    timeToRead: number,
  }).isRequired,
};

export default HitComponent;
