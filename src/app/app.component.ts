import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Alunos';
  nome = '';
  sobrenome = '';
  textoBotao: string = 'Clique aqui!';
  botaoDesabilitado: boolean = false;
  mensagem: string = '';

  onBotaoClicado() {
    console.log(this.nome)
    alert(`Olá ${this.nome} ${this.sobrenome} !`) ;
  }

  onKeyUp(event: Event) {
    const input = event.target as HTMLInputElement;
    this.mensagem = `Olá ${input.value} !`;
  }
}
