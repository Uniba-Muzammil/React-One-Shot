import React from "react"; 
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./components/Navbar";
 import Home from "./pages/Home"; 
 import About from "./pages/About"; 
 import Timeline from "./pages/Timeline"; 
 import Resources from "./pages/Resources";
import AboutWebsite from "./pages/AboutWebsite";
  import TopicDetail from "./pages/TopicDetail"; 
  import Reviews from "./pages/Review"; 
  import Footer from "./components/Footer";
  function App() 
  { 
    return ( 
<div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Main content grows to push footer down */}
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/guide" element={<AboutWebsite />} />
          <Route path="/review" element={<Reviews />} />
          <Route path="/topics/:id" element={<TopicDetail />} />
        </Routes>
      </div>

      {/* Footer will appear on every page */}
      <Footer />
    </div>
  );
}

export default App;
