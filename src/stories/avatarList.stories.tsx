import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import image from '../assets/avatar.png';
import { IconUser } from '@tabler/icons';

import { AvatarList, Avatar } from "../";

export default {
    title: "Components/AvatarList",
    component: AvatarList
} as ComponentMeta<typeof AvatarList>;

const Template: ComponentStory<typeof AvatarList> = (args) => <AvatarList {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: <>
        {[0, 1, 2, 3].map((i) => <Avatar image={image}>{i}</Avatar>)}
    </>
}

export const Stacked = Template.bind({});
Stacked.args = {
    stacked: true,
    children: <>
        {[0, 1, 2, 3].map((i) => <Avatar image={image}>{i}</Avatar>)}
    </>
}