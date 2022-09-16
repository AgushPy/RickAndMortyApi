import React, { Component } from 'react'
import RickAndMortyService from '../../services/RickAndMorty.service';
import { Cards } from './Cards';

export default class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rickAndMorty : []
        };
    }

    componentDidMount() {
        
        // RickAndMortyService.getAllCharacters()
        //                         .then((data) =>this.setState({rickAndMorty: data.results}))
        //                         .catch((err) => console.log(err));
    
    }

    render() {
        return (
            <main>

                <section className="py-5 text-center container">
                    <div className="row py-lg-5">
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <h1 className="fw-light">Bienvenid@</h1>
                            <p className="lead text-muted">En este sitio encontraras la wiki del rick de la serie de Rick & Morty, datos curisos y información sobre los personajes adentrare y conoce más del multiverso</p>
                            <p className='btn-group'>
                                <a href="/user-form" className="btn btn-primary my-2">Quiero ver</a>
                                <a href="#" className="btn btn-secondary my-2">Donde puedo ver</a>
                            </p>
                        </div>
                    </div>
                </section>

                <Cards  />

            </main>
        )
    }
}
