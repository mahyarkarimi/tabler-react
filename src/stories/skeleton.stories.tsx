import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import image from '../assets/avatar.png';

import { LineSkeleton, BoxSkeleton, SkeletonGlow, Card, Button, Avatar } from "../";

export default {
    title: "Components/Skeleton",
    component: LineSkeleton
} as ComponentMeta<typeof LineSkeleton>;

const Template: ComponentStory<typeof LineSkeleton> = (args) => <LineSkeleton {...args} />;

export const Line = () => {
    return (
        <div l>
            <LineSkeleton span={10} size="lg" />
            <LineSkeleton span={10} size="sm" />
            <LineSkeleton span={10} />
            <LineSkeleton span={8} wave />
            <LineSkeleton span={12} />
            <LineSkeleton span={7} />
            <LineSkeleton span={7} />
        </div>
    )
}

export const Color = () => {
    return (
        <div l>
            <LineSkeleton color="cyan" span={10} size="lg" />
            <LineSkeleton color="azure" span={10} />
            <LineSkeleton color="indigo" span={12} />
        </div>
    )
}

export const AvatarSimple = () => {
    return (
        <div style={{ display: 'flex', gap: '4px', alignItems: 'baseline' }}>
            <Avatar skeleton size='xs' />
            <Avatar skeleton size='sm' />
            <Avatar skeleton size='default' />
            <Avatar skeleton size='md' />
            <Avatar skeleton size='lg' />
            <Avatar skeleton size='xl' wave />
        </div>
    )
}

export const Box = () => {
    return (
        <div style={{ maxWidth: '200px' }} className="space-y">
            <BoxSkeleton ratio="1x1" />
            <BoxSkeleton ratio="3x4" />
            <BoxSkeleton ratio="9x16" wave />
        </div>
    )
}

export const Glow = () => {
    return (
        <SkeletonGlow>
            <Avatar skeleton size='default' />
            <span> </span>
            <LineSkeleton span={10} size="lg" />
            <LineSkeleton span={10} />
            <LineSkeleton span={12} wave />
        </SkeletonGlow>
    )
}

export const Examples = () => {
    return (
        <div className="space-y">
            <SkeletonGlow>
                <Card image={<BoxSkeleton ratio="21x9" />}>
                    <div class="card-body">
                        <LineSkeleton span={9} />
                        <LineSkeleton span={10} size="xs" />
                        <LineSkeleton span={11} size="xs" />
                        <div className="mt-3">
                            <Button skeleton disabled></Button>
                        </div>
                    </div>
                </Card>
            </SkeletonGlow>


            <SkeletonGlow>
                <Card imageAlign="left" image={<BoxSkeleton ratio="1x1" />}>
                    <LineSkeleton span={9} />
                    <LineSkeleton span={10} />
                    <LineSkeleton span={11} />
                </Card>
            </SkeletonGlow>

            <Card>
                <div className="row">
                    <div className="col-auto">
                        <Avatar shape='circle' skeleton />
                    </div>
                    <div className="col">
                        <LineSkeleton size="xs" span={9} />
                        <LineSkeleton size="xs" span={7} />
                    </div>
                </div>
            </Card>
            {/* 
            <div class="card">
                <div class="card-body py-5 text-center">
                    <div>
                        <div class="avatar avatar-rounded avatar-lg placeholder mb-3"></div>
                    </div>
                    <div class="mt w-75 mx-auto">
                        <div class="placeholder col-9 mb-3"></div>
                        <div class="placeholder placeholder-xs col-10"></div>
                    </div>
                </div>
            </div>
            <div class="card">
                <ul class="list-group list-group-flush placeholder-glow">
                    <li class="list-group-item">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="avatar avatar-rounded placeholder"></div>
                            </div>
                            <div class="col-7">
                                <div class="placeholder placeholder-xs col-9"></div>
                                <div class="placeholder placeholder-xs col-7"></div>
                            </div>
                            <div class="col-2 ms-auto text-end">
                                <div class="placeholder placeholder-xs col-8"></div>
                                <div class="placeholder placeholder-xs col-10"></div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="avatar avatar-rounded placeholder"></div>
                            </div>
                            <div class="col-7">
                                <div class="placeholder placeholder-xs col-9"></div>
                                <div class="placeholder placeholder-xs col-7"></div>
                            </div>
                            <div class="col-2 ms-auto text-end">
                                <div class="placeholder placeholder-xs col-8"></div>
                                <div class="placeholder placeholder-xs col-10"></div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="avatar avatar-rounded placeholder"></div>
                            </div>
                            <div class="col-7">
                                <div class="placeholder placeholder-xs col-9"></div>
                                <div class="placeholder placeholder-xs col-7"></div>
                            </div>
                            <div class="col-2 ms-auto text-end">
                                <div class="placeholder placeholder-xs col-8"></div>
                                <div class="placeholder placeholder-xs col-10"></div>
                            </div>
                        </div>
                    </li>
                    <li class="list-group-item">
                        <div class="row align-items-center">
                            <div class="col-auto">
                                <div class="avatar avatar-rounded placeholder"></div>
                            </div>
                            <div class="col-7">
                                <div class="placeholder placeholder-xs col-9"></div>
                                <div class="placeholder placeholder-xs col-7"></div>
                            </div>
                            <div class="col-2 ms-auto text-end">
                                <div class="placeholder placeholder-xs col-8"></div>
                                <div class="placeholder placeholder-xs col-10"></div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div> */}
        </div >
    )
}