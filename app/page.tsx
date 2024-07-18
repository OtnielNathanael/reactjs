"use client"
import React from 'react';
import { Button, Card, CardText, Stack } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieCard from "./MovieCard";
import MovieForm from "./MovieForm";
import MovieSlide from "./MovieSlide";

export default function Home() {
  
  return (
    <div  className="container">
    <div className="row">
       <div className="col-md-6">
                  
                      <h1 style={{ fontSize: "24px", color: "blue" }}>Home Movie List</h1>
                      <h2 style={{ fontSize: "20px", color: "magenta" }}>Otniel Nathanael</h2>
                      <h3 style={{ fontSize: "16px", color: "green" }}>Kelas pemograman web malam</h3>
                     
                      <Stack direction="horizontal" gap={2}>
            <Button as="a" variant="primary">
              Hiasan 1
            </Button>
            <Button as="a" variant="success">
              Hiasan 2
            </Button>
          </Stack>
        </div>
      </div>

      <MovieForm />
      <MovieSlide />
      <MovieCard />
      </div>
  );
}