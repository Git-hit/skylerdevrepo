import { Helmet } from "react-helmet-async";

export const Shipping = () => (
    <div className="text-center container mx-auto p-6">
        <Helmet>
            <title>Skyler Dev | Shipping Policy</title>
            <meta name="description" content='Skyler Dev&#39;s Shipping Policy' />
            <meta property="og:title" content='Skyler Dev | Shipping Policy' />
            <meta property="og:description" content='Skyler Dev&#39;s Shipping Policy' />
        </Helmet>
        <h1 className="mt-28 text-3xl font-bold mb-4">Shipping Policy</h1>
        <p className="mb-4">
            Skyler Dev ("we," "our," "us") specializes in web development and does not involve physical product shipping. However, the following policies apply to the delivery of digital services and assets.
        </p>
        <h2 className="text-xl font-semibold mb-2">Delivery of Digital Assets</h2>
        <p className="mb-4">
            Completed projects, including website files and code, will be delivered electronically through secure methods such as email or cloud storage links.
        </p>
        <h2 className="text-xl font-semibold mb-2">Delivery Times</h2>
        <p className="mb-4">
            Delivery timelines will be specified in the project agreement. Delays, if any, will be communicated promptly.
        </p>
        <h2 className="text-xl font-semibold mb-2">Revisions and Updates</h2>
        <p className="mb-4">
            Any requested revisions will be delivered within the timeframe outlined in the project agreement.
        </p>
        <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
        <p className="mb-4">
            For questions regarding the delivery of our services, please contact us at skylerdevco@gmail.com.
        </p>
    </div>
);