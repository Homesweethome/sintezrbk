import React from "react";

import data from '../data/lamps.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Lamps extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Lamps;