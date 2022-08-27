import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { AlertModal } from "../";

export default {
    title: "Components/Modal",
    component: AlertModal
} as ComponentMeta<typeof AlertModal>;

const Template: ComponentStory<typeof AlertModal> = (args) => <AlertModal {...args} />;

export const SimpleAlert = Template.bind({});
SimpleAlert.args = {
    title: 'Are you sure?',
    message: 'Do you really want to remove 84 files? What you\'ve done cannot be undone.',
    cancelText: 'Cancel',
    okText: 'Delete 84 items',
}

