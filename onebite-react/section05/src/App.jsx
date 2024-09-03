import './App.css'
import Header from './components/Header';
import Button from './components/Button';

function App() {
  return (
    <>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} color={"green"} />
      <Button text={"블로그"} color={"blue"} />
    </>
  )
}

export default App;