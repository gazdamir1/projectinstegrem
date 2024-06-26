import { BrowserRouter, Route, Routes } from "react-router-dom"
import Main from "./pages/main"
import "./styles/global.scss"
import Albums from "./components/albums/albums"
import SignIn from "./pages/SignIn/SignIn"
import Registration from "./pages/Registration/Registration"
import Posts from "./components/posts/posts"
import Photos from "./components/photos/photos"
import { ThemeProvider } from "./components/theme-provider/ThemeContext"

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Main>
                  <Posts />
                </Main>
              }
            />

            <Route
              path="/posts"
              element={
                <Main>
                  <Posts />
                </Main>
              }
            />

            <Route
              path="/albums"
              element={
                <Main>
                  <Albums />
                </Main>
              }
            />

            <Route
              path="/albums/:albumId"
              element={
                <Main>
                  <Photos />
                </Main>
              }
            />

            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
