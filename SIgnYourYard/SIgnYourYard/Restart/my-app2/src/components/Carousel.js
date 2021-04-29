import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import YardsignTwo from '../Pictures/YardsignThree.jpg'
import YardsignThree from '../Pictures/YardsignTwo.jpg'
import YardsignFive from '../Pictures/YardsignFive.jpg'


const items = [
  {
    src: YardsignTwo,
    altText: 'Slide 1',
    caption: '',
    header: 'Birthdays!',
    key: '1'
  },
  {
    src: YardsignThree,
    altText: 'Slide 2',
    caption: '',
    header: 'Holidays!',
    key: '2'
  },
  {
    src: YardsignFive,
    altText: 'Slide 3',
    caption: '',
    header: 'Emojis!',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;