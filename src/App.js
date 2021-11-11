import './App.css';
import {Switch,Route} from 'react-router-dom'
import {Dashboard,Inquery,Login,NewShipment,NotFound,ProtectedRoute,Navbar} from './compontents'
import { useSelector,useDispatch } from 'react-redux';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import {FetchShipments} from './redux/actions/shipment'
import genShipsData from './Mocks/_DATA'
import {useEffect} from 'react'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(FetchShipments(genShipsData()))
  },[dispatch])
  const {language} = useSelector((state)=>({language:state.languageReducer.lang}))
  return (
      <div className="App" dir={language === 'en' ? 'ltr':'rtl'}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Navbar/>
              <Switch>
                <ProtectedRoute path="/" exact component={Dashboard} />
                <ProtectedRoute path="/inquery" component={Inquery}/>
                <ProtectedRoute path="/new-shipment" component={NewShipment} />
                <Route path="/login" component={Login} />
                <NotFound/>
              </Switch>
        </LocalizationProvider>
      </div>
  );
}

export default App;
