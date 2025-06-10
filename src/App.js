import React from 'react';

import './App.css';

import ProductCard from './components/ProductCard';
import GridContainer from './components/GridContainer';
import Header from './components/Header'


function App() {

  const cardData = [
    {title: "RTX 5090", description: 
      "The NVIDIA GeForce RTX 5090 is a powerhouse GPU built on the Blackwell architecture, designed for high-performance gaming and AI-driven workloads. It features 32 GB of GDDR7 memory, 21760 CUDA cores, and fifth-gen Tensor Cores, making it one of the most advanced graphics cards available."
      , price: "1500", oldPrice: "1800", image: "/products/rtx-5090.jpg"},
    {title: "RTX 5080", description: 
      "The NVIDIA GeForce RTX 5080 is a high-performance GPU built on the Blackwell architecture, designed for gaming and AI-driven workloads. It features 16 GB of GDDR7 memory, 10,752 CUDA cores, and fourth-gen ray tracing cores, making it a powerful choice for 4K gaming."
      , price: "1300", oldPrice: "1500", image: "/products/rtx-5080.jpg"},
    {title: "RTX 5070", description: 
      "The NVIDIA GeForce RTX 5070 is a high-end graphics card built on the Blackwell architecture, designed for gaming and AI-driven workloads. It features 12 GB of GDDR7 memory, 6144 CUDA cores, and fourth-gen ray tracing cores, making it a powerful choice for 1440p and 4K gaming."
      , price: "1000", oldPrice: "1300", image: "/products/rtx-5070.jpg"},
    {title: "RTX 5060", description: 
      "The NVIDIA GeForce RTX 5060 is a mid-range GPU built on the Blackwell architecture, designed for gaming and AI-enhanced workloads. It features 8 GB of GDDR7 memory, 3840 CUDA cores, and fourth-gen ray tracing cores, making it a solid choice for 1080p and 1440p gamin."
      , price: "800", oldPrice: "1000", image: "/products/rtx-5060.jpg"},
  ];

  return (
    <React.Fragment>

      <Header/>

      <main className='py-1'>
        <GridContainer items={cardData} CardComponent={ProductCard} />
      </main>

    </React.Fragment>
  );
}

export default App;
