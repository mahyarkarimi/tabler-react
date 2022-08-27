import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../assets/avatar.png';

import { Tabs, Card } from "../";

export default {
    title: "Components/Tabs",
    component: Tabs
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;


export const Simple = Template.bind({});
Simple.args = { 
    tabs: [
        { id: 'tab-1', title: 'Tab 1', content: 'Lorem ipsum dolor ...'},
        { id: 'tab-2', title: 'Tab 2', content: 'Lorem ipsum dolor ...'},
        { id: 'tab-3', title: 'Tab 3', content: 'Lorem ipsum dolor ...'},
    ]
}

export const CustomContent = Template.bind({});
CustomContent.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
        { id: 'tab-2', title: 'Card 2', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
        { id: 'tab-3', title: 'Card 3', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
    ]
}

export const CardStyleContent = Template.bind({});
CardStyleContent.args = { 
    ...CustomContent.args,
    card: true,
}

export const CapitalTitle = Template.bind({});
CapitalTitle.args = { 
    ...CustomContent.args,
    card: true,
    allCaps: true,
}

export const RightAlignTab = Template.bind({});
RightAlignTab.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
        { id: 'tab-2', title: 'Card 2', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
        { id: 'tab-3', title: 'Card 3', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>, alignEnd: true},
    ],
    card: true,
    allCaps: true,
}

export const WithDropDown = Template.bind({});
WithDropDown.args = { 
    tabs: [
        { id: 'tab-1', title: 'Card 1', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
        { id: 'tab-2', title: 'Card 2', dropDown: ['Action 1', 'Action 2']},
        { id: 'tab-3', title: 'Card 3', content: <Card.Vertical header="Sample Card" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis sed suscipit velit vitae voluptatem.</Card.Vertical>},
    ],
    card: true,
    allCaps: true,
}