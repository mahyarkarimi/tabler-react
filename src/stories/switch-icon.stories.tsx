import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconCircle, IconSquare, IconHeart, IconStar, IconThumbUp, IconBrandTwitter, IconCheck, IconX, IconCar, IconScooter } from '@tabler/icons';
import { SwitchIcon, Flex } from "../";

export default {
    title: "Components/SwitchIcon",
    component: SwitchIcon
} as ComponentMeta<typeof SwitchIcon>;

const Template: ComponentStory<typeof SwitchIcon> = (args) => <SwitchIcon {...args} />;

export const Heart = Template.bind({});
Heart.args = {
    iconA: <IconCircle />,
    iconB: <IconSquare />,
    stateA: 'muted',
    stateB: 'cyan',
}

export const Animations = () => (
    <Flex spaceX={2}>
        <SwitchIcon iconA={<IconCircle />} iconB={<IconCircle />} stateA='muted' stateB='blue' anim='fade' />
        <SwitchIcon iconA={<IconHeart />} iconB={<IconHeart className="icon-filled" />} stateA='muted' stateB='red' anim='flip' />
        <SwitchIcon iconA={<IconStar />} iconB={<IconStar className="icon-filled" />} stateA='muted' stateB='yellow' anim='scale' />
        <SwitchIcon iconA={<IconThumbUp />} iconB={<IconThumbUp />} stateA='muted' stateB='blue' anim='slide-down' />
        <SwitchIcon iconA={<IconBrandTwitter />} iconB={<IconBrandTwitter />} stateA='muted' stateB='blue' anim='slide-left' />
        <SwitchIcon iconA={<IconCheck />} iconB={<IconX />} stateA='muted' stateB='muted' anim='slide-right' />
        <SwitchIcon iconA={<IconCar />} iconB={<IconScooter />} stateA='muted' stateB='muted' anim='slide-right' />
    </Flex>
)