import React from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import Card from 'react-bootstrap/Card';

 class selected extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showData} onHide={this.props.handleClose}>
                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.modalData.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Card.Img variant="top" src={this.props.modalData.image_url} alt='' />
                        {this.props.modalData.description}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal>
            </>
        );
    }
}

export default selected
