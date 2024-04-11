/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async()=>{
        return[
            {
                source: '/',
                destination: '/payment',
                permanent: false
            },
            {
                source: '/profile',
                destination: '/payment',
                permanent: false
            },
            {
                source: '/faskes',
                destination: '/payment',
                permanent: false
            },
            {
                source: '/faskes/semarang',
                destination: '/payment',
                permanent: false
            },
            {
                source: '/faskes/demak',
                destination: '/payment',
                permanent: false
            },
            {
                source: '/peta/semarang',
                destination: '/payment',
                permanent: false
            },
            {
                source: '/peta/semarang',
                destination: '/payment',
                permanent: false
            },
        ]
    }
};


export default nextConfig;
