import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@chakra-ui/react';

// 导入布局组件
import Layout from './components/Layout';

// 导入页面组件
import Home from './pages/Home';
import About from './pages/About';
import Research from './pages/Research';
import Support from './pages/Support';
import Community from './pages/Community';
import Advocacy from './pages/Advocacy';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Box minH="100vh">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/support" element={<Support />} />
            <Route path="/community" element={<Community />} />
            <Route path="/advocacy" element={<Advocacy />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Box>
    </Router>
  );
};

export default App;
