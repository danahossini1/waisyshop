import Home from './pages/Home'
import Category from "./pages/Category";
import AdminPanel from './pages/AdminPanel';
import CardProduct from './pages/CardProduct';





const routes=[
    {path:'/' , element:<Home />},
    {path:'category/:Cname' , element:<Category />},
    {path:'adminpanel' , element:<AdminPanel />},
    {path:'cardproduct' , element:<CardProduct />},
]
export default routes
