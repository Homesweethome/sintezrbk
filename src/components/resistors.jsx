import React from "react";

import data from '../data/resistors.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Resistors extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Resistors;