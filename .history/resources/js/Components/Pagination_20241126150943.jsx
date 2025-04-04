export default function Pagination({links}) {
    return (
        <nav className="text-center mt-4">
            {links.map(link => (
                <Link>{link.label}</Link>
            ))}
        </nav>
    )
}




