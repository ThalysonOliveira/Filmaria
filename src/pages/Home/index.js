import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }
    }

    async componentDidMount() {
        const url = 'https://sujeitoprogramador.com/r-api/?api=filmes/'
        const response = await fetch(url)
        const filme = await response.json()
        this.setState({ filmes: filme })
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id} className="filme">
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} alt="capa" />
                                <Link to={`/filme/${filme.id}`}>Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        )
    }
}