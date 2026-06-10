function CardExperiencia ({cargo, empresa, periodo, descricao}){

    return(
        <div  className="card-vaga">
            <h3>{cargo}</h3>
            <h4>{empresa}</h4>
            <span className="tags-periodo">{periodo}</span>
            <p>{descricao}</p>
        </div>
    );
}
export default CardExperiencia;