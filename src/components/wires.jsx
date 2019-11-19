import React from "react";

import data from '../data/wires.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Wires extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Wires;