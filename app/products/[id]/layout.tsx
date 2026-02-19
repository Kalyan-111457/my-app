interface Sample {
    children: React.ReactNode;
}

export default function ProductDetailsLayout({ children }: Sample) {
    return (
        <>        {children}

            <h2>Featured Layout</h2>
        </>
    )

}