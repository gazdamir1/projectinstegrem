import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import "./styles/global.scss"
import AlbumsPage from "./pages/albumsPage/albumsPage"

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/albums" element={<AlbumsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
