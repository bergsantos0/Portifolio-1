import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { InicioPage } from "../pages/Inicio/InicioPage";
import { ProjetosPage } from "../pages/projetos/ProjetosPage";
import { SobreMimPage } from "../pages/SobreMim/SobreMimPage";

const router = createBrowserRouter([
    {
      path: '/',
      element: <InicioPage />,
    },

    {
      path: '/SobreMim',
      element: <SobreMimPage />,
    },
    {
      path: '/Projetos',
      element: <ProjetosPage />,
    },
  ]);
  
  export { router, RouterProvider };