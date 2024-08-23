import Content from "./components/Content";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
