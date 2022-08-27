import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { SuccessModal } from "../";

export default {
    title: "Components/Modal",
    component: SuccessModal
} as ComponentMeta<typeof SuccessModal>;

const Template: ComponentStory<typeof SuccessModal> = (args) => <SuccessModal {...args} />;

export const SimpleSuccess = Template.bind({});
SimpleSuccess.args = {
    title: 'Payment succedeed',
    message: 'Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.',
    cancelText: 'Go to dashboard',
    okText: 'View invoice',
}

