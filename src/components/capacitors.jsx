import React from "react";

import data from '../data/capacitors.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Capacitors extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Capacitors;