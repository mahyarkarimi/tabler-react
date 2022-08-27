import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { ButtonList, Button } from "../";

export default {
    title: "Components/ButtonList",
    component: ButtonList
} as ComponentMeta<typeof ButtonList>;

const Template: ComponentStory<typeof ButtonList> = (args) => <ButtonList {...args} />;

export const SimlpleButtonList = Template.bind({});
SimlpleButtonList.args = { children: ['Send', 'Stop', 'Reset'].map(b => <Button type="button">{b}</Button>) }