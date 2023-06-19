import { Component } from '@angular/core';
import { GalleryI } from './models/interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  comedyFilms: GalleryI = {
    section:  "Comedia",
    films: [
      {
    title: "¿Que paso ayer?",
    img: "https://occ-0-2219-420.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbrSxyWXpjG_O6KCKJqKaqQ9kzhhks_5q0kMo92lfWESloMd8j74sDlEQzmnuLdUW5uuG_1r99vR2zEh-8BRvwfPFKNiI4NX4VJj.jpg?r=be6"
    },
    {
      title: "Una noche en el Roxbury",
      img: "https://www.cinepremiere.com.mx/wp-content/uploads/2021/12/Una-noche-en-el-Roxbury-soudtrack.jpg"
    },
    {
      title: "Ted 2",
      img: "https://i.ytimg.com/vi/BKXrZhR1R48/mqdefault.jpg"
    },
    {
      title: "¿Y donde estan las rubias?",
      img: "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/4aef891def3448287f41f06b1e1e32c9b3084e349d8a7bd21d4cfb19b8276791._UY500_UX667_RI_TTW_.jpg"
    },
    {
      title: "Son como niños",
      img: "https://occ-0-2568-1348.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTUpm3CaMKSADi8m6GOFfFiS59xl7jDq6kejEkneudsvV42bTOVM9q3Lqj-Nvr6LfzOaktQn8sD9fAViUR5C79F-O0tH4_tm5vhU.jpg?r=2e2"
    }
  ] 
  }

terrorFilms: GalleryI = {
  section: "Terror",
  films: [
    {
      title: "El Exorcista",
      img: "https://occ-0-778-2186.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcGmzTBZz5eME7kpttuP89yvC7VxH8h-NmLoUIfbjfGjCP-K3p7fj1KGLttoU422xHmmpc2dpw1mxhjrhWinJo-2XErmvJxfrErc.jpg?r=e2e"
    },
    {
      title: "The Black Phone",
      img: "https://www.xgn.nl/images/articles/2022/202207/_970x545_crop_center-center_82_line/2022-07-18-the-black-phone.f1657793017.jpg"
    },
    {
      title: "Megan",
      img: "https://www.xgn.nl/images/articles/2023/202301/_970x545_crop_center-center_82_line/2023-09-01-m3gan.f1673085330.jpg"
    },
    {
      title: "Annabelle",
      img: "https://occ-0-358-1361.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdI0xjtJYQk81GQQQOCm7Hn7mBGpXMj21uKAZCWJA71MhDNUBr1JBumm0nWuB8tXsF6rPxxv4slAGRwGiZZvxkgLrNZtWANwI-sM.jpg?r=793"
    },
    {
      title: "IT",
      img: "https://occ-0-358-1361.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABaDAys9_34Jua_8OX0GaoOipfu1x60TRG37gS3ObbZrNdihJDk_1Ks_hLqdtr7S0SYuqAgoagIAZ1fBq4SLXNqHTkzbwGb4lNX_G.jpg?r=9df"
    }
  ]
}

popularFilms: GalleryI = {
  section: "Populares en España",
  films: [
    {
      title: "The Last Dance",
      img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/8433ca97660509.5ecaa1535113d.png"
    },
    {
      title: "Sherlock Holmes",
      img: "https://assets.nflxext.com/us/boxshots/hd1080/70110558.jpg"
    },
    {
      title: "Los 100",
      img: "https://images.justwatch.com/poster/250699744/s718/the-100.%7Bformat%7D"
    },
    {
      title: "Altered Carbon",
      img: "https://m.media-amazon.com/images/I/917Cyx04EIL._AC_UF1000,1000_QL80_.jpg"
    }
  ]
}
}
