import Image from 'next/image'
import Link from 'next/link'

export default function NavBar() {
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" alt="Pokeball from Pokémon Anime" width="30" height="30" />
                <p>PokeNext</p>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/sobre">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}