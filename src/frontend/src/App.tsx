import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';

function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
