import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, Modal } from "../";

export default {
    title: "Components/Modal",
    component: Modal
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const SimpleModal = () => {
    const [show, toggle] = useState(false);
    return (
        <>
            <Button onClick={() => toggle(!show)}>Open Modal</Button>
            <Modal show={show} onClose={() => toggle(false)} title="Modal Title">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
            </Modal>
        </>
    )
}

export const Footer = () => {
    const [show, toggle] = useState(false);
    return (
        <>
            <Button onClick={() => toggle(!show)}>Open Modal</Button>
            <Modal
                show={show}
                onClose={() => toggle(false)} title="Modal Title"
                footer={<>
                    <Button outline>Close</Button>
                    <Button mode="primary">Save changes</Button>
                </>}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
            </Modal>
        </>
    )
}

export const Size = () => {
    const [show, toggle] = useState(false);
    return (
        <>
            <Button onClick={() => toggle(!show)}>Open Modal</Button>
            <Modal
                show={show}
                onClose={() => toggle(false)} title="Modal Title"
                size="lg"
                footer={<>
                    <Button outline>Close</Button>
                    <Button mode="primary">Save changes</Button>
                </>}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi beatae delectus deleniti dolorem eveniet facere fuga iste nemo nesciunt nihil odio perspiciatis, quia quis reprehenderit sit tempora totam unde.
            </Modal>
        </>
    )
}