import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconBrandFacebook, IconBrandTwitter, IconBriefcase, IconCheck, IconUserPlus } from '@tabler/icons'
import { Timeline, Avatar, AvatarList, Card } from "../";

export default {
    title: "Components/Timeline",
    component: Timeline
} as ComponentMeta<typeof Timeline>;

const Template: ComponentStory<typeof Timeline> = (args) => <Timeline {...args} />;

const items = [
    {color: 'twitter', icon: <IconBrandTwitter />, title: '+1150 Followers', description: 'You’re getting more and more followers, keep it up!', time: '10 hrs ago'},
    {color: 'red', icon: <IconBriefcase /> , title: '+3 New Products were added!', description: 'Congratulations', time: '2 hrs ago'},
    {color: 'success', icon: <IconCheck /> , title: 'Database backup completed!', description: 'Download the <a href="#">latest backup</a>', time: '1 day ago'},
    {color: 'facebook', icon: <IconBrandFacebook /> , title: '+290 Page Likes', description: 'This is great, keep it up!', time: '1 day ago'},
    {color: 'teal', icon: <IconUserPlus /> , title: '+3 Friend Requests', description: <AvatarList><Avatar /><Avatar /></AvatarList>, time: '2 days ago'},
]

export const Default = () => {
    return (
        <Card header="Timeline">
            <Timeline items={items} />
        </Card>
    )
}

export const Simple = () => {
    return (
        <Card header="Simple Timeline">
            <Timeline items={items} simple />
        </Card>
    )
}