import React, { useEffect } from "react";
import { Button, Card, Fab, Grid, Rating } from "@mui/material";
import { useParams } from "react-router-dom"
import Tenis1 from "./img/t1.png"
import Tenis2 from "./img/t2.png"
import Tenis3 from "./img/t3.png"
import Tenis4 from "./img/t4.png"
import Tenis5 from "./img/t5.png"
import { Stack } from "@mui/system";
import Zoom from "react-img-zoom";
import { ChevronLeft, ChevronRight, Star, StarOutline } from "@mui/icons-material";
import "./style.scss"

export default function DetalhesProduto(){
    const {id} = useParams();
    const [atual, setAtual] = React.useState(0);
    const [color, setColor] = React.useState('Todas as cores');
    const [listaTenis, setListaTenis] = React.useState([]);

    const imagens = [
        Tenis1,
        Tenis2,
        Tenis3,
        Tenis4,
        Tenis5,
    ];

    const Items = () => {

        return imagens.map((cada, posicao) => {
            return (
                <Grid item xs={2.4}>
                    <Card onClick={() => setAtual(posicao)} sx={(atual === posicao) && {border: "2px solid #C92071"}}>
                        <img width="100%" src={cada} alt=""/>
                    </Card>
                </Grid>
            );
        });
    }

    function anterior(){
        if(atual === 0){
            setAtual(imagens.length - 1 )
        }else{
            setAtual(atual - 1);
        }
    }
    function proximo(){
        if(atual < imagens.length - 1){
            setAtual(atual +1)
        }else{
            setAtual(0)
        }
    }

    function buscarTenis(){
        fetch("http://localhost:8000/bones")
        .then(res => res.json())
        .then(lista => {
            setListaTenis(lista);
        })
    }

    React.useEffect(() => {
        let intervalo = setInterval(proximo, 3000)

        return () => clearInterval(intervalo);
    });

    React.useEffect(() => {
        buscarTenis();
    }, [])

    return(
        <div className="product-details">
            Detalhes do Produto {id}

            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Card align="center">
                        <Stack direction="row" sx={{justifyContent: "space-between", alignItems: "center"}}>
                            <ChevronLeft sx={{fontSize: "60px"}} onClick={anterior}/>

                            {imagens.map((img, key) => (
                                <div style={{display: key === atual?'block':'none'}} >
                                    <Zoom width={400} height={400} zoomScale={2} img={img}/>
                                </div>
                            ))}

                            <ChevronRight sx={{fontSize: "60px"}} onClick={proximo}/>
                        </Stack>
                    </Card>
                    
                    <Grid container spacing={2}>
                        <Items/>
                    </Grid>
                    
                </Grid>

                <Grid item xs={5}>
                    <div className="title">
                        Tenis Nike
                    </div>

                    <div className="ref">
                        Casual | Nike
                    </div>

                    <div className="reviews">
                        {/* <Star/>
                        <Star/>
                        <Star/>
                        <Star/>
                        <StarOutline/> */}

                        <Rating value={4}/>
                    </div>

                    <div>
                        $299
                    </div>

                    <div>
                        Descrição
                    </div>

                    <div>
                        Tamanho
                    </div>

                    <div>
                        <p>Cor <br/> <small>{color}</small></p>

                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Roxo')}color="secondary"></Fab>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Azul')}color="primary"></Fab>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Verde')}color="success"></Fab>
                        <Fab sx={{width: "35px", height: "20px"}} onClick={() => setColor('Vermelho')}color="error"></Fab>
                    </div>

                    <Button className="buy" variant="contained">Comprar</Button>
                </Grid>
            </Grid>
        </div>
    )
}