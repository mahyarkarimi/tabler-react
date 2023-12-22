import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { SwitchIcon, Flex } from "../";

export default {
    title: "Components/SwitchIcon",
    component: SwitchIcon
} as ComponentMeta<typeof SwitchIcon>;

const Template: ComponentStory<typeof SwitchIcon> = (args) => <SwitchIcon {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    iconA: <i className="ti ti-circle" />,
    iconB: <i className="ti ti-square" />,
    stateA: 'muted',
    stateB: 'cyan',
}

export const Animations = () => (
    <Flex spaceX={2}>
        <SwitchIcon iconA={<i className="ti ti-circle" />} iconB={<i className="ti ti-circle" />} stateA='muted' stateB='blue' anim='fade' />
        <SwitchIcon iconA={<i className="ti ti-heart" />} iconB={<i className="ti ti-heart icon-filled" />} stateA='muted' stateB='red' anim='flip' />
        <SwitchIcon iconA={<i className="ti ti-star" />} iconB={<i className="ti ti-star icon-filled" />} stateA='muted' stateB='yellow' anim='scale' />
        <SwitchIcon iconA={<i className="ti ti-thumb-up" />} iconB={<i className="ti ti-thumb-up" />} stateA='muted' stateB='blue' anim='slide-down' />
        <SwitchIcon iconA={<i className="ti ti-brand-twitter" />} iconB={<i className="ti ti-brand-twitter" />} stateA='muted' stateB='blue' anim='slide-left' />
        <SwitchIcon iconA={<i className="ti ti-check" />} iconB={<i className="ti ti-x" />} stateA='muted' stateB='muted' anim='slide-right' />
        <SwitchIcon iconA={<i className="ti ti-car" />} iconB={<i className="ti ti-scooter" />} stateA='muted' stateB='muted' anim='slide-right' />
    </Flex>
)