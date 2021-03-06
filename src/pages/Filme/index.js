import React, { Component } from 'react'
import './filme.css'

export default class Filme extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filme: []
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`
    const reponse = await fetch(url)
    const f = await reponse.json()
    this.setState({ filme: f })
  }

  render() {
    return (
      <div className="filme-info">
        <h1>{this.state.filme.nome}</h1>
        <img src={this.state.filme.foto} />
        {this.state.filme.length !== 0 &&
          <h3>Sinopse</h3>
        }
        {this.state.filme.sinopse}
      </div>
    )
  }
}