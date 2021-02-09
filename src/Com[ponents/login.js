import React, {useState} from 'react'
import {Modal,Button} from 'react-bootstrap'
import '../Utils/custom.css'
export default function MyVerticallyCenteredModal(props) {
    return (
      <Modal className="login-modal"
        {...props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Body>
        <form>
                <h3 className="login-regester-title-center">Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }