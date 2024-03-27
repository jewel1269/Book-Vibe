import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/Navbar/Root/Root.jsx';
import Home from './components/Home.jsx';
import Books from './components/Books/Books.jsx';
import ListedBook from './components/ListedBook/ListedBook.jsx';
import BookInfo from './components/BookInfo/BookInfo.jsx';
import Wishlisted from './components/Wishlist/WishListed.jsx';
import ReadToPage from './components/ReadToPage/ReadToPage.jsx';
import About from './components/About/About.jsx';
import Contract from './components/Contract/Contract.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/listedBook',
        element: <ListedBook />
      },
      
      {
        path: '/readToPage',
        element: <ReadToPage />
      },
      {
        path: '/bookInfo/:id',
        element: <BookInfo />
      },

      {
        path: '/wishlisted',
        element: <Wishlisted />
      },
      {
        path:  '/about',
        element: <About/>
      },
      {
        path: '/contract',
        element: <Contract/>
      }
    ]
  },
]);






ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
