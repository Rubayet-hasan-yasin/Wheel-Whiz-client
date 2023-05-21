
const Blogs = () => {
    return (
        <div>
            <div className='h-64 background-color-gradient'>
                <h2 className='text-center pt-28 text-5xl font-extrabold'>Question and Answer</h2>
            </div>

            <div className='my-container'>
                <h1 className='text-4xl font-semibold my-6'>
                    <span className='font-extrabold'>1.</span> What is an access token and refresh token? How do they work and where should we store them on the client-side?
                </h1>
                <p className='text-lg my-5'>
                    Access tokens are used for authentication and sent with each request, while refresh tokens are securely stored by the client to obtain new access tokens without re-authentication.
                    <br />
                    Access tokens authenticate requests, while refresh tokens obtain new access tokens. Store them securely on the client-side, such as in cookies or local storage, to facilitate authentication and authorization processes.
                </p>
                <hr />


                {/* second question */}

                <h1 className='text-4xl font-semibold my-6'>
                    <span className='font-extrabold'>2.</span> Compare SQL and NoSQL databases?
                </h1>
                <p className='text-lg my-5'>
                    SQL databases are structured, use predefined schemas, ensure strong data consistency, and are suitable for complex transactions. NoSQL databases are schema-less, provide flexible scalability, support unstructured data, and prioritize high performance and horizontal scaling.
                </p>
                <hr />


                {/* third question */}

                <h1 className='text-4xl font-semibold my-6'>
                    <span className='font-extrabold'>3.</span> What is express js? What is Nest JS ?
                </h1>
                <p className='text-lg my-5'>
                    Express.js is a minimalist web application framework for Node.js that simplifies the process of building web applications and APIs.
                    <br />
                    Nest.js is a progressive Node.js framework that is built on top of Express.js and provides a more structured and scalable approach to building server-side applications.
                </p>
                <hr />


                <h1 className='text-4xl font-semibold my-6'>
                    <span className='font-extrabold'>4.</span> What is MongoDB aggregate and how does it work ?
                </h1>
                <p className='text-lg my-5'>
                    MongoDB's aggregate is a powerful feature that allows you to perform advanced data processing and analysis operations on collections of documents.The stages make up what is known as a pipeline. The stages in a pipeline can filter, sort, group, reshape and modify documents that pass through the pipeline.
                </p>




            </div>
        </div>
    );
};

export default Blogs;