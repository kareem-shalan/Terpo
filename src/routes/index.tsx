import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Hero from "../components/Hero/Hero";
import Contact from "../components/Contact/Contact";
import CarCard from "../components/CarCard/CarCard";
import CarDetails from "../components/CarDetails/CarDetails";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/"  element={<Layout />}>

            <Route index path={'/'} element={<Hero />}></Route>
            <Route index path={'/home' }  element={<Hero />}></Route>
            <Route path="Cars" element={<CarCard />}></Route>
            <Route path="Car/:id" element={<CarDetails />}></Route>
          
            <Route path="Contact" element={<Contact />}></Route>
         
            <Route path="*" element={<NotFoundPage />}></Route>

        </Route>
    )
)



export default routes;