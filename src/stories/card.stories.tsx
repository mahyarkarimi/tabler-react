import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../assets/avatar.png';

import { Card } from "../";

export default {
    title: "Components/Card",
    component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SimpleCard = Template.bind({});
SimpleCard.args = { 
    children: 'Burn her! How do you know she is a witch? You don\'t frighten us, English pig-dogs! Go and boil yo...',
}

export const WithHeaderCard = Template.bind({});
WithHeaderCard.args = { 
    children: 'Burn her! How do you know she is a witch? You don\'t frighten us, English pig-dogs! Go and boil yo...',
    header: 'Shut up!'
}

export const WithImageCard = Template.bind({});
WithImageCard.args = {
    ...WithHeaderCard.args,
    image
}


export const StackedCard = Template.bind({});
StackedCard.args = {
    ...WithHeaderCard.args,
    stacked: true,
}

export const WithStatusCard = Template.bind({});
WithStatusCard.args = {
    ...WithHeaderCard.args,
    statusColor: 'azure',
    statusPosition: 'top',
    imageAlign: 'left',
}



export const LeftImageWithHeaderCard = Template.bind({});
LeftImageWithHeaderCard.args = { 
    children: 'Burn her! How do you know she is a witch? You don\'t frighten us, English pig-dogs! Go and boil yo...',
    header: 'Shut up!',
    image,
    imageAlign: 'left',
}

export const LeftImageWithStatusCard = Template.bind({});
LeftImageWithStatusCard.args = { 
    children: 'Burn her! How do you know she is a witch? You don\'t frighten us, English pig-dogs! Go and boil yo...',
    header: 'Shut up!',
    image,
    statusColor: 'green',
    statusPosition: 'top',
    imageAlign: 'left',
}