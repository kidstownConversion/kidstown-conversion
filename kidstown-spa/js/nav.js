// Replaces scripts/home/navbar.pl. Every HREF="$ktini{engine}?KEY=NNNN" becomes a
// data-key link that router.js's click handler intercepts.
//
// Only City Hall, Toy Store, and City Park are wired up here (that's what's converted so far).
// The other buttons are left as plain text placeholders for the teammates converting those
// sections -- swap the <span> for an <a href="#" data-key="NNNN"> once that section exists,
// using the same KEY numbers as the original kt.db (School=4000, Library=6000, Zoo=9000,
// TownShip=3000, Museum=8000).
function renderNavbar(helpState) {
  return `
    <table cellspacing="0" cellpadding="6" border="0">
      <tr>
        <td><a href="#" data-key="1000"><img src="${config.homeGraphics}/navbtn_town.gif" border="0"><br>KidsTown</a></td>
        <td><a href="#" data-key="5000"><img src="${config.homeGraphics}/navbtn_cityhall.gif" border="0"><br>CityHall</a></td>
        <td><span class="navbtn-disabled"><img src="${config.homeGraphics}/navbtn_school.gif"><br>School</span></td>
        <td><span class="navbtn-disabled"><img src="${config.homeGraphics}/navbtn_library.gif"><br>Library</span></td>
        <td><span class="navbtn-disabled"><img src="${config.homeGraphics}/navbtn_zoo.gif"><br>Zoo</span></td>
        <td><a href="#" data-key="7000"><img src="${config.homeGraphics}/navbtn_toystore.gif" border="0"><br>ToyStore</a></td>
        <td><a href="#" data-key="2000"><img src="${config.homeGraphics}/navbtn_citypark.gif" border="0"><br>CityPark</a></td>
        <td><span class="navbtn-disabled"><img src="${config.homeGraphics}/navbtn_township.gif"><br>TownShip</span></td>
        <td><span class="navbtn-disabled"><img src="${config.homeGraphics}/navbtn_museum.gif"><br>Museum</span></td>
        <td><a href="#" data-key="${helpState}"><img src="${config.homeGraphics}/navbtn_help.gif" border="0"><br>Help</a></td>
      </tr>
    </table>
  `;
}
