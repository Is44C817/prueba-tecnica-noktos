import { React, useEffect, useState } from "react";
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './HotelView.css';
import Swal from 'sweetalert2'

export const HotelView = () => {

    const [open, setOpen] = useState(false);

    /*Se trae info de hoteles desde servicio axios, pero
    no se logro anidar el arreglo y se usan datos dummys 
    para visualizar tabla */
    const [hoteles, setHoteles] = useState([])
    console.log('hoteles en useState', hoteles)

    useEffect(() => {
        const obtenerListado = async () => {
            try{
                const token = localStorage.getItem('tokenNoktos')
                if(!token) return

                const config = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    }
                }

                const {data} = await axios('https://desarrollo.api.noktos.com/api/admin/hosts/50', config)
                console.log('data axios', data)
                setHoteles(data)
            }catch(error){
                console.log(error)
            }
        }
        obtenerListado()
    }, [])

    //Arreglo dummy
    const [listados, setListados] = useState([
        {
            "nombre_hotel": "Hotel Extended Suites Monterrey",
            "imagen": "https://noktosalmacen.blob.core.windows.net/img/Exterior.png",
            "direccion": "Av. Miguel Alemán km 15 No.518 Parque Industrial OMALAP",
            "holder": "Estancias Extendidas SA de CV",
            "nombre": "Piscina",
            "descripcion": "Piscina de 9 a.m. a 8 p.m.",
            "pagina_web": "https://www.cityexpress.com/",
            "telefono": "477 478 0565"
        },{
            "nombre_hotel": "Coatzacoalcos Forum",
            "imagen": "https://noktosalmacen.blob.core.windows.net/img/Coatza.png",
            "razon_social": "PALACIO S.A de C.V.",
            "direccion": " Ignacio Zaragoza 217, Centro",
            "nombre": "Fit Room",
            "descripcion": "Fit Room (Gimnasio 24 horas)",
            "pagina_web": null,
            "telefono": "3983633"
        },{
            "nombre_hotel": "Cd. del Carmen Aeropuerto",
            "imagen": "https://noktosalmacen.blob.core.windows.net/img/Carmen.png",
            "direccion": " Ignacio Zaragoza 217, Centro",
            "nombre": "Estacionamiento",
            "descripcion": "Estacionamiento gratis",
            "pagina_web": null,
            "telefono": "3983633",
        },{
            "nombre_hotel": "Mexicali Cataviña",
            "imagen": "https://noktosalmacen.blob.core.windows.net/img/DSC_1400.JPG",
            "direccion": " Ignacio Zaragoza 217, Centro",
            "nombre": "Area de lavado y planchado",
            "descripcion": "Do your Laundry (Área de lavado y planchado 24/7)"
        },{
            "nombre": "hotel 5",
            "imagen": null,
            "direccion": ", int s/n",
            "nombre": null,
            "descripcion": null,
            "pagina_web": "https://www.chnmonterreynorte.com/",
            "telefono": "81 81 50 2201"
        },{
            "nombre_hotel": "CITY EXPRESS LEÓN",
            "imagen": null,
            "direccion": "3002",
            "nombre": "SENCILLA",
            "descripcion": "1 Cama Queen",
            "pagina_web": "https://www.cityexpress.com/",
            "telefono": "477 478 0565"
        }
    
    ])
    console.log('listados', listados)
    /*<div>{ orders.map(order => {order.customer.map(i => console.log(i) )}) }</div>*/
    return(
        <div className="App">
            <div className="App-header">
                <Container> 
                    <p className="title">Directorio de hoteles</p>
                    <table>
                        <tbody>
                        <tr>{ listados.map(listado => (
                            <>
                                <td>{listado.nombre_hotel}</td>
                            </>
                            ))}
                        </tr>
                        <tr>{ listados.map(listado => (
                            <>
                                <td>{listado.direccion}</td>
                            </>
                            ))}
                        </tr>
                        <tr>{ listados.map(listado => (
                            <>
                                <td>{listado.telefono}</td>
                            </>
                            ))}
                        </tr>
                        <tr>{ listados.map(listado => (
                            <>
                                <td>{listado.nombre}</td>
                            </>
                            ))}
                        </tr>  
                        <tr>{ listados.map(listado => (
                            <>
                                <td>{listado.descripcion}</td>
                            </>
                            ))}
                        </tr>  
                        </tbody>
                    </table>
                </Container>
            </div>
        </div>
    )


}

export default HotelView;