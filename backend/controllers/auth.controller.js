

export const signup = (req,res) => {
    res.send("Sign Up");
    console.log("signupUser");

}

export const login = (req,res) => {
    res.send("Log In");

    console.log("loginUser");
}

export const logout = (req,res) => {
    res.send("Log Out");

    console.log("logoutUser");

}