import React from "react";
import {Column, Table, AutoSizer, SortDirection } from "react-virtualized";

import { orderBy } from "natural-orderby";

import 'react-virtualized/styles.css';

class BaseTable extends React.Component {
    data;

    constructor(props, context){
        super(props, context);

        this.data = props.data;

        const sortBy = 'a';
        const sortDirection = SortDirection.ASC;
        const sortedList = this._sortList({sortBy, sortDirection});

        this.state = {
            sortBy,
            sortDirection,
            sortedList
        }

        this._sort = this._sort.bind(this);
    }

    render() {
        return <AutoSizer disableHeight>
            {({width}) => (
                <Table 
                headerHeight={20}
                rowHeight={30}
                height={800}
                width={width}
                rowCount={this.state.sortedList.length}
                sort={this._sort}
                sortBy={this.state.sortBy}
                sortDirection={this.state.sortDirection}                
                rowGetter={({index}) => this.state.sortedList[index]}>
                    <Column width={128} label="Номер" dataKey="a" />    
                    <Column width={150} 
                        label="Наименование" 
                        dataKey="b" 
                        cellRenderer={({cellData}) => <a 
                            href={"https://www.alldatasheet.com/view.jsp?Searchword=" + cellData}>{cellData}</a>}
                    />  
                    <Column width={128} label="Тип" dataKey="c" />  
                    <Column width={128} label="Изгот-ль" dataKey="d" />  
                    <Column width={128} label="Ед." dataKey="e" />  
                    <Column width={128} label="Кол-во" dataKey="f" />  
                    <Column width={128} label="Цена" dataKey="g" />  
                    <Column width={300} label="Доп. инф." dataKey="h" />                
                </Table>    
            )}
            </AutoSizer>        
    }

    _sort({sortBy, sortDirection}) {
        const sortedList = this._sortList({sortBy, sortDirection});
    
        this.setState({sortBy, sortDirection, sortedList});
    }
    
    _sortList({sortBy, sortDirection}) {           
            return orderBy(this.data, sortBy, sortDirection === SortDirection.ASC ? "asc" : "desc");
    }          
}

export default BaseTable;