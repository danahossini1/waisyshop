import Home from './pages/Home'
import Category from "./pages/Category";

const routes=[
    {path:'/' , element:<Home />},
    {path:'category/:Cname' , element:<Category />},
]
export default routes
