import React from "react";
const Login =()=>
{
    return (
        <>
        <Navbar/>

        <div className="flex items-center justify-center mt-18 ">
            <div>
                <form onSubmit={() => {}}>
                    <h4 className="text-2xl mb-7">Login</h4>
                    <input type="text" placeholder="Email" className="input-box" />
                <button type="submit" className="btn-primary"> Login </button>
                    <p className="text-sm text-center mt-4">Not registered yet?{" "}
                    <Link to="/signUp" className=""> Create an Account </Link>
                        </p> 
                </form>
            </div>
        </div>

        </>
    )
}
export default Login