import React from 'react';

const ShowLeagueDescription = (props) => {
    const {strDescriptionEN}=props.league;
    
    return (
        <div style={{marginTop:'30px', color:'whiteSmoke'}}>
            <p>{strDescriptionEN}</p>
            <br/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis in autem recusandae alias libero aspernatur tempore dolores! Suscipit libero sint laboriosam amet omnis nesciunt reprehenderit? Porro dignissimos, perspiciatis laborum voluptas minima repellat placeat pariatur natus distinctio architecto, sed harum asperiores! Impedit error ea non vero dolor aliquid est nihil maxime odio ex ut qui quibusdam quo, delectus, magnam magni quam! Atque magnam harum, voluptates nobis repudiandae ea fugit corporis consectetur voluptate recusandae tempora inventore nam dolorem quod voluptatibus mollitia unde, quos dignissimos. Molestias labore quidem necessitatibus nesciunt facilis nihil fugit adipisci eaque saepe ipsum maiores enim et, in fuga? Distinctio dignissimos, obcaecati excepturi maiores pariatur facilis eligendi, magnam necessitatibus perferendis id molestiae. Neque dignissimos consectetur sequi, iste accusamus modi adipisci commodi quo nihil, ea maxime debitis fugit ullam exercitationem iure blanditiis, ad atque harum. Provident, magni fugit reprehenderit nesciunt quis ad quia voluptates aliquid ratione inventore odit atque in officia.</p>
        </div>
    );
};

export default ShowLeagueDescription;