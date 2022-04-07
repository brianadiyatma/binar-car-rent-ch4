import React from "react";
import Mercedes from "../../Assets/img/Mercedes.png";

const Banner = () => {
  return (
    <section className="hero d-flex align-items-center lb-bg">
      <div className="container-fluid heroes mt-5 d-flex align-items-center">
        <div className="row px-5">
          <div className="col">
            <h1 className="font-hel font-bold font-36">
              Sewa dan Rental Mobil Terbaik di kawasan (Lokasimu)
            </h1>
            <p className="font-hel font-14 font-w300">
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>
          </div>
          <div className="col d-none d-lg-block">
            <img src={Mercedes} alt="" className="car" />
            <div className="blue"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
