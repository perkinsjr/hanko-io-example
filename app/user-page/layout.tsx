

export default function UserLayout(props: { children: React.ReactNode }) {

    return(
        <>
        <div className="grid grid-cols-1 h-screen place-items-center bg-white">
            <div className="container">{props.children}</div>
        </div>
        </>
    )
    }