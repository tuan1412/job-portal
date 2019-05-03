import React, { Component } from 'react'

export default class ListCV extends Component {
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className="w-10">#</th>
                        <th scope="col" className="w-60">Tên CV</th>
                        <th scope="col" className="w-30">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row" className="w-10">1</th>
                        <td className="w-60">Mark</td>
                        <td className="w-30">
                            <button type="button" class="btn btn-info mr-2">
                                <i class="fa fa-search" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="btn btn-warning mr-2">
                                <i class="fa fa-pencil" aria-hidden="true"></i>
                            </button>
                            <button type="button" class="btn btn-danger mr-2">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table >
        )
    }
}
