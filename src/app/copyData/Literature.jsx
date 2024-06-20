import { Article } from "../../Components/Article/Article";
import { Image } from "../../Components/Image/Image";
import { LiteratureCopy } from "../../Copy/LiteratureCopy";
import styles from "./Literature.module.css";
import { images } from "../../Copy/LiteratureImages";

export function Literature() {
  return (
    <div className={styles.literature}>
      <Article className={styles.article}>
        <LiteratureCopy />
      </Article>
      <div>
        {images.map((image) => (
          <Image
            alt="pic"
            key={image.id}
            Source={image.Source}
            AltText={image.AltText}
            Caption={image.Caption}
          />
        ))}
      </div>
    </div>
  );
}

/*        <section>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Nienasycenie_Przebudzenie_%28first_edition%29_%28cover%29.jpg"
            alt="Book cover of Instability"
          />
          <figcaption>Instability Part 1, original edition 1930</figcaption>
        </section>
        <section>
          <img
            src="https://smakliter.pl/Photos/10/LARGE/000079/narkotyki.jpg"
            alt="Book cover of the Drugs"
          />
          <figcaption>Book cover for the Drugs</figcaption>
        </section>
        <section>
          <img
            src="https://polishpostergallery.com/posters/klimowski_andrzej_panna_tutli_putli.jpg"
            alt=""
          />
          <figcaption>
            Poster for play `Panna Tutli Putli by Andrzej Klimowski
          </figcaption>
        </section>
        <section>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Stanis%C5%82aw_Ignacy_Witkiewicz%2C_%22Matka%22.jpg"
            alt=""
          />
          <figcaption>
            The manuscript of the play `Matka` (Mother), 1924.
          </figcaption>
        </section>
        <section>
          <img src="https://image.tmdb.org/t/p/w1280/sDASPx0rZGLa2MDiaJqEb7HzuHM.jpg" />
          <figcaption>Farewell to Autumn - movie poster (1990)</figcaption>
        </section> */
