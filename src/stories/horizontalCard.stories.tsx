import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../assets/avatar.png';

import { Card } from "../";

export default {
    title: "Components/Horizontal Card",
    component: Card.Horizontal
} as ComponentMeta<typeof Card.Horizontal>;

const Template: ComponentStory<typeof Card.Horizontal> = (args) => <Card.Horizontal {...args} />;
