import React from 'react'
import { ReactComponent as MobileIcons } from "../../icons/mobile.svg"
import  "./Navbar.css"
const Navbar = () => {
    return (
        <div className="py-1 bg-primary1 ">
            <div className="container">
                <div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
                    <div className="col-lg-12 d-block">
                        <div className="row d-flex p-2 fw-normal">
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                 {/* <MobileIcons/> */}
                                </div>
                                <span className="text">9311254752</span>
                            </div>
                            <div className="col-md pr-4 d-flex topper align-items-center">
                                <div className="icon mr-2 d-flex justify-content-center align-items-center">
                                    <span className="icon-paper-plane" />
                                </div>
                                <span className="text">info@wpmindia.com</span>
                            </div>
                            <div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
                                <span className="text">
                                    3-5 Business days delivery &amp; Free Returns
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar