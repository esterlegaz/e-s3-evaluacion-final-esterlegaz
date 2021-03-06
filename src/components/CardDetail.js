import React, { Component } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

class CardDetail extends Component {
    getLife(isAlive) {
        if (isAlive === true) {
            return 'Vivo'
        }
        else {
            return (
                <React.Fragment>
                    <span>Muerto </span><i className="fas fa-skull-crossbones"></i>
                </React.Fragment>
            )
        }
    }

    getHouse(house) {
        if (house === 'Gryffindor') {
            return 'gryffindor'
        }
        else if (house === 'Slytherin'){
            return 'slytherin'
        }
        else if (house === 'Ravenclaw'){
            return 'ravenclaw'
        }
        else if (house === 'Hufflepuff'){
            return 'hufflepuff'
        }
        else {
            return ''
        }
    }

    noPatronus(patronus){
        if (patronus === ''){
            return 'Sin patronus'
        }
        else {
            return patronus
        }
    }

    noHouse (house){
        if (house === ''){
            return 'Sin casa'
        }
        else {
            return house
        }
    }

    noBirth (birth){
        if (birth === ''){
            return 'Sin datos'
        }
        else {
            return birth
        }
    }

    render() {
        const CharacterId = this.props.match.params.id;
        if (this.props.character.length > 0 && CharacterId < this.props.character.length) {
            const character = this.props.character[CharacterId];
            return (
                <React.Fragment>
                <div className="card__container">
                <div className="card__detail">
                    <img className="detail__img" src={character.image} alt={character.name} />
                    <div className="detail__content">
                        <h2 className="detail__name">{character.name}</h2>
                        <p className="detail__house">Casa: {this.noHouse(character.house)}</p>
                        <p className="detail__year">Nacimiento: {this.noBirth(character.yearOfBirth)}</p>
                        <p className="detail__patronus">Patronus: {this.noPatronus(character.patronus)}</p>
                        <p className="detail__alive">Estado: {this.getLife(character.alive)}</p>
                        <div className={`${this.getHouse(character.house)}`}></div>
                    </div>
                </div>
                </div>
                <Link to="/" className="detail__return">Volver</Link>
                </React.Fragment>
            );

        } else {
            return (
                <React.Fragment>
                    <p>No hay datos disponibles</p>
                    <Link to="/">Volver</Link>
                </React.Fragment>
            );
        }
    }
}

CardDetail.propTypes = {
    character: PropTypes.array.isRequired,
};

export default CardDetail;