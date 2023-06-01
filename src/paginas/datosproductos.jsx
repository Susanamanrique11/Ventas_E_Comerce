const datosproductos = [
    {
      id: 1,
      name: 'NutriHuellitas Adulto',
      generalDescription: 'Concentrado seco adulto',
      category: 'Alimento',
      image: "https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/349326916_760237642460458_6445698731829280513_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHOvgk21zBy9jieH2H2rLyMOFWUf3rLHY84VZR_essdj8OWoVxkhUrIPoNzoX7Ce3h2A-1Kg3apv8AxRTnVyzM1&_nc_ohc=eeObT1h93iMAX-8Aw8g&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfCPIbUo2v7FHnBHtyX4TTA68I2wbTnwa_7bbfVqR--HXg&oe=647C7053",
      description: 'NutriHuellitas Adulto es un alimento seco especialmente formulado para satisfacer las necesidades nutricionales de perros y gatos adultos. Contiene una combinación equilibrada de proteínas, carbohidratos, vitaminas y minerales esenciales para mantener la salud y vitalidad de tu mascota adulta.',
      price: 94000,
      attributes: {
        size: '7KG',      
        nutritionInfo: 'Proteína: 25% / Grasa: 12% / Fibra: 4% / Calcio: 1.2% / Fósforo: 1%',
        flavors: 'Sabor para gato: Salmón ahumado / Sabor para perro: Pollo a la parrilla',
      }
    },
    {
      id: 2,
      name: 'CrecimientoHuellitas Cachorro',
      generalDescription: 'Concentrado seco cachorro',
      category: 'Alimento',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350508628_639227918062462_8756843134276210470_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEzCFjyM1Q0HWKO5fO4BRqmGHa8UVSyf44YdrxRVLJ_jvgW2FvO3_2DMe-m-di3-8-ERD_BMeRQuMAtx348mHsE&_nc_ohc=lywesWI8pzoAX_J4mk2&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfCNuO6L5AajrUj1o6a1wTmbo7nHZlGgYwOiz2UbFne4hA&oe=647CEB5A',
      description: 'CrecimientoHuellitas Cachorro es un alimento seco de alta calidad diseñado específicamente para satisfacer las necesidades nutricionales de cachorros en crecimiento. Este concentrado proporciona los nutrientes esenciales necesarios para un desarrollo óptimo, promoviendo huesos fuertes, músculos saludables y un sistema inmunológico fortalecido.',
      price: 106000,
      attributes: {
        size: '7KG',
        nutritionInfo: 'Proteína: 28% / Grasa: 15% / Fibra: 3% / Calcio: 1.5% / Fósforo: 1%',
        flavors: 'Sabor para gato: Pavo tierno / Sabor para perro: Carne de res jugosa',
      }
    },
    {
      id: 3,
      name: 'DeliHuellitas Comida húmeda',
      generalDescription: 'Alimento húmedo',
      category: 'Alimento',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350520523_1269889210580690_3987029087890724716_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGGH4RUz__ewnQAir2QmFVNdbWF3iNW69B1tYXeI1br0D1tD8WMe-yhB7-sdAs6xHublkDQ_S4FL0f-55qsTzl8&_nc_ohc=_qYbYpfrQFQAX9EQPi0&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfAXbvqf8J-MU0m2D3NN_cVO2jwBiknhDU4jAp4sQT6c6g&oe=647DA6AB',
      description: 'DeliHuellitas Comida Húmeda es una deliciosa opción para agregar variedad a la dieta de tu mascota. Este alimento húmedo está hecho con ingredientes frescos y naturales, ofreciendo una experiencia gustativa irresistible. Además, proporciona una hidratación adicional y es fácil de digerir.',
      price: 11000,
      attributes: {
        size: '170GR',      
        nutritionInfo: 'Proteína: 8-10% / Grasa: 3-5% / Fibra: 1-2% / Calcio: 0.2-0.5% / Fósforo: 0.2-0.4%',
        flavors: 'Sabor para gato: Atún y mariscos / Sabor para perro: Estofado de pollo con vegetales',
      }
    },
    {
      id: 4,
      name: 'AlegriaHuellitas Snacks',
      generalDescription: 'Snacks',
      category: 'Alimento',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350664735_1254459865431794_3187130863690500226_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHDsD3T5HVmILiSPIpKu2dzGeHe3XJsZOUZ4d7dcmxk5SlnasiikCWOAMBk1Vrn2gcORCB-qcJ81yDzo2ZXAmwV&_nc_ohc=ki16Odl5jaoAX8PUuZd&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfAu2le_funE0wC0S-HXN186NlBUqJwXzRLbLBWsUpJN_w&oe=647CAE9C',
      description: 'AlegriaHuellitas Snacks son premios deliciosos y saludables que harán feliz a tu mascota. Están elaborados con ingredientes naturales y de alta calidad, sin aditivos artificiales. Estos snacks son ideales para entrenamiento, recompensas o simplemente como un regalo especial para consentir a tu peludo amigo.',
      price: 20000,
      attributes: {
        size: '500GR',      
        nutritionInfo: 'Proteína: 10-15% / Grasa: 5-8% / Fibra: 1-3% / Calcio:  0.2-0.5% / Fósforo: 0.1-0.3%',
        flavors: 'Sabor para gato: Delicias de salmón y pollo / Sabor para perro: Bocaditos de carne asada',
      }
    },
    {
      id: 5,
      name: 'ProtegeHuellitas',
      category: 'Ropa',
      generalDescription: 'Impermeable',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350778834_1306690520251458_4602292551393024584_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEFTBRGXSMv_XbN2ngcwA5GLlLiTEQtI2YuUuJMRC0jZr-lHrpM72KwxQfvygH8AXACyFkAnqSYBMSBAz6zAj4D&_nc_ohc=Fs1pUB7AL9YAX95FsbW&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfDNltxyhKXsCr8pU4Rf3nql85s-cgI1NG_UBTZWFIp7tQ&oe=647D578F',
      description: 'El impermeable ProtegeHuellitas de nuestra colección Pets Secrets es el accesorio perfecto para mantener a tu mascota seca y cómoda durante los días lluviosos. Está fabricado con un material resistente al agua y cuenta con un diseño ajustable que se adapta a diferentes tamaños y razas. Además, su capucha ajustable proporciona protección adicional para la cabeza y las orejas de tu mascota.',
      price: 51000,
      attributes: {
        size: 'XS / S / M / L / XL',
      }
    },
    {
      id: 6,
      name: 'Elegancia Cuadros',
      category: 'Ropa',
      generalDescription: 'Abrigo',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/349121188_266034299252165_7286878165890400137_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHWc8BmBbtus_ErupSBH7UyaKBRTtNpDZFooFFO02kNkTxCPiq0_2_2CBKi_ZwA8bsdIub4zmkjpbwzjOS1xwYm&_nc_ohc=E6ZfCGkZQfgAX9R-ZX7&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfAo78eTj6VEtfPII7GmqEl_4skKoW_Q8_Z7cAp5sTJzDw&oe=647BFF2D',
      description: 'El abrigo Elegancia Cuadros de nuestra colección Pets Secrets es una prenda de vestir con estilo para tu mascota. Confeccionado con una suave tela de cuadros, este abrigo combina moda y funcionalidad. Cuenta con un cierre de velcro en el pecho para un ajuste seguro y cómodo. Además, su diseño de manga larga proporciona calidez adicional en los días fríos.',
      price: 51000,
      attributes: {
        size: 'XS / S / M / L / XL',
      }
    },
    {
      id: 7,
      name: 'Pasos Seguros',
      category: 'Ropa',
      generalDescription: 'Zapatos para lluvia',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/349742874_1275915543030522_7233063479199064455_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeE3sOaaIRpbEKFEm182n6jiwcrBTCPb25fBysFMI9vbl5SYLXiR-H3VJS7KPn4oNCi-_Q2sQk2O5BRU3EmzdFhx&_nc_ohc=hvi0eyXfLdkAX-8N9xm&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfA0RMXRRI2jBeBvl3ly0w15wYnrnjx5M21mItsZuquOQA&oe=647C8975',
      description: 'Los zapatos Pasos Seguros de nuestra colección MichiGucci  son el calzado ideal para proteger las patas de tu mascota. Fabricados con materiales resistentes y suela antideslizante, estos zapatos proporcionan tracción y protección en diferentes superficies. Cuentan con cierres ajustables para un ajuste seguro y cómodo. Además, su diseño moderno y funcional garantiza que tu mascota camine con confianza y comodidad.',
      price: 16000,
      attributes: {
        size: 'S / M / L',
      }
    },
    {
      id: 8,
      name: 'Glamour Huellitas',
      category: 'Ropa',
      generalDescription: 'Esmoquín',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/348957201_6521538974601263_812531504744902532_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFxdG3L7xlN3S4zBThO0h7Nqmdl6KHvbs6qZ2Xooe9uzh27sLzuCmKTISU7i_U7vpfR_rwPapDTv068259vGlFk&_nc_ohc=qn8jrOVozQ0AX_660VN&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfBAs6rTW8jOc0tCDkvUegCb8ZW91dfqrPGW7RnpCG8OHw&oe=647D1A47',
      description: 'El esmoquín Glamour Huellitas de nuestra colección MichiGucci es el atuendo perfecto para ocasiones especiales. Confeccionado con materiales de alta calidad y atención al detalle, este smoking hará que tu mascota luzca elegante y sofisticada. Cuenta con un cuello en punta y botones decorativos, brindando un aspecto clásico y refinado. ¡Tu mascota se robará todas las miradas en cualquier evento!',
      price: 61000,
      attributes: {
        size: 'XS / S / M / L / XL',
      }
    },
    {
      id: 9,
      name: 'Rebote Huellitas',
      category: 'Juguetes',
      generalDescription: 'Pelota',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350509294_6248603775247699_4201068161112857191_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRKAtc2XrEEoXFT8ZUolaPaUqWuGRTRoBpSpa4ZFNGgHcBS0hjKJdGiLx9qwJf56YSfi6hjjXjqvktuPvvf-7C&_nc_ohc=JxnZ0MPZ9OAAX9Qlnlh&_nc_oc=AQlPjW3dtSARVDVm3cCcJcI6g_TkLakRsIcvOGYnOJ0oAkJj1vbN8lxgc_6L5xILncw&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfCAJwa5AEjltcN9QMFRCOBjeLafoZzh3pooT7Mb-cMdMg&oe=647D5D28',
      description: 'La pelota Rebote Huellitas es el juguete perfecto para que tu mascota se divierta y haga ejercicio. Fabricada con materiales duraderos y resistentes, esta pelota rebota y rueda, proporcionando horas de entretenimiento. Además, su textura especial ayuda a mantener los dientes limpios y masajeados mientras juega.',
      price: 8000,
    },
    {
      id: 10,
      name: 'AtrapaHuellitas',
      category: 'Juguetes',
      generalDescription: 'Caña de plumas',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/348919286_644886471014537_6793165143254137922_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHRwlihhCvbJ3FGGYnglmKJFp_2edaL3zEWn_Z51ovfMTJO9qGSfcd1craIj5hp8OAfbUUrbBG3TYVxQo6b8GLR&_nc_ohc=MUSON2wljDYAX8FcMkb&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfCgsZD_Ixg2csR_L4DFS8lMu67pOC6aWzl0uWulXZiYaw&oe=647D86C7',
      description: 'AtrapaHuellitas es una caña de plumas diseñada para estimular los instintos de caza de tu felino. Con una varita resistente y plumas suaves y coloridas al final, este juguete fomenta el ejercicio y la agilidad de tu gato. ¡Será imposible resistirse a perseguir y saltar tras las tentadoras plumas!',
      price: 9000,
    },
    {
      id: 11,
      name: 'Ratoncito Cazador',
      category: 'Juguetes',
      generalDescription: 'Peluche',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/348985949_636991661658186_562637293689718623_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGWN9HQ_zONFtJCNJkML-MBhL_1auXXYWCEv_Vq5ddhYLbivC9zKhaXuplMQcYjOqnY0TNFksaW-b4iEwSHPY0a&_nc_ohc=AgKrNqUnSjUAX-Jze5n&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfBsrnBq4bNvwQ5-3KzqxqhkVawk2PPMhaSjSqbBke-wpA&oe=647CCDE1',
      description: 'El peluche Ratoncito Cazador es el compañero de juego ideal para tu mascota. Fabricado con materiales suaves y seguros, este peluche en forma de ratón tiene un sonido crujiente en su interior que llamará la atención de tu perro o gato. Además, su tamaño y forma facilitan que tu mascota pueda agarrarlo y llevarlo consigo a todas partes.',
      price: 12000,
    },
    {
      id: 12,
      name: 'Vuelo Libre Huellitas',
      category: 'Juguetes',
      generalDescription: 'Frisbee',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350013035_1002630904434905_444652302012294319_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeGYrN-auRpZiXqp60IcSz8SbvRCFx0lMrJu9EIXHSUyssinZR71yRzD6MLl-Lgbb4OzrzGDk6gTz8IhlGKYRZ2k&_nc_ohc=bOPq314bWAUAX-dyOyw&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfCsXAVUYdmrVSu7v5oFIsTU_rTMba5UJk4CSB8M-107Dg&oe=647D1DEF',
      description: 'Vuelo Libre Huellitas es un frisbee perfecto para jugar al aire libre con tu perro. Fabricado con materiales resistentes pero suaves, este frisbee es ligero y fácil de lanzar, permitiendo que tu perro lo atrape en el aire. Es ideal para juegos de lanzamiento y recuperación, proporcionando diversión y ejercicio para tu fiel amigo.',
      price: 15000,
    },
    {
      id: 13,
      name: 'Brillante Huellitas',
      category: 'Accesorios',
      generalDescription: 'Collar',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350277039_914935096412075_3408788362617469788_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEjRt8ac6pXpw1-aU_YFB47dptfVLrzo_J2m19UuvOj8lTLAwfFp2f-DN_SsEXTPh1rCrZBHVS453dF2fAEf2aK&_nc_ohc=GlsdKP-0JrcAX-yU6cF&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfAfVtHgfmB1AqmJLIbWfKEorqCDjb91d5YY6CYij7WeTw&oe=647C0DE6',
      description: 'El collar Brillante Huellitas es un accesorio elegante y funcional para tu mascota. Está hecho de materiales duraderos y suaves para garantizar su comodidad. Cuenta con una hebilla resistente y un anillo en D para sujetar la correa. Además, está fabricado en colores vibrantes que hacen que tu mascota destaque y tenga ese toque de estilo único.',
      price: 16000,
      attributes: {
        colors: 'Rojo / Azul / Morado / Verde / Plateado',
        characteristics: 'Diseño liviano y ajustable para adaptarse a la comodidad del animal. / Material suave y transpirable para evitar rozaduras. / Anillo en D ligero pero resistente para un enganche seguro de la correa.',
      }
    },
    {
      id: 14,
      name: 'Huellitas Seguras',
      category: 'Accesorios',
      generalDescription: 'Correa',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350131627_1043183899996128_4849594325020051938_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHUBK5vUbbH-mQS302EZQtoAbNzUs8rBSQBs3NSzysFJJ8YwhnjJgQlzVwk32QDCVWFdrQ0IT2wB6_ACgzui3Qj&_nc_ohc=YK7U0G3ya8MAX_xHlqk&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfB7xZo6x6lXlHte08MS4MNFmdEtKsgG10IRuvV9Cpp_mQ&oe=647CE73E',
      description: 'La correa Huellitas Seguras es el accesorio ideal para asegurar paseos cómodos y controlados con tu mascota. Está diseñada con materiales duraderos y resistentes para garantizar su calidad. Su diseño ergonómico y antideslizante ofrece un agarre firme y cómodo. Además, cuenta con un mosquetón de alta resistencia que se engancha de manera segura al collar o arnés de tu mascota, brindándote tranquilidad durante los paseos.',
      price: 10000,
      attributes: {
        colors: 'Negro / Rojo / Azul / Verde',
        characteristics: 'Longitud ajustable para mayor flexibilidad durante los paseos. / Material resistente y duradero para una mayor seguridad. / Asa acolchada para un agarre cómodo y antideslizante.',
      }
    },
    {
      id: 15,
      name: 'Ajusta Huellitas',
      category: 'Accesorios',
      generalDescription: 'Arnés',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350663938_9753246041352943_1945926913478433458_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHT6DF1gQStfG-5-ODpYAQcGyVTTXqPDFkbJVNNeo8MWXe2EcMGhudWlMDluNuNvS_XKcmMkxTBmiA7eXXay6-E&_nc_ohc=awB5JMu2J40AX8VmrL4&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfBiNNrdGn_qhIyQOI8SgQN2U4lpkyqMGzUtuzpjUSygdQ&oe=647D7702',
      description: 'El arnés Ajusta Huellitas es una alternativa cómoda y segura al collar tradicional. Está hecho de materiales suaves y transpirables para proporcionar comodidad durante los paseos. Cuenta con correas ajustables en el pecho y el cuello para un ajuste personalizado. Además, tiene un anillo en D para sujetar la correa.',
      price: 42000,
      attributes: {
        colors: 'Beige / Verde / Azul / Rosa',
        characteristics: 'Diseño acolchado para mayor comodidad y protección. / Anillo en D resistente para una sujeción segura de la correa. / Material suave y transpirable para evitar rozaduras.',
      }
    },
    {
      id: 16,
      name: 'MotoProtector',
      category: 'Accesorios',
      generalDescription: 'Casco',
      image: 'https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/350029818_162764873257389_5061404365925200411_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeFjYmqjx-ubIDggdLgQe2a0NEAu2PCzQok0QC7Y8LNCia8__sbROodqHYPPQ5NGtuFIdhdWToKjwaTGxGvoFZUa&_nc_ohc=RD31OGoOvWQAX9TDPmV&_nc_zt=23&_nc_ht=scontent-bog1-1.xx&oh=00_AfDDhQwbh0Dj8lN7YoQqoe7gFNYPPHjMwJMbkzF8Z8v4ug&oe=647D7469',
      description: 'El casco MotoProtector es un accesorio de seguridad imprescindible para proteger a tu mascota durante los paseos en moto. Está fabricado con materiales resistentes y cuenta con un diseño aerodinámico y ventilado. Además, tiene una correa de sujeción ajustable para un ajuste seguro.',
      price: 116000,
      attributes: {
        colors: 'Negro / Beige',
        characteristics: 'Tallas disponibles para adaptarse a diferentes razas y tamaños. / Interior acolchado para mayor comodidad y absorción de impactos. / Correa de sujeción ajustable con cierre de liberación rápida.',
      }
    },
  ];
  
  export default datosproductos;
