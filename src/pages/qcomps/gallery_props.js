function Scientist({person, size}) {
  return (
    <section className="profile">
        <h2>{person.name}</h2>
        <img
          className="avatar"
          src= {person.imgUrl}
          alt={person.name}
          width={size}
          height={size}
        />
        <ul>
          <li>
            <b>Profession: </b>
            {person.profession}
          </li>
          <li>
            <b>Awards: {person.awards.split(',').length} </b>
            ({person.awards})
          </li>
          <li>
            <b>Discovered: </b>
            {person.discovered}
          </li>
        </ul>
      </section>
  )
  
}

export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <Scientist person = {{name: 'Maria Skłodowska-Curie', imgUrl: 'https://i.imgur.com/szV5sdGs.jpg', profession: 'physicist and chemist', awards: 'Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal', discovered: 'polonium (element)'}} size = {70} />
      <Scientist person = {{name: 'Katsuko Saruhashi', imgUrl: 'https://i.imgur.com/YfeOqp2s.jpg', profession: 'geochemist', awards: 'Miyake Prize for geochemistry, Tanaka Prize', discovered: 'a method for measuring carbon dioxide in seawater'}} size = {70} />
    </div>
  );
}
