

export default function RootLayout({
    children,
    users,
    revenue,
    notifications
}: {
    children: React.ReactNode;
    users: React.ReactNode;
    revenue: React.ReactNode;
    notifications: React.ReactNode;

}) {
    return (
        <div>

            <div>
                {children}
            </div>

            <div>
                <h1>This is the Users Page</h1>
                {users}
            </div>

            <div>
                <h1>This is the Revenue PAge</h1>
                {revenue}
            </div>

            <div>
                <h1>This is the Notifications Page</h1>
                {notifications}
            </div>

        </div>

    );
}