import Table from 'react-bootstrap/Table';

function BasicExample(props) {

    let data = props.data;

    const DataRender = data.map((info, index) => {

        return (
            <tr key={index}>
                <td>{info.Customer_id}</td>
                <td>{info.Date_of_Purchase}</td>
                <td>{info.Policy_id}</td>
                <td>{info.Fuel}</td>
                <td>{info.VEHICLE_SEGMENT}</td>
                <td>{info.Premium}</td>
                <td>{info.bodily_injury_liability}</td>
                <td>{info.personal_injury_protection}</td>
                <td>{info.property_damage_liability}</td>
                <td>{info.collision}</td>
                <td>{info.comprehensive}</td>
                <td>{info.Customer_Gender}</td>
                <td>{info.Customer_Income_group}</td>
                <td>{info.Customer_Region}</td>
                <td>{info.Customer_Marital_status}</td>
            </tr>
        )

    });

    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>Policy ID</th>
                    <th>DOP</th>
                    <th>CID</th>
                    <th>Fuel</th>
                    <th>VS</th>
                    <th>Premium</th>
                    <th>BIL</th>
                    <th>PIP</th>
                    <th>PDL</th>
                    <th>Collision</th>
                    <th>Comprehensive</th>
                    <th>CG</th>
                    <th>CIG</th>
                    <th>CR</th>
                    <th>CMS</th>
                </tr>
            </thead>
            <tbody>

                {DataRender}

            </tbody>
        </Table>
    );
}

export default BasicExample;