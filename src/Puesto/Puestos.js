import { useEffect, useState } from "react";
import { anotarEnRifa, borrarPuesto, consultarPuestosEn } from "./ApiPuesto";


const Puestos = ({ usuario, rifa }) => {
    const [disab, setDisab] = useState([]);
    const [mios, setMios] = useState([]);
    const [puestos, setPuestos] = useState(Array(101));

    const getPuestos = async () => {
        try {
            const u = await consultarPuestosEn(rifa)
            const x = u.sort((a, b) => a.numPuesto - b.numPuesto);
            if (x[0]) {
                let a = [false]
                let b = [false]
                let c = [-1];

                let it = 0;
                for (let i = 1; i <= x[0].rifa.puestos; i++) {
                    if (x[it] && i === x[it].numPuesto) {
                        c.push(x[it].id);
                        a.push(true)
                        b.push(x[it].usuario.uid === usuario.uid)

                        it++;

                    } else {
                        a.push(false)
                        b.push(false)
                        c.push(-1)
                    }
                }
                setDisab(a)
                setMios(b)
                setPuestos(c)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPuestos()

    }, [rifa])

    const onClick = async (evt) => {
        console.log(mios, disab, puestos);
        const number = parseInt(evt.currentTarget.parentElement.id) + 1
        try {
            const conf = window.confirm(`Deseas anotarte en la rifa con el numero ${number}?`)
            if (!conf) return;
            await anotarEnRifa(number, rifa, usuario)
            getPuestos()
        } catch (error) {
            console.log(error);
        }
    }

    const onDelete = async (evt) => {
        const id = evt.currentTarget.id;
        const number = parseInt(evt.currentTarget.parentElement.id) + 1
        const puesto = {id: id};
        try {
            const conf = window.confirm(`Deseas eliminar tu puesto en el numero ${number}?`)
            if(!conf)return;
            await borrarPuesto(puesto);
            getPuestos()

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1 className="mt-2">Puestos {rifa.puestos}</h1>
            <div className="row ms-3 row-cols-5">

                {[...Array(rifa.puestos)].map((x, i) =>
                    <div className="col mt-2" key={i} id={i} >

                        <button id={puestos[i + 1]} className={`rounded-circle ${mios[i+1] ? "btn-danger" : "btn-primary"} btn`} onClick={e => !disab[i + 1] ? onClick(e) : (mios[i + 1] ? onDelete(e) : void (0))} disabled={mios[i+1]?false : disab[i+1]} style={{ width: "58px" }}>{i + 1}</button>
                    </div>
                )}

            </div>
        </>
    )
}

export default Puestos;