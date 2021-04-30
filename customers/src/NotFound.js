import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
export default class NotFound extends Component {
    render() {
        return (
            <div>
                <Breadcrumb>
                    <BreadcrumbItem active>Not Found</BreadcrumbItem>
                </Breadcrumb>

            </div>
        )
    }
}
