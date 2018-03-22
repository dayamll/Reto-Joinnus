import React, { Component } from 'react';
import Artista from './Artista'
import './MusicApp.css';

const artistasAll = [
  {
    artista : 'Teatro - Mare Roja',
        fecha : 'Lunes 8:00pm',
        img : 'https://s3-us-west-2.amazonaws.com/joinnus.com/user/14106/act5aa2dc1b507e1.jpg',
        sinopsis:'Un joven esquizofrénico que despierta con un bate de béisbol ensangrentado entre sus manos. Mientras intenta reconstruir los acontecimientos de la noche anterior, la historia de su vida se desarrolla en líneas paralelas (presente/pasado), revelando una relación de amor-odio con su hermano mayor y una atracción obsesiva por una actriz irresistible y manipuladora.',
        director: 'Jorge Armando Cárdenas.',
        dirección:'Paseo Colón 125, Parque de la Exposición - Teatro',
        elenco:'Tania López, Aldo Sánchez y Jorge Armando Cárdenas',
        precioGeneral:'S/. 30,00',
        precioEstudiantes:'S/. 15,00'
  },
  {
    artista : 'Teatro - Anfitrión',
        fecha : 'Lunes 8:00pm',
        img : 'https://s3-us-west-2.amazonaws.com/joinnus.com/user/14106/act5aa2dcbaa89da.jpg',
        sinopsis:'Luego de años de guerra, el general tebano Anfitrión vuelve a casa junto a su esclavo Sosias. Pero no sabe que el dios Zeus, haciéndose pasar por él, ha llegado antes para seducir a su esposa Alcmena. Acompañado de su hijo Hermes, el infiel dios hará lo posible para no ser descubierto por nadie. Pero la mentira y el engaño tienen piernas cortas, sobre todo en un espacio tan pequeño. Con la casa llena de dioses disfrazados de humanos y esclavos que ya no saben a quién obedecer, las vidas se enredan y se confunden.',
        director: 'Daniel Amaru Silva.',
        dirección:'Av. Arequipa 4595, Miraflores - Teatro',
        elenco:'Tatiana Espinoza, Sergio Paris, Natalia Cárdenas, Alexa Centurión, Alain Salinas y Gabriel González.',
        precioGeneral:'S/. 40,00',
        precioEstudiantes:'S/. 20,00'
  },
  {
    artista : 'Teatro - Mucho ruido por nada',
        fecha : 'Martes 8:00pm',
        img : 'https://dank4krgp28m3.cloudfront.net/user/14106/5a33093426239.jpg',
        sinopsis:'En la época de Shakespeare las mujeres estaban prohibidas de actuar. Hoy, 14 hombres asumen el reto de ponerse en los zapatos de la mujer. A través de sus brillantes personajes, Shakespeare expone las complejidades del amor y nos recuerda la importancia de la comunidad sobre la vida en pareja.',
        director: 'Chela De Ferrari.',
        dirección:'Av. Gregorio Escobedo 781, Lima - Teatro.',
        elenco:'Paul Vega, Pietro Sibille, Rómulo Assereto, Sergio Gjurinovic, Ricardo Velásquez, Javier Valdés, Carlos Tuccio (P.M.C.) Ismael Contreras, Lucho Sandoval, Óscar López Arias, Emilram Cossío, Pablo Saldarriaga, Rodrigo Sánchez Patiño y Claret Quea.',
        precioGeneral:'S/. 21,00',
        precioEstudiantes:'-'
  }
];

const ArtistasList = props => {
  const artistasList = props.list.map((user,i) => <Artista user={user} key={i} />);
  return (
    <div>
      <h1 className='title'>Eventos - TEATRO</h1>
      {artistasList}
    </div>
  )
}

class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <ArtistasList list={artistasAll}/>
      </div>
    );
  }
}

export default MusicApp;
