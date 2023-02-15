import React from 'react'

function Movie({ item }) {
    return (
        <tr>
            <td>{item.title}</td>
            <td>{item.year}</td>
            <td>{item.director}</td>
            <td>{item.genres}</td>
            <td>{item.lenguaje}</td>
            <td>{item.valoration}</td>
            <td>{item.movietime}</td>
            <td>
                <a href="#" className="edit" title="Edit" data-toggle="tooltip"><i className="material-icons">&#xE254;</i></a>
                <a href="#" className="delete" title="Delete" data-toggle="tooltip" style={{ color: "red" }}><i className="material-icons">&#xE872;</i></a>
            </td>
        </tr>
    )
}

export default Movie
