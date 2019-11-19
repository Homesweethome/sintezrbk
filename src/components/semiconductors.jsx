import React from "react";

import data from '../data/semiconductors.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Semiconductors extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Semiconductors;