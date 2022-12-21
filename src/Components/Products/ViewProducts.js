import React from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import crud from "../../Conexiones/crud";

export const ViewProducts = ({ product }) => {
    //console.log("hola producto", product)
    const { nombre, descripcion, stock, precio, imagen } = product;
    
    const borrarProduct = async (idProduct) => {
        
        swal({
            title: 'Estas seguro de borrar la categoria?',
            text: "una vez eliminada no podra recuperarla",
            icon: 'warning',
            buttons: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    const response = crud.DELETE(`/api/product/${idProduct}`);
                    
                    if (response) {
                        swal(" categoria borrada correctamente", {
                          
                          
                            icon: "success",
                            
                        });
                        

                    }
                   
                } else {
                    swal("accion cancelada");
                }
                window.location.reload();
            });
    }


    return (
        <div
            className="border-r border-4 content-center border-red-500 rounded-lg  bg-white p-5 flex justify-between  items-center"
        >
            <div className="  justify-center content-start flex-col items-start">
                <p className="mb-1 text-xl text-black-50 ">nombre:{nombre}</p>
                
                <p className="mb-1 text-xl text-black-50  ">stock:{stock}</p> 
                <p className="mb-1 text-xl text-black-50  ">precio:{precio}</p>
                   <img    className="border-4 border-red-500 rounded-lg"
                
                src={imagen} width="300" height="150"></img>
                <p className="mb-1 text-xl text-black-50  uppercase ">descripcion:{descripcion}</p>
            </div>
            <div className=" = flex flex-col lg:flex-row gap-2">
                <Link

               className="bg-indigo-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg"
                  to={`/update-product/${product._id}`}
                //onClick={UpdateProduct(product._id)}
                
                >Editar

                </Link>
                
                <button

                className="bg-red-600 px-4 py-3 text-white uppercase font-bold text-sm rounded-lg "
                onClick={() => borrarProduct(product._id)}
                >Eliminar
                </button>

            </div>
        </div>
    )
}
export default ViewProducts;