import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import { Badges, BadgesProps } from "../";

export default {
    title: "Components/Badges",
    component: Badges
} as Meta;

const Template: Story<BadgesProps> = (args) => <Badges {...args} />;

export const Default = Template.bind({});
Default.args = { children: 'badge' }

export const Pill = Template.bind({});
Pill.args = { mode: 'pill', children: 'badge' }

export const Outlined = Template.bind({});
Outlined.args = { mode: 'outline', children: 'badge', textColor: 'purple' }

export const Colored = Template.bind({});
Colored.args = { color: 'cyan', children: 'badge' }

export const TextColored = Template.bind({});
TextColored.args = { textColor: 'teal', mode: 'outline', children: 'badge' }