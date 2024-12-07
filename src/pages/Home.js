import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom'; // Assurez-vous que React Router est bien installé

const Home = () => {
  return (
    <div className="home">
      {/* Section à propos du restaurant */}
      <section className="about">
        <h2>À Propos de Nous</h2>
        <p>
          Chez Restaurant Gourmet, nous croyons que chaque repas doit être une expérience mémorable. 
          Notre équipe passionnée s'efforce de vous offrir une cuisine de qualité, 
          préparée avec des ingrédients frais et locaux. Nous vous proposons une sélection 
          de plats inspirés des saveurs du monde entier, tout en gardant une touche de tradition.
        </p>
        <p>
          Nous vous accueillons dans un cadre chaleureux, parfait pour un repas en famille, 
          un dîner romantique ou une sortie entre amis.
        </p>
      </section>

      {/* Section avec le menu */}

	
	<section className="menu">
  	<h2>Notre Menu</h2>
	  <p>Découvrez notre menu soigneusement conçu pour satisfaire tous les goûts et commander sur la page de commande.</p>
  
	  {/* Lien vers la page de commande */}
	  <Link to="/cart" className="order-link">Accéder à la page de commande</Link>
	</section>



      {/* Section horaires d'ouverture */}
     <section className="hours">
  <h2>Nos Horaires</h2>
  <p>Nous sommes ouverts tous les jours de la semaine :</p>
  <ul>
    <li><span className="day">Lundi - Vendredi:</span> 12:00 - 14:30 et 18:30 - 22:00</li>
    <li><span className="day">Samedi - Dimanche:</span> 12:00 - 22:00</li>
  </ul>
</section>


      {/* Section promotions spéciales */}
 <section className="promotions">
  <h2>Offres Spéciales</h2>
  <p>Profitez de nos offres exclusives du mois :</p>
  <ul>
    <li>10% de réduction sur toutes les pizzas les lundis</li>
    <li>Menu spécial à prix réduit pour les groupes de 5 personnes ou plus</li>
    <li>Offre anniversaire : dessert gratuit avec tout repas principal</li>
  </ul>
</section>


      {/* Section des témoignages */}
      <section className="testimonials">
        <h2>Avis Clients</h2>
        <div className="testimonial">
          <p>
            "Un repas incroyable ! Les plats sont délicieux et le service impeccable. 
            J'ai hâte de revenir !" - <strong>Marie D.</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Une expérience culinaire fantastique. Les saveurs sont uniques et le cadre est parfait." 
            - <strong>Paul L.</strong>
          </p>
        </div>
      </section>

    </div>
  );
};

export default Home;
