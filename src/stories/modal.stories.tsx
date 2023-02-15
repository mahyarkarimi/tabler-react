import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, Modal, AlertModal, SuccessModal } from "../";

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

export const Alert = () => {
    const [show, toggle] = useState(false);
    return (
        <>
            <Button onClick={() => toggle(true)}>Open Modal</Button>
            <AlertModal onCancel={() => toggle(false)} show={show} cancelText="Cancel" okText="Delete 84 items" onClose={() => toggle(false)} title="Are you sure?" message="Do you really want to remove 84 files? What you\'ve done cannot be undone.">
            </AlertModal>
        </>
    )
}

export const Success = () => {
    const [show, toggle] = useState(false);
    return (
        <>
            <Button onClick={() => toggle(true)}>Open Modal</Button>
            <SuccessModal onCancel={() => toggle(false)} show={show} cancelText="Go to dashboard" okText="Delete 84 items" onClose={() => toggle(false)} title="Payment succedeed" message="Your payment of $290 has been successfully submitted. Your invoice has been sent to support@tabler.io.">
            </SuccessModal>
        </>
    )
}
