import React, { Component } from 'react';
import FormButton from './../components/form/FormButton';
import TitlePage from '../components/layout/TitlePage';
import ModalConfirm2 from '../components/modal/ModalConfirm2';
import ConfirmModal from '../utils/confirm-modal';
class NewJobsPage extends Component {
    list = [];

    constructor(props) {
        super(props);
        this.confirmModal = new ConfirmModal();
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

    preGotoDetail(index) {
        this.confirmModal.show(123);
        console.log(index);

    }

    callbackDetail(data) {
        console.log(data);
    }

    render() {
        return (
            <>
                <TitlePage data={["New-Jobs"]}></TitlePage>
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Company</th>
                            <th scope="col">Address</th>
                            <th scope="col"></th>
                            <th scope="col" style={{ width: '10%' }}>Select</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.list.map((item, index) => {
                                let i = index;
                                return <tr key={index} onClick={() => { this.preGotoDetail(index) }}>
                                    <th scope="row">{index}</th>
                                    <td>Mark</td>
                                    <td>{item.name}</td>
                                    <td>Mark</td>
                                    <td>
                                        <div class="switch-button switch-button-success" onClick={(e) => { e.stopPropagation(); this.selectRow(index) }}>
                                            <input type="checkbox" disabled checked={item.checked} name="switch13" id="switch13" />
                                            <span><label for="switch13"></label></span>
                                        </div>
                                    </td>
                                </tr>;
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col" onClick={() => this.selectAll()}>Select All</th>
                        </tr>
                    </tfoot>
                </table>
                <ModalConfirm2 id="123" callback={() => { }}></ModalConfirm2>
            </>
        );
    }
}

export default NewJobsPage;