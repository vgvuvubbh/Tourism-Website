import TourismWeb from "./TourismWeb"
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";
function App() {
  return (
<Router>  
<Routes>
  <Route path="/" Component={TourismWeb}/>
</Routes>
</Router>
  );
}

export default App;
