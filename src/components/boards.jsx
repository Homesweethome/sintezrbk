import React from "react";

import data from '../data/boards.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class Boards extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default Boards;