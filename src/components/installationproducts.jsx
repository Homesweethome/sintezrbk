import React from "react";

import data from '../data/installationproducts.json';
import 'react-virtualized/styles.css';
import BaseTable from "./basetable";

class InstallationProducts extends React.Component {
    render() {
        return <BaseTable data={data}/>}
}

export default InstallationProducts;