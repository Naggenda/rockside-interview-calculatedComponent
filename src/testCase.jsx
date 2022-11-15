import { FieldList, Inject, CalculatedField, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { pivotData } from './datasource';
class TestCase extends React.Component {
    constructor() {
        super(...arguments);
        this.dataSourceSettings = {
            dataSource: pivotData,
            expandAll: false,
            columns: [{ name: 'Year', caption: 'Production Year' }, { name: 'Quarter' }],
            rows: [{ name: 'Country' }, { name: 'Products' }],
            values: [{ name: 'Sold', caption: 'Units Sold' }, { name: 'Amount', caption: 'Sold Amount' }],
            filters: [],
            calculatedFieldSettings: [{ name: 'Total', formula: '"Sum(Amount)"+"Sum(Sold)"' }]
        };
    }
    render() {
        return <PivotViewComponent ref={d => this.pivotObj = d} id='PivotView' height={350} dataSourceSettings={this.dataSourceSettings} actionComplete={this.actionComplete.bind(this)} allowCalculatedField={true} showFieldList={true}><Inject services={[CalculatedField, FieldList]}/></PivotViewComponent>;
    }
    actionComplete(args) {
        if (args.actionName === 'Calculated field applied') {
            // Triggers when the calculated field is applied.
        }
    }
}

export default TestCase;