import React from "react";

const Card = (prop) => {
  console.log(prop.Datos);
  return (
    <div className="">
      <div className="card" style={{ width: "18rem", border: "4px solid #ff00ff" }}>
        <div className="d-flex mt-2 justify-content-center">
          <img
            className="card-img-top bg-secondary"
            src={prop.Datos.img}
            alt="poke"
            style={{ width: "15rem", height: "15rem" }}
          />
        </div>
        <div className="card-body text-white bg-info m-2">
          <h4 className="card-title">Name: <b>{prop.Datos.name}</b></h4>
          <p className="card-text text-uppercase">ID: <b>{prop.Datos.id}</b></p>
          <p className="card-text text-uppercase">
            Height: <b>{prop.Datos.height} sz</b>
          </p>
          <p className="card-text text-uppercase">
            Weight: <b>{prop.Datos.weight} lb</b>
          </p>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <input
            type="submit"
            value="Click"
            className="btn btn-primary w-50"
            onClick={prop.PokeApi}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
