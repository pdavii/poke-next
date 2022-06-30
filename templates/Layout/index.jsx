import Header from '../../components/Header'
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer'

export default function Layout({ children }) {
    return (
        <>
            <Header>
                <NavBar />
            </Header>
            <main className='main-container'>{children}</main>
            <Footer />
        </>
    )
}