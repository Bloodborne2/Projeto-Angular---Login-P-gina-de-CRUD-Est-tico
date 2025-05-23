import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  exibirLogo: boolean = true;
  itensMenu = [
    { label: 'Home', link: '' },
    { label: 'Login', link: '/pessoas/login' },
    { label: 'Cadastro', link: 'pessoa/incluir' },
    { label: 'Sobre', link: '/sobre' },
    { label: 'Ajuda', link: '/ajuda' }
    
  ]

}
