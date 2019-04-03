import React, { Component } from 'react';
import FormButton from './../components/form/FormButton';
import TitlePage from '../components/layout/TitlePage';
class NewJobsPage extends Component {
    list = [];

    constructor(props) {
        super(props);
        this.state = {};
        this.list.push({
            name: "a" + this.list.length,
            checked: false
        });
        this.list.push({
            name: "a" + this.list.length,
            checked: false
        });
        this.list.push({
            name: "a" + this.list.length,
            checked: false
        });
        this.list.push({
            name: "a" + this.list.length,
            checked: false
        });
        this.list.push({
            name: "a" + this.list.length,
            checked: false
        });
        this.list.push({
            name: "a" + this.list.length,
            checked: false
        });
        this.change = this.change.bind(this);
        this.selectRow = this.selectRow.bind(this);
    }

    change(event) {
        console.log(event.target.checked);
    }

    selectRow(row) {
        this.list[row].checked = !this.list[row].checked;
        console.log('row', row);
        this.forceUpdate();
    }

    selectAll() {
        let typeAll; // if exist a row haven't selected, typyAll = true
        if (this.checkTypeAll()) {
            typeAll = true;
        } else {
            typeAll = false;
        }

        for (let i = 0; i < this.list.length; i++) {
            this.list[i].checked = typeAll;
        }
        console.log('done', this.checkTypeAll());
        this.forceUpdate();
    }

    checkTypeAll() {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].checked == false) {
                return true;
            }
        }
        return false;
    }

    callbackDetail(data) {
        console.log(data);
    }

    render() {
        return (
            <>
                <TitlePage data={["New-Jobs"]}></TitlePage>
                <form><div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputCity">City</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip" />
                    </div>
                </div></form>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Company</th>
                            <th scope="col">Address</th>
                            <th scope="col">Select</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.list.map((item, index) => {
                                let i = index;
                                return <tr key={index} >
                                    <th scope="row">{index}</th>
                                    <td>Mark</td>
                                    <td>{item.name}</td>
                                    <td>
                                        <div class="switch-button switch-button-success" onClick={() => { this.selectRow(index) }}>
                                            <input type="checkbox" disabled checked={item.checked} name="switch13" id="switch13" />
                                            <span><label for="switch13"></label></span>
                                        </div>
                                    </td>
                                    <td> <FormButton callback={this.callbackDetail} type="info" confirm="true" title={"Go to detail: " + item.name} content="sure?" name="Detail"></FormButton> </td>
                                    <td> <FormButton callback={this.callbackIgnore} type="danger" confirm="true" title={"Delete: " + index} content="sure?" name="Ignore"></FormButton> </td>
                                </tr>;
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" onClick={() => this.selectAll()}>Select All</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </tfoot>
                </table>
            </>
        );
    }
}

export default NewJobsPage;