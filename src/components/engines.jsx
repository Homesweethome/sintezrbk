import React from "react";

import data from '../data/engines.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Engines extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Engines;