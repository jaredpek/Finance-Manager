import { getKey } from "../../lib/Helpers"

const links = [
    ['Home', '/'],
    ['Dashboard', '/dashboard'],
    ['About', '/about'],
    ['Profile', '/profile'],
]

export default function NavBar() {
    return (
        <div className='nav-bar'>
            {
                links.map(link => {
                    return <a href={link[1]} className='nav-bar-link' key={getKey()}>{link[0]}</a>
                })
            }
        </div>
    )
}