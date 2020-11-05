import React, { Component } from 'react'


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
    this.setState({filme: f})
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}