import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Divider } from "../";

export default {
    title: "Components/Divider",
    component: Divider
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => <Divider {...args} />;

export const Simple = Template.bind({});
Simple.args = { children: 'SEE ALSO' }


export const Postion = Template.bind({});
Postion.args = { children: 'SEE ALSO', position: 'left' }

export const Color = Template.bind({});
Color.args = { children: 'SEE ALSO', position: 'left', color: 'orange' }

