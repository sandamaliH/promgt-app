import { Link } from "@inertiajs/react";

export default function Pagination({links}) {
    return (
        <nav className="text-center mt-4">
            {links.map((link) => (
                <Link
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-900 text-xs" +
                        (link.active ? "bg-gray-900" : " ") +
                        (!link.url ? "text-gray-900 cursor-not-allowed" : "hover:bg-gray-900 text-white-900")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}>
                </Link>
            ))}
        </nav>
    );
}