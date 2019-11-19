import React from "react";

import data from '../data/tdks.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Tdks extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Tdks;