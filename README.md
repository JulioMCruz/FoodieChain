#BlockBocado

## Inspiración

Un día quería preparar una ensalada de tomates y me dirigí al refrigerador porque sabía que allí había, sin embargo, no recordaba cuando lo habían comprado. Es por ello, que cuando los busqué me di cuenta que ya algunos se habían malogrado y tuve que tirarlos. Mi familia es de bajos recursos y al tirarlos pensé. ¿Cómo es posible que bote comida incluso en mi situación económica?

## ¿Qué hace?

Ayuda a las personas a estar pendientes de los alimentos que le sobran para poder generar ingresos extras mediante la venta de los mismos en un Marketplace. Además, permite a las personas encontrar ingredientes que necesitan cerca a su casa y a un bajo precio. Y por último, fomenta el sentido de comunidad y cercanía entre vecinos y su localidad.

## ¿Cómo fué Construido?

Blockbocado fue construido usando las últimas tecnologias para aplicaciones web 3.

En el desarrollo de los Smart-Contracts se uso la herramienta de Scaffold-Eth-2 que nos ofrece herramientas para el desarrollo en Solidity así como la ejecución de pruebas y un correcto despliegue y verificación de los Smart Contracts en las redes de Polygon y Scroll.

En el Desarrollo del Front-end se uso NextJs como framework principal y sobre ello las librerías de tailwind y ShadCn que proveen standards para componentes web de fácil entendiendo para los usuarios.

Para la conexion del Front-end con los smart contracts se uso las librerias de Privy, wagmi, viem. Para la recuperacion de datos se ha usado Graph protocol ya que los smart contracts tienen eventos que estan conectados a un sub-graph para el facil accesso de la informacion por parte de la aplicaicion.

## Retos que Atravesamos

Teníamos muy claro la problemática a abordar, pero la solución fue evolucionando y cambiando un poco cada día a medida que teníamos mentorías, porque surgían nuevas perspectivas, y teníamos cada vez nuevas ideas sobre cómo realizar las cosas, y qué implementar. Por lo cuál, no fue hasta el Jueves que la idea se terminó de formar completamente.

También teníamos dudas sobre en cuál red desarrollar nuestro proyecto, así sobre cómo hacer con los productos, si volverlos NFT’s o Attestation, no teníamos claro. Por ello, comenzamos el desarrollo un poco tarde. 

También nuestra desarrolladora Móvil no encontró muchas librerías web3 que utilizen Flutter, sino React un lenguaje que no domina, por lo cual tuvo que cambiar de Rol al área de Diseño.

Teníamos un desarrollador IA, porque planeábamos implementarlo al inicio, pero con la evolución de la idea, la IA dejó de ser una prioridad en la plataforma, y el tampoco ya no tenía el tiempo disponible para seguir en la Hackathon, sin embargo nos apoyó con el logo y el nombre.

## Logros que están orgullosos
Que nuestra idea abarca un problema muy real y grave, y va más por el lado social de hacer un bien y ayuda a las comunidades a evitar desperdiciar sus alimentos, ahorrar en su hogar y generar ingresos extras.
Haber aprendido bastante de los mentores, y recibido su guía y orientación.
El compromiso de amanecerse para el Jueves y Viernes.

## ¿Qué aprendimos?
Aprendimos a enamorarnos del problema y no de la solución para aceptar las nuevas ideas y cambios que surgían cada vez, esta frase la aprendimos de un excelente compañero de equipo, nuestro amigo Julio.
Aprendimos a ver nuevas perspectivas, a trabajar en equipo, a adaptarnos al cambio rápidamente.
Aprendimos a entender más las funcionalidades y utilidades de los NFT's en que casos si van o no, acerca del Zero Knowledge, el uso de ENS, como reducir costos en la Blockchain, etc.

## Siguientes pasos para BlockBocado

La aplicación se le adicionará la funcionalidad de multichain usando tecnologías como Chainlink o Hyperlane asi los usuarios pueden usar el token que deseen en la chain que ellos prefieran.

Se adicionará la funcionalidad de compartir en redes sociales como Farcaster, X e instagram para que los usuarios puedas compartir sus avanzes y ayudar a la educación de su comunidad en el ahorro del uso de sus alimentos.

# Despliege de Smart Contracts

##  [BlockBocado.sol](https://github.com/margajm/FoodieChain/blob/f92c3b12041496f9bc7bd4672bc67a3821ff4104/scaffold-eth-2/packages/hardhat/contracts/BlockBocado.sol#L6-L7)

### Polygom Amoy: [Contract](https://amoy.polygonscan.com/address/0x270B8770F59c767ff55595e893c7E16A88347FE9#code)
Direccion del Contracto: 0x270B8770F59c767ff55595e893c7E16A88347FE9<br>
Trasaccion Hash: 0xf2fa25c7d65ba38721a3f07b41f2e54d2522fdb6dfa4437e7c7c832f22eabdb9


### Polygon zkEVM Cardona Testnet: [Contract](https://cardona-zkevm.polygonscan.com/address/0xD66D2D5F1114d6F6ee30cEbE2562806aFC23F3E6)
Direccion del Contracto: 0xD66D2D5F1114d6F6ee30cEbE2562806aFC23F3E6<br>
Trasaccion Hash: 0x8f07c2622c57b820d2a2c7e1d78fc962bc12a1fbb98b6ecaf0a252d37cd97f43

### Scroll Sepolia: [Contract](https://sepolia.scrollscan.com/address/0x270B8770F59c767ff55595e893c7E16A88347FE9)
Direccion del Contracto: 0x270B8770F59c767ff55595e893c7E16A88347FE9<br>
Trasaccion Hash: 0xa2df7272dcd93041a3322e1c9b3bf157fe2a23bb341fb3a1637127550f10e5e6


## [ENSSubdomainManager.sol](https://github.com/margajm/FoodieChain/blob/f92c3b12041496f9bc7bd4672bc67a3821ff4104/scaffold-eth-2/packages/hardhat/contracts/ENSSubdomainManager.sol#L16)

### Polygom Amoy:
Direccion del Contracto: 0xB2d8a2ce4A3a5B63CE60b0AE7593dD9A30eeFe77<br>
Trasaccion Hash: 0xc5dbd58b83ba03ee3cc1c3f26fff8b4f195dd23b00d2eca9688a3342da4ba2a1

### Scroll Sepolia:
Direccion del Contracto: 0xB2d8a2ce4A3a5B63CE60b0AE7593dD9A30eeFe77<br>
Trasaccion Hash: 0x335c174fef6dd564dd22e625f06caae5cb702e9aa23f7fe3a8c73f4ad877ec0c


