import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainPage } from './components/mainPage';
import { PageWithGraph } from './components/secondPage';
import { Registr } from './components/registrPage';
import {PageWithGraphLightTheme} from './components/secondPageLightTheme'
import { MainPageLightTheme } from './components/mainPageLightTheme';
import { LargeTable } from './components/thirdPage';

class App extends React.Component {

  render() {
    return (
      <div id='App'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage></MainPage>}></Route>
            <Route path="/largeGraph" element={<PageWithGraph></PageWithGraph>}></Route>
            <Route path="/LighThemeLargeGraph" element={<PageWithGraphLightTheme></PageWithGraphLightTheme>}></Route>
            <Route path="/registr" element={<Registr></Registr>}></Route>
            <Route path="/MainLightTheme" element={<MainPageLightTheme></MainPageLightTheme>}></Route>
            <Route path="/largeTable" element={<LargeTable></LargeTable>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
