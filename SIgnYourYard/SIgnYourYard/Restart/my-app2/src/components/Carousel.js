import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import YardsignTwo from '../Pictures/YardsignThree.jpg'
import YardsignThree from '../Pictures/YardsignTwo.jpg'
import YardsignFive from '../Pictures/YardsignFive.jpg'
import YardsignSix from '../Pictures/YardsignSix.jpg'

const items = [
  {
    src: YardsignTwo,
    altText: '',
    caption: '',
    header: '',
    key: '1'
  },
  {
    src: YardsignThree,
    altText: '',
    caption: '',
    header: '',
    key: '2'
  },
  {
    src: YardsignFive,
    altText: '',
    caption: '',
    header: '',
    key: '3'
  },
  {
    src: YardsignSix,
    altText: '',
    caption: '',
    header: '',
    key: '4'
  },
];

const Example = () => <UncontrolledCarousel items={items} />;

export default Example;