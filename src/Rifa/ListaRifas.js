import Rifa from "./Rifa"

const ListaRifas = ({ usuario, rifas }) => {
    return (
        <>
            <div className="overflow-y-auto h-75">
                {
                    rifas?
                    rifas.map((e, i) => {
                        return <Rifa key={e.id} rifa={e} />
                    })
                    :
                    usuario.nombre
                }
            </div>
        </>
    )
}

export default ListaRifas;