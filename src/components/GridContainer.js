import React from 'react';

/*
    Grid container for any kind of component
*/
function GridContainer({ items , CardComponent}){
    return(
        <React.Fragment>
            <div className='grid-container'>
                {items.map((item , index) => (
                    <CardComponent {...item}/>
                ))}
            </div>
        </React.Fragment>
    );
};

export default GridContainer;