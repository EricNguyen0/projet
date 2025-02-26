import React from 'react'; // Importer la bibliothèque React
import './CardContainer.css'; // Importer le fichier CSS de CardContainer
const CardContainer = () => {
  return (
    <div>
      
      <h2 className='ProjetTitre'>Mes Projets</h2>
      <div className="card-container">
        {/* CARD 1 Modelisation Tank TORTUE */}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src="./images/TANK.png" alt="" style={{ width: '100%', height: '90%', objectFit: 'fill' }} />
              </div>
            </div>
            <div className="front">
              <div className="img">
                <img src="./images/TANK.png" alt="" />
              </div>
              <div className="front-content">
                <small className="badge">3D</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>Tortue Hybride</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    Maya &nbsp; | &nbsp; rendu via Arnold
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Repeat similar structure for other cards */}
        {/* CARD 2  AFFICHE Ma Boussole*/}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src="./images/1.png" alt="" style={{ width: '100%', height: '90%', objectFit: 'fill' }} />
              </div>
            </div>
            <div className="front">
              <div className="img">
                <img src="./images/2.png" alt="" />
              </div>
              <div className="front-content">
                <small className="badge">Adobe Suite</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>Ma Boussole</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    Affiche pour &nbsp; | &nbsp; app mobile
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 3 FILM ZOMBIE MAIN AFTER EFFECT */}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src="./images/3.png" alt="" style={{ width: '100%', height: '90%', objectFit: 'fill' }} />
              </div>
            </div>
            <div className="front">
              <div className="img">
                <img src="./images/hand.png" alt="" />
              </div>
              <div className="front-content">
                <small className="badge">After Effect</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>Zombie</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    Film d'horreur &nbsp; | &nbsp; immersive
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 4  LIVRE Biere Stage*/}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src="./images/4.png" alt="" style={{ width: '100%', height: '90%', objectFit: 'fill' }} />
              </div>
            </div>
            <div className="front">
              <div className="img">
                <img src="./images/4.png" alt="" />
              </div>
              <div className="front-content">
                <small className="badge">Illustrator</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>Conception graphique</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    Livre &nbsp; | &nbsp; Design
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CARD 5 Modelisation Talisman */}
        <div className="card">
          <div className="content">
            <div className="back">
              <div className="back-content">
                <img src="./images/5.png" alt="" style={{ width: '100%', height: '90%', objectFit: 'fill' }} />
              </div>
            </div>
            <div className="front">
              <div className="img">
                <img src="./images/5.png" alt="" />
              </div>
              <div className="front-content">
                <small className="badge">3D</small>
                <div className="description">
                  <div className="title">
                    <p className="title">
                      <strong>Talisman</strong>
                    </p>
                  </div>
                  <p className="card-footer">
                    Maya &nbsp; | &nbsp; Render via Arnold
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;