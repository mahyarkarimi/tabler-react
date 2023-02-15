import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconPlus, IconMessage, IconBuildingSkyscraper, IconUsers, IconCheck, } from '@tabler/icons-react'
import { Avatar, Breadcrumb, BreadcrumbItem, PageHeader, Button, ButtonList } from "../";
import avatarJpg from '../assets/avatar.png';

export default {
    title: "Components/PageHeader",
    component: PageHeader
} as ComponentMeta<typeof PageHeader>;

const Template: ComponentStory<typeof PageHeader> = (args) => <PageHeader {...args} />;

export const Simple = Template.bind({});
Simple.args = {
    preTitle: 'Overview',
    title: 'Dashboard',
    action: <ButtonList>
        <Button mode="secondary">New view</Button>
        <Button mode="primary"><IconPlus /> Create new report</Button>
    </ButtonList>
}

export const WithAvatarAndMeta = Template.bind({});
WithAvatarAndMeta.args = {
    avatar: <Avatar image={avatarJpg} size='md' />,
    title: 'Paweł Kuna',
    subTitle: <div className="row">
        <div className="col-auto">
            <IconBuildingSkyscraper />
            <a href="#" className="text-reset">UI Designer at Tabler</a>
        </div>
        <div className="col-auto">
            <IconUsers />
            <a href="#" className="text-reset">194 friends</a>
        </div>
        <div className="col-auto text-success">
            <IconCheck />
            Verified
        </div>
    </div>,
    action: <ButtonList>
        <Button mode="primary"><IconMessage /> Send Message</Button>
    </ButtonList>
}

export const WithSearchAndBorder = Template.bind({});
WithSearchAndBorder.args = {
    title: 'Gallery',
    subTitle: '1-12 of 241 photos',
    bordered: true,
    action: <div className="d-flex">
        <div className="me-3 d-none d-md-block">
            <div className="input-icon">
                <input type="text" className="form-control" placeholder="Search…" />
                    <span className="input-icon-addon">
                        <IconPlus />
                    </span>
            </div>
        </div>
        <a href="#" className="btn btn-primary">
            <IconPlus />
            Add photo
        </a>
    </div>
}


export const WithBreadcrumb = Template.bind({});
WithBreadcrumb.args = {
    preTitle: <Breadcrumb divider="default">
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Library</BreadcrumbItem>
        <BreadcrumbItem active>Articles</BreadcrumbItem>
    </Breadcrumb>,
    title: 'Knights of Ni, we are but simple travelers who seek the enchanter who lives beyond these woods.',
    action: <ButtonList>
        <Button ghost outline>Edit</Button>
        <Button mode="primary">Publish</Button>
    </ButtonList>
}
