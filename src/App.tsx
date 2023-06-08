import './App.css';

//import Button from './Button';
//import Input from './Input';
//import Container from './Container';
//{ border: '1px solid black', padding: '1rem' }
//import Greet from './Greet';
import Person from './Person';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }
  return (
    <div>
      <Person name={personName} />
    </div>
  );
}

export default App;

{/* <Button handleClick={(event, id) => console.log('got clicked!', event, id)} />*/}
{/* <Input value='' handleChange={(event) => console.log(event)} /> */}
{/* <Container styles={{ border: '1px solid black', padding: '1rem' }} /> */}
{/* <Greet name='Bart' messageCount={4} isLoggedIn={true}  /> */}