import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import image from '../assets/avatar.png';
import { IconUser } from '@tabler/icons';

import { AvatarProps, AvatarList, Avatar } from "../";

export default {
    title: "Components/AvatarList",
    component: AvatarList
} as Meta;

const Template: Story<AvatarProps> = (args) => <AvatarList {...args} />;

export const Default = Template.bind({});
Default.args = { avatars: [0,1,2,3].map((i) => <Avatar image={image}>{i}</Avatar>) }

export const Stacked = Template.bind({});
Stacked.args = { stacked: true, avatars: [0,1,2,3].map((i) => <Avatar image={image}>{i}</Avatar>) }