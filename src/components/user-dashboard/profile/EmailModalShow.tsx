'use client';
import React, { FC } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';

const EmailModalShow: FC<MultipleModalInterFace> = ({ open, toggle }) => {
  return (
    <Modal centered isOpen={open} toggle={() => toggle('#edit-address')}>
      <ModalHeader toggle={() => toggle('#edit-address')}>
        <h5 className="modal-title">change email address</h5>
      </ModalHeader>
      <ModalBody>
        <form>
          <div className="row">
            <div className="form-group col-12">
              <label htmlFor="old">old email</label>
              <input type="email" className="form-control" id="old" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="new">enter new email</label>
              <input type="email" className="form-control" id="new" />
            </div>
            <div className="form-group col-12">
              <label htmlFor="comfirm">confirm your email</label>
              <input type="email" className="form-control" id="comfirm" />
            </div>
          </div>
        </form>
      </ModalBody>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => toggle('#edit-address')}
        >
          Close
        </button>
        <button type="button" className="btn btn-solid">
          Save changes
        </button>
      </div>{' '}
    </Modal>
  );
};

export default EmailModalShow;
