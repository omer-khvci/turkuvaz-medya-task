import { useRouter } from "next/router";

const { createContext, useState, useEffect } = require("react");

const defaultProvider = {
    user: null,
    login: Promise.resolve(),
    init: Promise.resolve()
}

const AuthContext = createContext(defaultProvider)

const AuthProvider = ({ children }) => {



    return <AuthContext.Provider value={true}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }