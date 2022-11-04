import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Header />
      <CollectionCard
        id={0}
        name={'BANDANA PUNK'}
        traits={[{ value: 7 }]}
        image={
          'https://i.seadn.io/gae/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q?auto=format&w=1000'
        }
      />
    </div>
  );
}

export default App;
