import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './css/style.css';
import useAuth from './hooks/useAuth';
import { ScrollToTop } from './pages/Store/components/ScrollToTop';

import Singup from './pages/Signup/Singup';
import Login from './pages/Login/Login';
import Store from './pages/Store/Store';
import Cart from './pages/Store/pages/Cart/Cart';
import Product from './pages/Store/pages/Product/Product';
import Shipping from './pages/Store/pages/Shipping/Shipping';
import RequireAuth from './utils/RequireAuth';
import Payment from './pages/Store/pages/Payment/Payment';
import Order from './pages/Store/pages/Order/Order';
import Commande from './pages/Store/pages/Commande/Commande';
import UserProfile from './pages/Store/pages/UserProfile/UserProfile';
import Historique from './pages/Store/pages/Historique/Historique';

const routeMetadata = {
  '/': {
    title: 'Boutique - Bienvenue a la maison du vinyle',
    description: 'Découvrez notre collection exclusive de vinyles et trouvez votre prochaine pépite musicale.',
  },
  '/inscription': {
    title: 'Inscription - Bienvenue a la maison du vinyle',
    description: 'Créez un compte pour accéder à nos offres spéciales et personnaliser votre expérience musicale.',
  },
  '/connexion': {
    title: 'Connexion - Bienvenue a la maison du vinyle',
    description: 'Connectez-vous pour accéder à votre collection personnelle et gérer vos commandes.',
  },
  '/panier': {
    title: 'Panier - Bienvenue a la maison du vinyle',
    description: 'Consultez et gérez les vinyles que vous avez ajoutés à votre panier.',
  },
  '/products/:id': {
    title: 'Détails du produit - Bienvenue a la maison du vinyle',
    description: 'Découvrez les détails de ce vinyle et ajoutez-le à votre collection.',
  },
  '/expedition': {
    title: 'Expédition - Bienvenue a la maison du vinyle',
    description: 'Choisissez vos options de livraison pour recevoir vos vinyles rapidement et en toute sécurité.',
  },
  '/paiement': {
    title: 'Paiement - Bienvenue a la maison du vinyle',
    description: 'Saisissez vos informations de paiement en toute sécurité pour finaliser votre commande.',
  },
  '/commander': {
    title: 'Confirmation de commande - Bienvenue a la maison du vinyle',
    description: 'Confirmez les détails de votre commande avant de la valider.',
  },
  '/commande/:id': {
    title: 'Commande - Bienvenue a la maison du vinyle',
    description: 'Consultez les détails de votre commande et suivez son statut.',
  },
  '/profil': {
    title: 'Profil utilisateur - Bienvenue a la maison du vinyle',
    description: 'Gérez vos informations personnelles et vos préférences musicales.',
  },
  '/historique': {
    title: 'Historique des commandes - Bienvenue a la maison du vinyle',
    description: 'Consultez l’historique de vos achats et revivez vos moments musicaux.',
  },
};


function App() {
  const { auth, checkUser } = useAuth();
  const location = useLocation();

  useEffect(() => {
    checkUser();

    const metadata = routeMetadata[location.pathname] || {
      title: 'VinylStoreLyon - Bienvenue a la maison du vinyle',
      description: 'Explorez le monde de la musique avec VinylStoreLyon.',
    };
    document.title = metadata.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = metadata.description;
      document.head.appendChild(meta);
    }
  }, [checkUser, auth.user, location]);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Store />} />
        <Route path='/inscription' element={<Singup />} />
        <Route path='/connexion' element={<Login />} />
        <Route path='/panier' element={<Cart />} />
        <Route path='/products/:id' element={<Product />} />
        <Route
          path='/expedition'
          element={
            <RequireAuth>
              <Shipping />
            </RequireAuth>
          }
        />
        <Route
          path='/paiement'
          element={
            <RequireAuth>
              <Payment />
            </RequireAuth>
          }
        />
        <Route
          path='/commander'
          element={
            <RequireAuth>
              <Order />
            </RequireAuth>
          }
        />
        <Route
          path='/profil'
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path='/historique'
          element={
            <RequireAuth>
              <Historique />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
}

export default App;
