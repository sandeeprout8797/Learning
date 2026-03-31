function Header({ headerInfo, cname, children }) {
    return (
        <div>
            <h1>
                This is a Header section from Header.jsx
                <br />

                Props: {JSON.stringify(headerInfo)}
                <br />

                Email: {headerInfo.email}
                <br />

                Phone: {headerInfo.phone}
                <br />

                Cname: {cname}
            </h1>

            <h3> header from App.js: {children}</h3>
        </div>
    );
}

export default Header;