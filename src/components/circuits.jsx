import React from "react";

import data from '../data/circuits.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Circuits extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Circuits;