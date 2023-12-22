import React from "react"
import { PropsWithChildren } from "react"

const Page = ({ children }: PropsWithChildren) => {
    return (
        <div className="page">
            <div className="page-wrapper">
                <div className="page-body">{children}</div>
            </div>
        </div>
    )
}

export default Page;