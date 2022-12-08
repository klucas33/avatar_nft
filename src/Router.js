import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enter from "./routes/Enter";
import RenderPage from "./routes/RenderPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Enter />} />
        <Route path="/home" element={<RenderPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
