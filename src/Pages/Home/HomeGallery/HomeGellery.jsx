import ResponsiveGallery from 'react-responsive-gallery';


const HomeGellery = () => {
    const images = [
        {
            src:
                "https://images.unsplash.com/photo-1511415518647-9e5da4fd803f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
            orderS: 1,
            orderM: 1,
            orderL: 1
        },
        {
            src:
                "https://images.unsplash.com/photo-1623111396948-5706bc25703e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
            orderS: 2,
            orderM: 2,
            orderL: 2
        },
        {
            src:
                "https://images.unsplash.com/photo-1587181972975-ff4ecddeb30b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80",
            orderS: 4,
            orderM: 3,
            orderL: 6
        },
        {
            src:
                "https://images.unsplash.com/photo-1621870536302-95e22e738b8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=877&q=80",
            orderS: 3,
            orderM: 4,
            orderL: 5
        },
        {
            src:
                "https://images.unsplash.com/photo-1616249174485-e60ac0145f04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=512&q=80",
            orderS: 5,
            orderM: 6,
            orderL: 4
        },
        {
            src:
                "https://images.unsplash.com/photo-1568145400178-128972552009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1612039442391-9444903883e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1568145399976-4c694e90bb20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1642374452911-fe0c1c996c52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1642374386978-9d5befc7af96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1642242413035-58b75e06dfeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=867&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1642374452713-6f1d2a5d571b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1642374452721-19886859ef79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1642374452793-535cc48f5088?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1648711729738-f411e8569d62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1656428325000-fd2e59d83a41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1648711085939-3690013c1200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        },
        {
            src:
                "https://images.unsplash.com/photo-1648711727240-7ee250483923?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            orderS: 6,
            orderM: 5,
            orderL: 3,
            imgClassName: "img6-style"
        }
    ];
    return (
        <ResponsiveGallery
            useLightBox
            images={images}
        />
    );
};

export default HomeGellery;