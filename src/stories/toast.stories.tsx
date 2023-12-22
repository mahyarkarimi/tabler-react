import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Avatar, useToast, Button, ToastProps } from "../";
import { LoremIpsum } from "lorem-ipsum";

const Toast = (props: ToastProps) => {
    const [toast, ToastContainer] = useToast();
    
    const triggerToast = () => {
        const lorem = new LoremIpsum();

        toast({
            children: <>
                <Avatar size="xs" style={{ marginInline: '2px' }}></Avatar>
                <strong className="me-auto">{lorem.generateSentences(1)}</strong>
                <small>11 mins ago</small>
            </>,
            header: lorem.generateWords(2),
            ...props
        })
    }
    return (
        <div style={{ height: '250px'}}>
            <Button onClick={triggerToast} style={{ margin: '8px' }}>Show Toast</Button>
            {ToastContainer}
        </div>
    )
}

export default {
    title: "Components/Toast",
    component: Toast
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => <Toast {...args} />;

export const Default = Template.bind({});
Default.args = {
    onClose() {
        console.log('on close')
    },
}

export const WithDuration = Template.bind({});
WithDuration.args = {
    onClose() {
        console.log('on close')
    },
    duration: 4,
}
