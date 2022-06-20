import React from 'react'

const Error500 = () => {
    return (
        <>
            <section class="notfound-main-sec">
                <div class="notfound-content-cont">
                    <img src="images/error1.svg" alt="" />
                    <h4>505</h4>
                    <h5>Unauthorized Acess !</h5>
                    <h6>
                        Sorry! but you are not allowed to access this page. The page belongs to the authorized users
                    </h6>
                    <button>Go To Home</button>
                    <br />
                    <a href="#">Why am i seeing this ?</a>
                    <br />
                </div>
            </section>
        </>
    )
}

export default Error500