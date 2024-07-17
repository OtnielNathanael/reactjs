"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button, ButtonGroup, ButtonToolbar } from "react-bootstrap";

const MovieCard = () => {
    const [movieData, setmovieData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/movie');
                setmovieData(response.data);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    function setDelete(id: number) {
        try {
            axios.delete('http://localhost:5000/api/movies/' + id);
            window.location.reload(true);
        } catch (error) {
            console.error('Error delete data: ', error);
        }
    }

    return (
        <>
            {movieData && (
                <div className='row'>
                    {movieData.data.map((movie, index) => (
                        <Card key={index} className="col-md-4 p-2 px-2 shadow-xl justify-content-between object-cover">
                            <Card.Img variant="top" src={movie.foto} alt="Card image cap" />
                            <Card.Body className="bg-dark text-white">
                                <Card.Title className="font-bold text-xl">{movie.judul}</Card.Title>
                                <Card.Text>Rating: {movie.rating}</Card.Text>
                                <ButtonToolbar className="justify-content-between">
                                    <ButtonGroup aria-label="First group">
                                        <Button variant="primary">View Detail</Button>
                                    </ButtonGroup>
                                    <ButtonGroup aria-label="Second group">
                                        <Button variant="danger" onClick={() => setDelete(movie.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                            </svg>
                                        </Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};
export default MovieCard