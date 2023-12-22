import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../";

export default {
    title: "Components/Button",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'Default' }

export const Variations = Template.bind({});
Variations.args = { children: 'Variations', mode: 'primary' }

export const Disabled = Template.bind({});
Disabled.args = { children: 'Disabled', disabled: true, mode: 'secondary' }

export const Colors = Template.bind({});
Colors.args = { children: 'Colors', color: 'red', light: false }

export const Square = Template.bind({}); 
Square.args = { children: 'Square', square: true }

export const Pill = Template.bind({});
Pill.args = { children: 'Pill', pill: true }

export const Size = Template.bind({});
Size.args = { children: 'Size', size: 'large' }

export const Outline = Template.bind({});
Outline.args = { children: 'Outline', outline: true, mode:'primary' }

export const WithIcon = Template.bind({});
WithIcon.args = { children:  <i className="ti ti-user" />, }

export const DropDown = Template.bind({});
DropDown.args = { children: 'DropDown', dropDown: true }

export const Loading = Template.bind({});
Loading.args = { children: 'Loading', loading: true }

export const Spinner = Template.bind({});
Spinner.args = { children: 'Spinner', spinner: true }

