import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Steps } from "../";

export default {
    title: "Components/Steps",
    component: Steps
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const Default = Template.bind({});
Default.args = {
    defaultActiveStep: 2,
    steps: [
        {label: 'Step 1'},
        {label: 'Step 2'},
        {label: 'Step 3'},
        {label: 'Step 4'},
    ]
}

export const WithColor = Template.bind({});
WithColor.args = {
    defaultActiveStep: 2,
    color: 'orange',
    steps: [
        {label: 'Step 1'},
        {label: 'Step 2'},
        {label: 'Step 3'},
        {label: 'Step 4'},
    ]
}

/**
 * @TODO tooltips not working as expected
 */
export const Tooltips = Template.bind({});
Tooltips.args = {
    defaultActiveStep: 2,
    steps: [
        {label: 'Step 1', tooltip: 'Step 1 tooltip'},
        {label: 'Step 2', tooltip: 'Step 2 tooltip'},
        {label: 'Step 3', tooltip: 'Step 3 tooltip'},
        {label: 'Step 4', tooltip: 'Step 4 tooltip'},
    ]
}

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
    defaultActiveStep: 2,
    color: 'orange',
    steps: [
        {label: ''},
        {label: ''},
        {label: ''},
        {label: ''},
    ]
}

export const WithNumbers = Template.bind({});
WithNumbers.args = {
    defaultActiveStep: 2,
    color: 'orange',
    withNumber: true,
    steps: [
        {label: ''},
        {label: ''},
        {label: ''},
        {label: ''},
    ]
}
