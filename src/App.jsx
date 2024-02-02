import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './App.css'
import ButtomOne from './componentes/ButtomOne'
import CheckboxOne from './componentes/CheckboxOne'
import FirstQuestion from './componentes/FirstQuestion'
import Header from './componentes/Header'
import SecondQuestions from './componentes/SecondQuestions';
import ThirdQuestion from './componentes/ThridQuestion';
import ParaOne from './componentes/firtsp';
import ParaTwo from './componentes/secondp';
import ParaThree from './componentes/thirdp';
import { CircleRounded, HttpOutlined, HttpsOutlined } from '@mui/icons-material';

function App(){
  return(
    <div className='Formulario'>
    <div className='second_icon'>
     <HttpsOutlined/>
    </div>
    <Header/>
    <div>
      <FirstQuestion/>
    </div>
    <SecondQuestions/>
    <ThirdQuestion/>
    <CheckboxOne/>
    <ParaOne/>
    <ButtomOne/>
    <ParaTwo/>
    <ParaThree/>
    

    </div>
    
  )


}

export default App
