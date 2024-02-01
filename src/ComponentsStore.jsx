import Cards from './Components/Cards/Cards'
import Discount from './Components/Discount/Discount'
import Footer from './Components/Footer/Footer'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Review from './Components/Review/Review'
import Staff from './Components/Staff/Staff'
import Tour from './Components/Tours/Tour'
import Contact from './Components/Contact/Contact'


function ComponentsStore() {
    return (
        <>
            <Navbar/>
            <Home/>
            <Cards/>
            <Tour/>
            <Discount/>
            <Review/>
            <Staff/>
            <Contact />
            <Footer/>
        </>
    )
}

export default ComponentsStore;

