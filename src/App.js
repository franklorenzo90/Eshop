import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// My Components
import Home from "./components/Home";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";
import CartProvider from "./components/CartProvider";
import CartView from "./components/CartView";
import Login from "./components/Login";
import useLogin from "./custom-hooks/useLogin";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  const login = useLogin();

  return (
    <Router>
      <AuthProvider login={login}>
        <CartProvider>
          {login.isLoggued && <Header />}
          <>
            <div className="container" style={{marginBottom:"100px", marginTop:"100px"}}>
              <div style={{ marginTop: "80px" }}>               
                <Switch>
                  <PrivateRoute path="/:category/products">
                    <ProductList />
                  </PrivateRoute>
                  <Route path="/cartview">
                    <PrivateRoute path="/cartview">
                      <CartView />
                    </PrivateRoute>
                  </Route>
                  <PrivateRoute path="/home">
                    <Home />
                  </PrivateRoute>
                  <Route path="/">
                    <Login />
                  </Route>
                </Switch>
              </div>
            </div>
            {login.isLoggued && <Footer />}
          </>
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
