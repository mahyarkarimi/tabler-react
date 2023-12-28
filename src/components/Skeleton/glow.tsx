import React, { PropsWithChildren } from "react";

const SkeletonGlow = ({ children }: PropsWithChildren) => (
    <div className="placeholder-glow">{children}</div>
)
export default SkeletonGlow;
