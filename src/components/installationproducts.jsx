import React from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import data from '../data/installationproducts.json';

class InstallationProducts extends React.Component {
    render() {
        return <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell>Номер</TableCell>
                    <TableCell>Наименование</TableCell>
                    <TableCell>Тип</TableCell>
                    <TableCell>Изгот-ль</TableCell>
                    <TableCell>Ед.</TableCell>
                    <TableCell>Кол-во</TableCell>
                    <TableCell>Цена</TableCell>
                    <TableCell>Доп. информация</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map(row => (
                    <TableRow>
                        <TableCell>{row.a}</TableCell>
                        <TableCell><a href={"https://www.alldatasheet.com/view.jsp?Searchword=" + row.b}>{row.b}</a></TableCell>
                        <TableCell>{row.c}</TableCell>
                        <TableCell>{row.d}</TableCell>
                        <TableCell>{row.e}</TableCell>
                        <TableCell>{row.f}</TableCell>
                        <TableCell>{row.g}</TableCell>
                        <TableCell>{row.h}</TableCell>
                    </TableRow> 
                ))}
            </TableBody>
        </Table>
    }
}

export default InstallationProducts;