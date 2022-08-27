import React from "react";
import {  ComponentMeta, ComponentStory } from "@storybook/react";

import image from '../assets/avatar.png';
import { IconUser } from '@tabler/icons';

import { Avatar } from "../";

export default {
    title: "Components/Avatar",
    component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'MK' }

export const Medium = Template.bind({});
Medium.args = { children: 'MK', size: 'md' }

export const Large = Template.bind({});
Large.args = { children: 'MK', size: 'lg' }

export const Image = Template.bind({});
Image.args = { image: image }

export const WithBadge = Template.bind({});
WithBadge.args = { image: image, status: {indicator: 'danger'} }

export const Icon = Template.bind({});
Icon.args = { children: IconUser }

export const ColoredIcon = Template.bind({});
ColoredIcon.args = { children: IconUser, color: 'bg-red' }

export const LightColoredIcon = Template.bind({});
LightColoredIcon.args = { children: IconUser, color: 'bg-green-lt' }

export const Rounded = Template.bind({});
Rounded.args = { children: IconUser, shape: 'circle', color: 'bg-lime' }
