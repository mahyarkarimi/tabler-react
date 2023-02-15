import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Slider } from "../";

export default {
    title: "Components/Slider",
    component: Slider
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    min: 0,
    max: 100,
    defaultValue: 38
}
