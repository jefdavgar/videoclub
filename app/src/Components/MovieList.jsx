import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';

function MovieList() {

    return (
        <div className="p-3 rounded">
            <Table responsive >
                <thead>
                    <tr>
                        <th>Movie</th>
                        <th>Year</th>
                        <th>Director</th>
                        <th>Genres</th>
                        <th>Lenguaje </th>
                        <th>Valoration</th>
                        <th>Movie Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vertigo</td>
                        <td>1958</td>
                        <td>idk</td>
                        <td>Drama</td>
                        <td>Englsih</td>
                        <td>5.6</td>
                        <td>128</td>
                        <td>
                            <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                            <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i className="material-icons">&#xE872;</i></a>
                        </td>
                    </tr>

                    {/* {
                        movieData.map(item => {
                            return (
                                <Movie item={item} key={item._id} />
                            )
                        })
                    } */}
                </tbody>
            </Table>
        </div>
    );
}

export default MovieList;