const menu = document.querySelector( "#bars-menu" );
const listMenu = document.querySelector( "#list-menu" );

menu.addEventListener( "click", () => {

     if ( listMenu.classList.contains( 'hidden' ) ) {
          listMenu.classList.remove( 'hidden' );
     } else {
          listMenu.classList.add( 'hidden' );
     }
} );

const animation = ScrollReveal( {
     distance: '100px',
     duration: 3000,
} )


animation.reveal( `nav`, {
     origin: 'top',
     interval: 100,
} )

animation.reveal( ` .FAQ , .Features > div`, {
     origin: 'left',
} )

animation.reveal( `.contact , Footer`, {
     origin: 'right',
     interval: 100,
} )
animation.reveal( `.Hero , .Download`, {
     origin: 'bottom',
     interval: 100,
} )