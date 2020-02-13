import React from 'react'

export default class Country extends React.Component {
  render () {
    const capitals = {
      spain: 'Madrid',
      germany: 'Berlin'
    }

    console.log(
      'this.props test:', this.props
    )

    const country = this.props.match.params.xyz


    const capital = capitals[country]
    console.log('capital test:', capital)

    return <div>
      {capital} is the capital of {country}
    </div>
  }
}
