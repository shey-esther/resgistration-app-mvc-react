class Modal {
  constructor() {
    this.add = [],
    this.callback = null;
  }
  suscribe(render) {
    this.callback = render;
  }
  notify() {
    this.callback();
  }
  agregar(name) {
    console.log(name.value);
    if (this.input != null && this.input != " ") {
      this.add.push({
        name: this.input.value,
      })
    }
    this.callback();
    this.notify();
  }
}

const Header = ({ modal }) => {
  return (
    <div>
      <header>
        <h1>RSVP</h1>
        <p> Registration App </p>
        <form id="registrar" onSubmit={e => {
          e.preventDefault();
          modal.agregar(modal.input);
        }}>
          <input type="text" onChange={e => (modal.input = e.target)} name="name" placeholder="Invite Someone" />
          <button type="submit" name="submit" value="submit">Submit</button>
        </form>
      </header>
    </div>
  )
}

const Section = ({ modal }) => {
  return (
    <div>
      <div className="main">
        <h2>Invitees</h2>
        <ul id="invitedList">
          <li>
            <label>Confirmed<input type="checkbox" /></label>
            <button>remove</button>
          </li>
        </ul>
      </div>
    </div>
  )
}


const Aplication = ({ title, modal }) => {
  return (
    <div className="wrapper">
      <Header modal={modal} />
      <Section modal={modal} />
    </div>
  );
}

let modal = new Modal();
let counter = 1;

let render = () => {
  ReactDOM.render(<Aplication title="wrapper" modal={modal} />,
    document.getElementById('register')
  );
};
modal.suscribe(render);
render();

// let Header = React.createClass({
//   render: function () {
//     return (
//     <div>
//     <header id="registrar">
//       <h1>RSVP</h1>
//       <p> Registration App </p>
//       <form  onSubmit={e => {
//         e.preventDefault();
//         modal.agregar(name);
//         }}>
//         <input type="text" onChange={e=>(modal.input=e.target)} name="name" placeholder="Invite Someone" />
//         <button type="submit" name="submit" value="submit">Submit</button>
//       </form>
//     </header>
//     </div>
//     )
//   }
// })








