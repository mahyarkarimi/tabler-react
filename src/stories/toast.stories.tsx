import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Toast, Avatar, ToastStack } from "../";

export default {
    title: "Components/Toast",
    component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
    header: <>
        <Avatar size="xs" style={{ marginInline: '2px' }}></Avatar>
        <strong className="me-auto">Mallory Hulme</strong>
        <small>11 mins ago</small>
    </>,
    onClose() {
        console.log('on close')
    },
    visible: true,
    children: <>Hello, world! This is a toast message.</>
}

export const Stack = () => {
    return (
        <ToastStack>
            <Toast header={<>
                <Avatar size="xs" style={{ marginInline: '2px' }}></Avatar>
                <strong className="me-auto">Mallory Hulme</strong>
                <small>11 mins ago</small>
            </>} visible>
                Hello, world! This is a toast message.
            </Toast>
            <Toast header={<>
                <Avatar size="xs" style={{ marginInline: '2px' }}></Avatar>
                <strong className="me-auto">Alice Hulme</strong>
                <small>11 mins ago</small>
            </>} visible>
                Hello, world! This is another toast message.
            </Toast>
            <Toast header={<>
                <Avatar size="xs" style={{ marginInline: '2px' }}></Avatar>
                <strong className="me-auto">Bob Hulme</strong>
                <small>11 mins ago</small>
            </>} visible>
                Hello, world! This is the third toast message.
            </Toast>
        </ToastStack>
    )
}