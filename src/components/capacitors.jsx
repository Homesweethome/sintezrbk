import React from "react";
import {Column, Table, AutoSizer } from "react-virtualized";

import data from '../data/capacitors.json';
import 'react-virtualized/styles.css';

class Capacitors extends React.Component {
    render() {
        return <AutoSizer disableHeight>
            {({width}) => (
                <Table 
                headerHeight={20}
                rowHeight={30}
                height={800}
                width={width}
                rowCount={data.length}
                rowGetter={({index}) => data[index]}>
                    <Column width={128} label="Номер" dataKey="a" />    
                    <Column width={128} label="Наименование" dataKey="b" />  
                    <Column width={128} label="Тип" dataKey="c" />  
                    <Column width={128} label="Изгот-ль" dataKey="d" />  
                    <Column width={128} label="Ед." dataKey="e" />  
                    <Column width={128} label="Кол-во" dataKey="f" />  
                    <Column width={128} label="Цена" dataKey="g" />  
                    <Column width={128} label="Доп. информация" dataKey="h" />                
                </Table>    
            )}
            </AutoSizer>        
    }
}


export default Capacitors;