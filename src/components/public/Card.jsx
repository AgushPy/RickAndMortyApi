import React from 'react'

export const Card = ({rickAndMorty}) => {
    return (
        <div className="col">
            <div className="card shadow-sm">
                <img width="100%"  src={rickAndMorty.image} alt="imagen" />

                <div className='card-title text-center pt-2'>
                <h3 className='mb-0 text-dark'>{rickAndMorty.name}</h3>
                </div>
                <div className="card-body">
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                        <small className="text-muted">9 mins</small>
                    </div>
                </div>
            </div>
        </div>
    )
}
