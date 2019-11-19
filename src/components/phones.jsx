import React from "react";

import data from '../data/phones.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Phones extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Phones;