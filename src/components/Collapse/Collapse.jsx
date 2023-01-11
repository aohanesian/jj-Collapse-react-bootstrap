import React, {useState} from 'react';

function Collapse(props) {
    const [show, setShow] = useState(props.opened);
    const toggleShow = () => setShow(!show);

    return (
        <React.Fragment>
            <div className="my-5">
                <p>
                    <a onClick={toggleShow} className="btn btn-primary" data-bs-toggle="collapse"
                       aria-expanded="false">Btn</a>
                </p>
                <div className={`collapse ${show ? "show" : ''}`}>
                    <div className="card card-body">
                        {props.text}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Collapse;