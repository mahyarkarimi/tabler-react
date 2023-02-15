import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Status, StatusIndicator, ButtonList, StatusDot } from "../";

export default {
    title: "Components/Status",
    component: Status
} as ComponentMeta<typeof Status>;

const Template: ComponentStory<typeof Status> = (args) => <Status {...args} />;

export const Default = () => (
    <ButtonList>
        <Status color="blue" >blue</Status>
        <Status color="azure" >azure</Status>
        <Status color="red" >red</Status>
        <Status color="green" >green</Status>
        <Status color="lime" >lime</Status>
        <Status color="yellow" >yellow</Status>
    </ButtonList>
)

export const WithDot = () => (
    <ButtonList>
        <Status color="blue" withDot >blue</Status>
        <Status color="azure" withDot >azure</Status>
        <Status color="red" withDot>red</Status>
        <Status color="green" withDot>green</Status>
        <Status color="lime" withDot>lime</Status>
        <Status color="yellow" withDot>yellow</Status>
    </ButtonList>
)

export const AnimatedStatusDot = () => (
    <ButtonList>
        <Status color="blue" withDot animatedDot >blue</Status>
        <Status color="azure" withDot animatedDot >azure</Status>
        <Status color="red" withDot animatedDot>red</Status>
        <Status color="green" withDot animatedDot>green</Status>
        <Status color="lime" withDot animatedDot>lime</Status>
        <Status color="yellow" withDot animatedDot>yellow</Status>
    </ButtonList>
)

export const LiteStatus = () => (
    <ButtonList>
        <Status color="blue" withDot lite>blue</Status>
        <Status color="azure" withDot lite>azure</Status>
        <Status color="red" withDot lite>red</Status>
        <Status color="green" withDot lite>green</Status>
        <Status color="lime" withDot lite>lime</Status>
        <Status color="yellow" withDot lite>yellow</Status>
    </ButtonList>
)

export const Dots = () => {
    return (
        <ButtonList>
            <StatusDot color="blue" />
            <StatusDot color="azure" />
            <StatusDot color="red" />
            <StatusDot color="green" />
            <StatusDot color="lime" />
            <StatusDot color="yellow" />
        </ButtonList>
    );
}

export const AnimatedDots = () => {
    return (
        <ButtonList>
            <StatusDot color="blue" animatedDot />
            <StatusDot color="azure" animatedDot/>
            <StatusDot color="red" animatedDot/>
            <StatusDot color="green" animatedDot />
            <StatusDot color="lime" animatedDot/>
            <StatusDot color="yellow" animatedDot/>
        </ButtonList>
    );
}
export const Indicator = () => {
    return (
        <ButtonList>
            <StatusIndicator color="blue"  />
            <StatusIndicator color="azure" />
            <StatusIndicator color="red" />
            <StatusIndicator color="green"  />
            <StatusIndicator color="lime" />
            <StatusIndicator color="yellow" />
        </ButtonList>
    );
}