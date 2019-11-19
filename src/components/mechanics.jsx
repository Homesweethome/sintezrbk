import React from "react";

import data from '../data/mechanics.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Mechanics extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Mechanics;