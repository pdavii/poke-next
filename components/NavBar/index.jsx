import Image from 'next/image'
import Link from 'next/link'
import * as S from './styled'

export default function NavBar() {
    return (
        <S.Wrapper>
            <S.Logo>
                <Image src="/images/pokeball.png" alt="Pokeball from Pokémon Anime" width="30" height="30" />
                <p>PokeNext</p>
            </S.Logo>
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
        </S.Wrapper>
    )
}