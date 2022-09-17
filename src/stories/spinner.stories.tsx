import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Spinner } from "../";

export default {
    title: "Components/Spinner",
    component: Spinner
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Border = Template.bind({});
Border.args = { type: 'border' }

export const Color = Template.bind({});
Color.args = { color: 'azure', type: 'border' }

export const Size = Template.bind({});
Size.args = { size: 'sm', type: 'border' }

export const Grow = Template.bind({});
Grow.args = { type: 'grow', }

export const GrowWithColor = Template.bind({});
GrowWithColor.args = { type: 'grow', color: 'lime' }

export const Dots = Template.bind({});
Dots.args = { type: 'dots', }
