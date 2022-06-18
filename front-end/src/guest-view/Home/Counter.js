import { faChartLine, faCoffee, faMoneyCheckDollar, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './custom.css';

const Counter = () => {
    return (
        <section className='home-counter-sec'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-4 p-0'>
                        <div className='home-counter-box ctr-1 counter-divider'>
                            <span>
                                <FontAwesomeIcon icon={faUsers} />
                            </span>
                            <h6>Total Investors</h6>
                            <h1>100+</h1>
                        </div>
                    </div>
                    <div className='col-md-4 p-0'>
                        <div className='home-counter-box ctr-2 counter-divider'>
                            <span>
                                <FontAwesomeIcon icon={faMoneyCheckDollar} />
                            </span>
                            <h6>Total Finance Seekers</h6>
                            <h1>70+</h1>
                        </div>
                    </div>
                    <div className='col-md-4 p-0'>
                        <div className='home-counter-box ctr-3'>
                            <span>
                                <FontAwesomeIcon icon={faChartLine} />
                            </span>
                            <h6>Total Projects</h6>
                            <h1>170+</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Counter