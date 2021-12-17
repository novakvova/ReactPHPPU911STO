import {useEffect, useRef} from 'react';
import { Modal } from "bootstrap";
import Cropper from 'cropperjs';

//import InputGroup from "../../common/InputGroup";
const RegisterPage = () => {

  const modalRef = useRef(null);
  let cropper: Cropper;
  // useEffect(() => {
    
  // }, []);

  const selectImage = () => {
    console.log("Select image");
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle as unknown as Element, {
      backdrop: "static",
      keyboard: false,
    });
    bsModal.show();

    const image = document.getElementById("image");
    cropper= new Cropper(image as any, {
     aspectRatio: 16 / 9,
     crop(event) {
       console.log(event.detail.x);
       console.log(event.detail.y);
       console.log(event.detail.width);
       console.log(event.detail.height);
       console.log(event.detail.rotate);
       console.log(event.detail.scaleX);
       console.log(event.detail.scaleY);
     },
   });
  }
  return (
    <>
      <div className="row">
        <div className="offset-md-3 col-md-6">
          <h1 className="text-center">Реєстрація на сайті</h1>

          <button className="btn btn-success" onClick={selectImage}>
            Вибір фото
          </button>

          {/* <InputGroup
          label="Прізвище"
          field="surname"
          onChange={handleChange}
          type="text"
        />

        <InputGroup
          label="Ім'я"
          field="name"
          onChange={handleChange}
          type="text"
        /> */}
          <div className="text-center">
            <button
              type="submit"
              className="btn btn-secondary px-5"
              // disabled={loading}
            >
              Реєстрація
            </button>
          </div>
        </div>
      </div>

      <div className="modal" ref={modalRef} tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Modal title</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Modal body text goes here.</p>
              <div>
                <img id="image" 
                  src="https://static.remove.bg/remove-bg-web/6c5ea334216f9ded64486efb0e2a4421757cbce5/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png" />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={()=>{
                cropper.rotate(90);
              }}>
                rotate
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
