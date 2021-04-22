import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import YardsignTwo from '../Pictures/YardsignThree.jpg'
import YardsignThree from '../Pictures/YardsignTwo.jpg'
import YardsignFive from '../Pictures/YardsignFive.jpg'


const items = [
  {
    src: YardsignTwo,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header',
    key: '1'
  },
  {
    src: YardsignThree,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header',
    key: '2'
  },
  {
    src: YardsignFive,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header',
    key: '3'
  }
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;