import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Img1 from './assets/c1.jpg'
import Img2 from './assets/c2.jpg'
import Img3 from './assets/c3.jpg'
import Img4 from './assets/c4.jpg'
import Img5 from './assets/c5.jpg'
import { Carousel } from "../";

export default {
    title: "Components/Carousel",
    component: Carousel
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    items: [
        { src: Img1, },
        { src: Img2, },
        { src: Img3, },
        { src: Img4, },
        { src: Img5, },
    ]
};

export const Dots = Template.bind({});
Dots.args = {
    ...Simple.args,
    indicator: 'dot',
}


export const Thumb = Template.bind({});
Thumb.args = {
    ...Simple.args,
    indicator: 'thumb',
}

export const Fade = Template.bind({});
Fade.args = {
    ...Simple.args,
    anim: 'fade',
}

export const VerticalIndicator = Template.bind({});
VerticalIndicator.args = {
    ...Simple.args,
    indicatorPosition: 'end',
}

export const WithCaption = Template.bind({});
WithCaption.args = {
    items: [
        { src: Img1, caption: { title: 'Caption', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' } },
        { src: Img2, caption: { title: 'Caption', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }},
        { src: Img3, caption: { title: 'Caption', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }},
        { src: Img4, caption: { title: 'Caption', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }},
        { src: Img5, caption: { title: 'Caption', subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' }},
    ]
}