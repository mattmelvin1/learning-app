import React from "react";
import {BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

const data = [
    {
        id: '1',
        firstname: 'Layla',
        lastname: 'Grundy'
    }, {
        id: '2',
        firstname: 'Vicki',
        lastname: 'Melvin'
    }, {
        id: '3',
        firstname: 'Abby',
        lastname: 'Ingwersen'
    }
];


var selectRowProp = {
    mode: "checkbox",
    clickToSelect: true,
    bgColor: "rgb(238, 193, 213)"
};

export default class Students extends React.Component {

    render() {
        return (
            <BootstrapTable
                exportCSV={true}
                data={data}
                selectRow={selectRowProp}
                striped
                hover
                condensed
                pagination
                insertRow
                deleteRow
                search>
                <TableHeaderColumn dataField='id' isKey>Student ID</TableHeaderColumn>
                <TableHeaderColumn dataField='firstname'>First Name</TableHeaderColumn>
                <TableHeaderColumn dataField='lastname'>Last Name</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}