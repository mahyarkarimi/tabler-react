import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../assets/avatar.png';

import { Tooltip } from "../";

export default {
    title: "Components/Tooltip",
    component: Tooltip
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args) => <Tooltip {...args} />;

/**
 * @TODO needs correction for tooltip data toggle
 */
export const PositionTop = Template.bind({});
PositionTop.args = {
    placement: 'top',
    tooltip: 'Tooltip on top',
    children: 'Tooltip on Top'
}

export const WithHTML = Template.bind({});
WithHTML.args = {
    placement: 'top',
    tooltip: 'em>Tooltip</em> <u>with</u> <b>HTML</b>',
    children: 'Tooltip with HTML'
}

